/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ type, setCounter, locked }) => {
  function handleClick() {
    setCounter((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        return prev + 1;
      }
    });
  }
  return (
    <button disabled={locked} onClick={handleClick}>
      {type === 'minus' ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
};

export default Button;
