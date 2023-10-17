import { FC } from 'react';
import { Language } from '../../interfaces/common';

interface RadioButtonProps {
  groupValue: string;
  groupName: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const RadioButton: FC<RadioButtonProps> = ({ groupValue, groupName, onChange, value, label }) => {
  return (
    <label className="group relative mb-4 block cursor-pointer select-none pl-10">
      <input
        type="radio"
        value={value}
        name={groupName}
        className="peer absolute cursor-pointer opacity-0"
        checked={groupValue === value}
        onChange={(e) => onChange(e.target.value as Language)}
      />
      {label}
      <span
        className="absolute left-0 top-0 h-8 w-8 rounded-full bg-white transition-all duration-300 
      after:absolute after:left-2 after:top-2 after:hidden after:h-4 after:w-4 after:rounded-full 
      after:bg-white after:content-[''] group-hover:bg-slate peer-checked:bg-gray-500 
      peer-checked:after:block peer-focus:outline peer-focus:outline-4 peer-focus:outline-green"
      ></span>
    </label>
  );
};

export default RadioButton;
