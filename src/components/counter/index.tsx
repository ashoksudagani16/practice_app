import React, {useState} from 'react';
import { connect } from 'redux-zero/react';
import { AppState } from '../../reduxZero/store';
import { increment, decrement, setAmount } from '../../reduxZero/actions';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  setAmount: (v: number) => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement, setAmount }) => {
  const [userValue, setUserValue] = useState(0)
  const [text, setText] = useState("")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <input type="number" name="amount" onChange={(e) => setUserValue(Number(e.target.value))} />
      <button onClick={() => setAmount(userValue)}>Set</button>

      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => alert(text)}>Show Popup</button>
    </div>
  );
};

const mapToProps = ({ count }: AppState) => ({ count });

export default connect(mapToProps, { increment, decrement, setAmount })(Counter);
