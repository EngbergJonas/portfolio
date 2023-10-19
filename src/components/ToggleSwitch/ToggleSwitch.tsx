import { FC, useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  onChange: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ onChange, label }) => {
  const [toggled, setToggled] = useState(false);

  const handleChange = () => {
    onChange();
    setToggled((current) => !current);
  };

  return (
    <label
      data-testid={`toggle-switch-label`}
      className="flex w-full cursor-pointer items-end justify-between"
    >
      <input
        data-testid="toggle-switch-input"
        type="checkbox"
        checked={toggled}
        className="peer sr-only"
        onChange={handleChange}
      />
      {label}
      <div className="group relative inline-flex items-center">
        <div
          data-testid="toggle-switch"
          className="bg-slate-xl h-7 w-14 rounded-full before:absolute
          before:left-[4px] before:top-0.5 before:h-6 before:w-6 before:rounded-full 
          before:bg-navy-l before:transition-all before:content-[''] 
          peer-checked:group-[]:before:translate-x-full peer-focus-visible:group-[]:outline-dashed 
          peer-focus-visible:group-[]:outline-2 peer-focus-visible:group-[]:outline-offset-8 
          peer-focus-visible:group-[]:outline-green"
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
