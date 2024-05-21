import { useState } from 'react';
import ButtonsContainer from './ButtonsContainer';
import Counter from './Counter';
import Title from './Title';
import Button from './Button';

const Card = () => {
  const [counter, setCounter] = useState(0);

  const locked = counter >= 5 ? true : false;

  return (
    <div className="card">
      <Title locked={locked} />
      <Counter counter={counter} setCounter={setCounter} />

      {!locked && (
        <ButtonsContainer>
          <Button type="minus" setCounter={setCounter} locked={locked} />
          <Button type="plus" setCounter={setCounter} locked={locked} />
        </ButtonsContainer>
      )}
    </div>
  );
};

export default Card;
