import ReactModal from 'react-modal';

const oldFn = ReactModal.setAppElement;

ReactModal.setAppElement = (element) => {
  if (element === '#root') {
    return oldFn(document.createElement('div'));
  }
  oldFn(element);
};

export default ReactModal;
