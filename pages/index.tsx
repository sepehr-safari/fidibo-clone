import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import BasketIcon from '../components/Icons/BasketIcon';
import BookIcon from '../components/Icons/BookIcon';
import GiftIcon from '../components/Icons/GiftIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import MagazineIcon from '../components/Icons/MagazineIcon';
import PlusIcon from '../components/Icons/PlusIcon';
import PodcastIcon from '../components/Icons/PodcastIcon';
import UserIcon from '../components/Icons/UserIcon';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import Searchbar from '../components/Searchbar';

import {
  TITLE,
  DESCRIPTION,
  LOGIN_AND_SIGNUP,
  HOME,
  ELECTRONIC_AND_AUDIO_BOOK,
  PODCAST,
  MAGAZINE,
  DOWNLOAD_APP,
  FIDIPLUS,
} from '../config/constants/homepage';

const Home: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" type="image/png" href="https://newcdn.fidibo.com/img/favicon.png" />
    </Head>

    <Nav>
      <Logo />

      <Searchbar />

      <div className="flex items-center mr-auto">
        <Link href="/giftcard">
          <a className="p-1 text-gray-400">
            <GiftIcon />
          </a>
        </Link>
        <Link href="/basket?simple=1">
          <a className="p-1 text-gray-400">
            <BasketIcon />
          </a>
        </Link>
        <Link href="#">
          <a className="flex p-1 text-gray-400">
            <UserIcon />

            <span>{LOGIN_AND_SIGNUP}</span>
          </a>
        </Link>
      </div>
    </Nav>

    <Nav>
      <NavItem href="/" label={HOME} icon={<HomeIcon />} />
      <NavItem label={ELECTRONIC_AND_AUDIO_BOOK} icon={<BookIcon />} />
      <NavItem label={PODCAST} icon={<PodcastIcon />} />
      <NavItem label={MAGAZINE} icon={<MagazineIcon />} />
      <NavItem label={FIDIPLUS} icon={<PlusIcon />} className="text-purple-700" />

      <Button className="px-12 mr-auto">{DOWNLOAD_APP}</Button>

      <div className="w-full p-4 bg-white border border-gray-400 shadow-xl absolute top-full hidden">
        <span>item</span>
      </div>
    </Nav>
  </>
);

export default Home;
