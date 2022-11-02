'use client';
import { useReducer } from 'react';
import { Frame } from '@/components';

interface IState {
  counter: number;
}

const initialValue: IState = {
  counter: 0
};

type Action =
  | { type: 'INCREMENT'; payload?: null }
  | { type: 'DECREMENT'; payload?: null };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      throw new Error('Unknown action');
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <>
      <Frame title="useReducer">
        <div className="container grid gap-y-6">
          <p className="text-2xl font-bold">Counter: {state.counter}</p>
          <p className="flex flex-row gap-x-6">
            <button
              className="btn btn-primary"
              type="button"
              onClick={increment}
            >
              Increment
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={decrement}
            >
              Decrement
            </button>
          </p>
        </div>
      </Frame>
    </>
  );
};

export default UseReducerComponent;
