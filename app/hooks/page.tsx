import Link from 'next/link';

import { Frame } from '@components';

interface ILink {
  href: string;
  title: string;
}

const hooksLinks: ILink[] = [
  {
    href: '/hooks/use-state',
    title: 'useState'
  },
  {
    href: '/hooks/use-reducer',
    title: 'useReducer'
  },
  {
    href: '/hooks/use-effect',
    title: 'useEffect'
  },
  {
    href: '/hooks/use-context',
    title: 'useContext'
  },
  {
    href: '/hooks/use-ref',
    title: 'useRef'
  }
];

const customHooksLinks: ILink[] = [
  {
    href: '/hooks/custom-hooks/use-fetch',
    title: 'useFetch'
  },
  {
    href: '/hooks/custom-hooks/use-localstorage',
    title: 'useLocalstorage'
  }
];

const Hooks = () => {
  return (
    <>
      <Frame title="Hooks">
        <h1>Built in Hooks:</h1>
        <ul>
          {hooksLinks.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>

        <h1>Custom Hooks:</h1>
        <ul>
          {customHooksLinks.map(({ href, title }, index) => (
            <li key={index}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </Frame>
    </>
  );
};

export default Hooks;
