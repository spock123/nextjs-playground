'use client';

import { Frame } from '@/components';
import useFetch from './useFetch';
import Image from 'next/image';

const useFetchComponent = () => {
  const [data, isPending, error] = useFetch(
    'https://dog.ceo/api/breeds/image/random'
  );
  return (
    <Frame title="useFetch">
      <>
        {isPending && <div>Loading...</div>}

        {error && (
          <div>
            <>Error: {error}</>
          </div>
        )}

        {data && (
          <Image
            src={(data as any).message}
            placeholder="empty"
            alt="this is a dog"
            width={700}
            height={475}
          />
        )}
      </>
    </Frame>
  );
};

export default useFetchComponent;
