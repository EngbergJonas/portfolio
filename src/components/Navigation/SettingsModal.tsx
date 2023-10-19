import { useTranslation } from 'react-i18next';
import { languages } from '../../utils/common';
import ReactModal from 'react-modal';
import { FC, useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';

const customStyles = {
  overlay: {
    zIndex: 999,
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
    backdropFilter: 'blur(4px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginLeft: '-50%',
    zIndex: 999,
    background: '#112240',
    border: 'none',
    margin: 0,
    borderRadius: '8px',
    width: '26rem',
    padding: '0.5rem 1.5rem',
  },
};

interface SettingsModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const options = languages.map((l) => ({ name: 'language', value: l }));

const SettingsModal: FC<SettingsModalProps> = ({ isOpen, toggleModal }) => {
  const {
    i18n: { changeLanguage },
    t,
  } = useTranslation();

  const [language, setLanguage] = useState<string>(languages[0]);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const changeTheme = () => console.log('changing theme');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      closeTimeoutMS={300}
      contentLabel="settings modal"
    >
      <div data-testid="settings-modal" className="mt-4">
        {/* header */}
        <div
          data-testid="settings-modal-header"
          className="border-b-navy-xl mb-6 flex w-full items-center justify-between border-b-[1px] pb-4"
        >
          {/* title */}
          <div>
            <h3 className="text-slate-xl mb-1 whitespace-nowrap text-xl font-medium">
              {t('settingsModal.title')}
            </h3>
            <p>{t('settingsModal.titleTooltip')}</p>
          </div>
          {/* close button */}
          <MenuButton
            onClick={toggleModal}
            label="close settings"
            defaultOpen={true}
            size="sm"
            animate={false}
          />
        </div>
        {/* theme switch */}
        <div className="border-b-navy-xl mb-6 flex w-full flex-col justify-between border-b-[1px] pb-7">
          <h4 className="text-slate-xl text-lg">{t('settingsModal.mode')}</h4>
          <ToggleSwitch onChange={changeTheme} label={t('settingsModal.modeSwitchLabel')} />
        </div>
        {/* language selection */}
        <h4 className="text-slate-xl mb-1 text-lg">{t('settingsModal.language')}</h4>
        <RadioButtonGroup
          label={t('settingsModal.languageTooltip')}
          options={options}
          onChange={setLanguage}
          defaultChecked={language}
        />
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
