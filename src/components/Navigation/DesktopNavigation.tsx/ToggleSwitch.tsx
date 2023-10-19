import { FC } from 'react';

interface ToggleSwitchProps {
  toggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ toggled, onToggle }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" checked={toggled} className="peer sr-only" onChange={onToggle} />
      <div
        className="bg-slate-xl h-7 w-14 rounded-full before:absolute
          before:left-[4px] before:top-0.5 before:h-6 before:w-6 before:rounded-full 
          before:bg-navy-l before:transition-all before:content-[''] 
          peer-checked:before:translate-x-full peer-focus-visible:outline-dashed 
          peer-focus-visible:outline-2 peer-focus-visible:outline-offset-8 peer-focus-visible:outline-green"
      ></div>
    </label>
  );
};

export default ToggleSwitch;
