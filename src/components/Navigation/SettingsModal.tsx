import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';
import { FC } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import Settings from './Settings';

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
  const { t } = useTranslation();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="settings modal"
    >
      <div data-testid="settings-modal" className="mt-4">
        {/* header */}
        <div
          data-testid="settings-modal-header"
          className="mb-6 flex w-full items-center justify-between border-b-[1px] border-b-navy-xl pb-4"
        >
          {/* title */}
          <div>
            <h3 className="mb-2 whitespace-nowrap text-xl font-medium text-slate-xl">
              {t('settings.title')}
            </h3>
            <p>{t('settings.titleTooltip')}</p>
          </div>
          {/* close button */}
          <MenuButton
            onClick={toggleModal}
            label="close settings"
            defaultOpen={true}
            animate={false}
          />
        </div>
        {/* settings */}
        <Settings />
      </div>
    </ReactModal>
  );
};

export default SettingsModal;
