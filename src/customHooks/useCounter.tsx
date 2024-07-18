import {useState} from "react";

interface UseCounterProps {
    initialValue?: number;
  }

export const useCounter = ({initialValue = 0}:UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count +1);
  const decrement = () => setCount(count -1);
  return {count, increment, decrement};
}