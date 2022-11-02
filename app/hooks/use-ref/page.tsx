'use client';

import { useEffect, useRef, ChangeEvent } from 'react';
import { Frame } from '@/components';

const UseRefExampleComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const inputUpdated = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Frame title="useRef">
        <div className="container grid gap-y-6">
          <input
            ref={inputRef}
            type="text"
            value="Hello World"
            onChange={inputUpdated}
          />
        </div>
      </Frame>
    </>
  );
};

export default UseRefExampleComponent;
