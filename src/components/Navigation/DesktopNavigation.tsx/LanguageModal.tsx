import { useTranslation } from 'react-i18next';
import { languages } from '../../../utils/common';
import ReactModal from 'react-modal';
import { FC, useEffect, useState } from 'react';
import MenuButton from '../../MenuButton.tsx/MenuButton';
import RadioButton from '../../RadioButton/RadioButton';

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
    zIndex: 999,
    background: '#112240',
    border: 'none',
  },
};

interface LanguageModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const LanguageModal: FC<LanguageModalProps> = ({ isOpen, toggleModal }) => {
  const {
    i18n: { changeLanguage, language: currentLanguage },
    t,
  } = useTranslation();

  const [language, setLanguage] = useState<string>(languages[0]);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="language selection modal"
    >
      <div data-testid="language-selection-modal">
        <div className="flex w-full justify-end">
          <MenuButton onClick={toggleModal} label="close language selection" defaultOpen={true} />
        </div>
        <h3 className="text-4xl font-bold text-slate-l">Select a language</h3>
        <div>
          {languages.map((l) => (
            <RadioButton
              key={l}
              groupName="language"
              groupValue={currentLanguage}
              label={t(`language.${l}`)}
              value={l}
              onChange={setLanguage}
            />
          ))}
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </div>
    </ReactModal>
  );
};

export default LanguageModal;
