import Image from 'next/image';

import { LOGO_ALT } from '../../config/constants/homepage';

const Logo = () => (
  <div className="pt-1 pl-2">
    <Image src="https://newcdn.fidibo.com/img/nd-header-logo.svg" alt={LOGO_ALT} width={100} height={50} />
  </div>
);
export default Logo;
