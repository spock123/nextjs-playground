'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Frame } from '@/components';

const UseStateComponent = () => {
  const [image, setImage] = useState('');

  const getImage = async (): Promise<any> => {
    setImage('');
    const response = await (
      await fetch('https://dog.ceo/api/breeds/image/random')
    ).json();

    setImage(response.message);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <Frame title="useEffect">
        {image === '' && <p>Loading...</p>}

        {image !== '' && (
          <>
            <div className="w-full lg:w-1/3 block">
              <Image
                src={image}
                placeholder="empty"
                alt="this is a dog"
                width={700}
                height={475}
              />
            </div>

            <p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={getImage}
              >
                Update
              </button>
            </p>
          </>
        )}
      </Frame>
    </>
  );
};

export default UseStateComponent;
