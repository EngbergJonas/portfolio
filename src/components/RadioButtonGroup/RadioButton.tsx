import { ChangeEvent, FC, useMemo } from 'react';

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked: string;
  type?: 'checkmark' | 'bullet';
}

const RadioButton: FC<RadioButtonProps> = ({
  name,
  onChange,
  value,
  label,
  type,
  defaultChecked,
}) => {
  const isChecked = useMemo(() => defaultChecked === value, [defaultChecked, value]);

  return (
    <label
      data-testid={`radio-button-label-${value}`}
      className={`text-slate-xl group relative flex cursor-pointer select-none 
        items-center pb-6 hover:text-green ${isChecked ? 'font-bold !text-green' : ''}`}
    >
      <input
        type="radio"
        data-testid={`radio-button-input-${value}`}
        value={value}
        name={name}
        className="peer sr-only cursor-pointer"
        checked={isChecked}
        onChange={onChange}
      />
      {label}
      <span
        data-testid={`radio-button-span-${value}`}
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
