import Link from 'next/link';

import { NavItemProps } from './types';

const NavItem: React.FC<NavItemProps> = ({ icon, label, href = '#', className = '' }) => (
  <Link href={href}>
    <a
      className={`flex pt-4 ml-4 items-center text-gray-500 pb-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300 ${className}`}
    >
      {icon}

      <span className="mr-2">{label}</span>
    </a>
  </Link>
);

export default NavItem;
