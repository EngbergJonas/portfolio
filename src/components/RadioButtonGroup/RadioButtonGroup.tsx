import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Option } from '../../interfaces/common';
import { useTranslation } from 'react-i18next';
import RadioButton from './RadioButton';

interface RadioButtonGroupProps {
  options: Array<Option>;
  onChange: (value: string) => void;
  defaultChecked?: string;
  label: string;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  options,
  onChange,
  defaultChecked,
  label,
}) => {
  const { t } = useTranslation();

  const [checkedValue, setCheckedValue] = useState(defaultChecked ?? options[0].value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckedValue(value);
    onChange(value);
  };

  // Keep the desired checked value up to date if the defaultChecked value changes
  useEffect(() => {
    if (defaultChecked && defaultChecked !== checkedValue) {
      setCheckedValue(defaultChecked);
    }
  }, [defaultChecked]);

  return (
    <fieldset>
      <legend className="mb-6 text-lg sm:text-base">{label}</legend>
      <div className="ml-4">
        {options.map((o) => (
          <RadioButton
            key={o.value}
            name={o.name}
            defaultChecked={checkedValue}
            label={t(`language.${o.value}`)}
            value={o.value}
            onChange={handleChange}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default RadioButtonGroup;
