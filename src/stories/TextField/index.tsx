import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import css from './textfield.module.css';
import ClassName from 'classnames';

export type InputValidation = 'valid' | 'invalid' | 'unknown';
export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  validation: InputValidation;
  lazyChange?: boolean;
  onChange: (value: string) => void;
  leadingIcon?: ReactElement;
  tailingIcon?: ReactElement;
  containerClass?: string;
}

/**
 * Primary UI component for user interaction
 */

interface InputState {
  disabled?: boolean;
  validation: InputValidation;
}
const _getWrapperClass = (state: InputState) => {
  const { disabled, validation } = state;
  if (disabled) {
    return css['input-wrapper-disabled'];
  }
  switch (validation) {
    case 'valid':
      return css['valid-input'];
    case 'invalid':
      return css['invalid-input'];
    default:
      return '';
  }
};
const TextField: React.FC<TextFieldProps> = ({
  validation = 'unknown',
  lazyChange = true,
  onChange,
  leadingIcon,
  tailingIcon,
  containerClass,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [inputState, setInputState] = useState<InputState>(() => ({
    disabled: props.disabled,
    validation: props.validation,
  }));

  const handleFocus: React.FocusEventHandler = (e) => {
    if (inputState.disabled) return;
    inputRef.current?.focus();
    setFocused(true);
  };

  const handleBlur: React.FocusEventHandler = (e) => {
    if (inputState.disabled) return;
    inputRef.current?.blur();
    setFocused(false);
  };
  useEffect(() => {
    if (
      lazyChange &&
      !focused &&
      inputRef.current !== null &&
      onChange !== null
    ) {
      onChange(inputRef.current.value);
    }
  }, [focused]);

  const _handleChange = () => {
    if (lazyChange) return;
    else if (inputRef.current !== null) {
      onChange(inputRef.current.value);
    }
  };
  return (
    <div
      tabIndex={-1}
      className={ClassName(
        focused ? css['input-wrapper-focus'] : _getWrapperClass(inputState),
        css['input-wrapper'],
        containerClass
      )}
      onFocus={handleFocus}
    >
      {leadingIcon && (
        <span
          className={ClassName(
            css['leadings-icon'],
            'text-2xl',
            focused ? 'text-cla-blue' : 'text-gray-400',
          )}
        >
          {leadingIcon}
        </span>
      )}

      <input
        ref={inputRef}
        className={ClassName(css['input-field'])}
        onChange={_handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {tailingIcon && (
        <span
          className={ClassName(
            css['tailing-icon'],
            'text-2xl',
            focused ? 'text-cla-blue' : 'text-gray-400',
          )}
        >
          {tailingIcon}
        </span>
      )}
    </div>
  );
};

export default TextField;
