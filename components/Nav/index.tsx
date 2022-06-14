import { ReactNode } from 'react';

const Nav: React.FC<{ children: ReactNode }> = ({ children }) => (
  <nav className="bg-white pt-2 shadow-lg text-sm">
    <div className="mx-auto max-w-screen-lg flex items-center relative">{children}</div>
  </nav>
);

export default Nav;
