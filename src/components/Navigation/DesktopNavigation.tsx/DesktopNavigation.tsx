import { useTranslation } from 'react-i18next';
import { languages, navigationLinks } from '../../../utils/common';
import NavigationItem from '../NavigationItem';
import { FaLanguage } from 'react-icons/fa6';
import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import MenuButton from '../../MenuButton.tsx/MenuButton';
import { Language } from '../../../interfaces/common';
import './styles.css';

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

const DesktopNavigation = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.body.style.overflow = 'visible';
    setIsOpen(false);
  }

  const {
    i18n: { changeLanguage, language: currentLanguage },
    t,
  } = useTranslation();

  const [language, setLanguage] = useState<Language>(languages[0]);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <div className="hidden h-[2.5rem] justify-center sm:flex">
      <ul className="flex h-full items-center gap-10 text-lg text-slate-l">
        {navigationLinks.map(({ label, to }) => (
          <NavigationItem key={label} label={t(`navigation.${label}`)} to={to} />
        ))}
      </ul>
      <button
        data-testid="language-selection-button"
        aria-label="open language selection menu"
        className="group ml-10 flex items-center justify-end"
        onClick={openModal}
      >
        <FaLanguage className="text-5xl hover:cursor-pointer hover:text-green group-focus:text-green" />
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="language selection modal"
      >
        <div data-testid="language-selection-modal">
          <div className="flex w-full justify-end">
            <MenuButton onClick={closeModal} label="close language selection" defaultOpen={true} />
          </div>
          <h3 className="text-4xl font-bold text-slate-l">Select a language</h3>
          <div>
            <label>
              <input
                type="radio"
                value="en"
                name="language"
                checked={currentLanguage === 'en'}
                onChange={(e) => setLanguage(e.target.value as Language)}
              />
              {t(`language.en`)}
            </label>
            <label>
              <input
                type="radio"
                value="fi"
                name="language"
                checked={currentLanguage === 'fi'}
                onChange={(e) => setLanguage(e.target.value as Language)}
              />
              {t(`language.fi`)}
            </label>
            <label>
              <input
                type="radio"
                value="sv"
                name="language"
                checked={currentLanguage === 'sv'}
                onChange={(e) => setLanguage(e.target.value as Language)}
              />
              {t(`language.sv`)}
            </label>
            <label className="container">
              One
              <input
                type="radio"
                checked={true}
                name="radio"
                onChange={() => console.log('testing custom radio button')}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <button onClick={closeModal}>Close modal</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default DesktopNavigation;
