/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const Counter = ({ counter, setCounter }) => {
  return (
    <>
      <p className="counter">{counter}</p>
      <span onClick={() => setCounter(0)} className="refresh">
        <FontAwesomeIcon icon={faRefresh} />
      </span>
    </>
  );
};

export default Counter;
