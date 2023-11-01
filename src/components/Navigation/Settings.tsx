import { useState, useEffect } from 'react';
import { languages } from '../../utils/common';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { useTranslation } from 'react-i18next';

const languageOptions = languages.map((l) => ({ name: 'language', value: l }));

const Settings = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const changeTheme = () => console.log('changing theme');

  const [language, setLanguage] = useState<string>(languages[0]);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <div data-testid="settings">
      {/* theme switch */}
      <div
        data-testid="theme-switch-settings"
        className="mb-6 flex w-full flex-col justify-between pb-2 sm:border-b-[1px] sm:border-b-navy-xl sm:pb-7"
      >
        <h4 className="mb-1 hidden text-lg text-slate-xl sm:block">{t('settings.mode')}</h4>
        <ToggleSwitch onChange={changeTheme} label={t('settings.modeSwitchLabel')} />
      </div>
      {/* language selection */}
      <div data-testid="language-settings">
        <h4 className="mb-3 hidden text-lg text-slate-xl sm:block">{t('settings.language')}</h4>
        <RadioButtonGroup
          label={t('settings.languageTooltip')}
          options={languageOptions}
          onChange={setLanguage}
          defaultChecked={language}
        />
      </div>
    </div>
  );
};

export default Settings;
