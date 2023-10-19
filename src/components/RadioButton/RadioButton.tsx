import { ChangeEvent, FC, useMemo } from 'react';
import { Language } from '../../interfaces/common';

interface RadioButtonProps {
  targetValue: string;
  name: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  type?: 'checkmark' | 'bullet';
}

const RadioButton: FC<RadioButtonProps> = ({ targetValue, name, onChange, value, label, type }) => {
  const isChecked = useMemo(() => targetValue === value, [targetValue, value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as Language);
  };

  return (
    <label
      data-testid={`radio-button-${value}-label`}
      className={`text-slate-xl group relative flex cursor-pointer select-none 
      items-center pb-6 hover:text-green ${isChecked ? 'font-bold text-green' : ''}`}
    >
      <input
        type="radio"
        data-testid={`radio-button-${value}-input`}
        value={value}
        name={name}
        className="peer sr-only cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
      />
      {label}
      <span
        data-testid={`radio-button-${value}-span`}
        className={`absolute right-0 top-0 h-7 w-7 rounded-full border-2 
        border-white group-hover:border-green peer-checked:border-4
        peer-checked:border-green peer-focus-visible:outline-dashed 
        peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 
        ${type === 'checkmark' ? 'radio-button-checkmark' : 'radio-button-bullet'}`}
      ></span>
    </label>
  );
};

export default RadioButton;
