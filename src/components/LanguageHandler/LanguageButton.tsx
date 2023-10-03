import { FC, SetStateAction, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../interfaces/languageInterfaces';
import './styles.css';

interface ILanguageButtonProps {
  language: Language;
  onClick: (value: SetStateAction<Language>) => void;
}

const LanguageButton: FC<ILanguageButtonProps> = ({ language, onClick }) => {
  const {
    t,
    i18n: { language: currentLanguage },
  } = useTranslation();

  const handleClick = () => onClick(language);

  const selectedClass = useMemo(
    () => (language === currentLanguage ? 'selected' : ''),
    [language, currentLanguage],
  );

  return (
    <button
      className={`language-button ${selectedClass}`}
      data-testid={`language-button-${language}`}
      onClick={handleClick}
    >
      {t(`language.${language}`)}
    </button>
  );
};

export default LanguageButton;
