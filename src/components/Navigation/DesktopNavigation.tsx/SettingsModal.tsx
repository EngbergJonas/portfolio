import { useTranslation } from 'react-i18next';
import { languages } from '../../../utils/common';
import ReactModal from 'react-modal';
import { FC, useEffect, useState } from 'react';
import MenuButton from '../../MenuButton.tsx/MenuButton';
import RadioButton from '../../RadioButton/RadioButton';
import './styles.css';
import ToggleSwitch from './ToggleSwitch';

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

const SettingsModal: FC<SettingsModalProps> = ({ isOpen, toggleModal }) => {
  const {
    i18n: { changeLanguage, language: currentLanguage },
    t,
  } = useTranslation();

  const [language, setLanguage] = useState<string>(languages[0]);

  const [checked, setChecked] = useState(false);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const handleCheck = () => setChecked((current) => !current);

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
          className="border-b-navy-xl flex w-full items-center justify-between border-b-[1px] pb-4"
        >
          {/* title */}
          <div>
            <h3 className="text-slate-xl whitespace-nowrap text-xl font-medium">Settings</h3>
            <p>Personalize your experience</p>
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
        {/* content */}
        <div className="pt-7" data-testid="settings-modal-content">
          {/* theme toggle */}
          <div className="border-b-navy-xl mb-6 flex w-full items-center justify-between border-b-[1px] pb-4">
            <div className="mb-4">
              <h4 className="text-slate-xl text-lg">Mode</h4>
              <p>Toggle between dark and light mode</p>
            </div>
            <ToggleSwitch toggled={checked} onToggle={handleCheck} />
          </div>
          {/* language selection */}
          <div className="mb-4 pb-2">
            <h4 className="text-slate-xl text-lg">Language</h4>
            <p>Select your preferred language</p>
          </div>
          <div className="mx-4">
            {languages.map((l) => (
              <RadioButton
                key={l}
                name="language"
                targetValue={currentLanguage}
                label={t(`language.${l}`)}
                value={l}
                onChange={setLanguage}
              />
            ))}
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
