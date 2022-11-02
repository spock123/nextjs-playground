'use client';

import { useState } from 'react';
import { Frame } from '@/components';

const UseStateComponent = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => setCounter((counter) => counter + 1);
  return (
    <>
      <Frame title="useState">
        <div className="container grid gap-y-6">
          <p className="text-2xl font-bold">Counter: {counter}</p>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={updateCounter}
            >
              Update
            </button>
          </p>
        </div>
      </Frame>
    </>
  );
};

export default UseStateComponent;
