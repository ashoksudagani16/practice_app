import React from 'react';
import { connect } from 'redux-zero/react';
import { AppState } from '../../reduxZero/store';
import { increment, decrement } from '../../reduxZero/actions';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapToProps = ({ count }: AppState) => ({ count });

export default connect(mapToProps, { increment, decrement })(Counter);
