import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type Texts = {
  TITLE: string;
  DESCRIPTION: string;
  LOGO_ALT: string;
  PLACEHOLDER: string;
  LOGIN_AND_SIGNUP: string;
  HOME: string;
  ELECTRONIC_AND_AUDIO_BOOK: string;
  PODCAST: string;
  MAGAZINE: string;
  DOWNLOAD_APP: string;
};

const TEXTS: Texts = {
  TITLE: 'خرید کتاب و دانلود کتاب الکترونیک از فیدیبو',
  DESCRIPTION:
    'هزاران کتاب الکترونیک را به صورت رایگان در فیدیبو دانلود کنید دانلود کتاب الکترونیک و مطالعه کتاب و مجله در موبایل یا تبلت خود',
  LOGO_ALT: 'دانلود کتاب رمان و مجله با اپلیکیشن کتابخوان فیدیبو',
  PLACEHOLDER: 'جستجو کتاب الکترونیکی و صوتی، پادکست، نویسنده …',
  LOGIN_AND_SIGNUP: 'ورود و ثبت نام',
  HOME: 'خانه',
  ELECTRONIC_AND_AUDIO_BOOK: 'کتاب الکترونیکی و صوتی',
  PODCAST: 'پادکست',
  MAGAZINE: 'مجله',
  DOWNLOAD_APP: 'دانلود اپلیکیشن',
};

const Home: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{TEXTS.TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={TEXTS.DESCRIPTION} />
      <link rel="icon" type="image/png" href="https://newcdn.fidibo.com/img/favicon.png" />
    </Head>

    <div className="max-h-32 bg-white text-sm">
      <div className="mx-auto max-w-screen-lg flex items-center">
        <div className="pt-1 pl-2">
          <Image src="https://newcdn.fidibo.com/img/nd-header-logo.svg" alt={TEXTS.LOGO_ALT} width={100} height={50} />
        </div>

        <form className="w-[60%] relative" action="/books/search" role="search">
          <input
            type="text"
            name="key"
            autoComplete="off"
            className="p-3 bg-gray-200 rounded-xl text-right w-full"
            aria-label="Search"
            placeholder={TEXTS.PLACEHOLDER}
          />

          <button type="submit" className="absolute left-0 p-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        <div className="flex text-gray-400 mr-auto">
          <Link href="/giftcard">
            <a className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </a>
          </Link>
          <Link href="/basket?simple=1">
            <a className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </a>
          </Link>
          <button onClick={() => alert('#TODO: modal will open')} className="p-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{TEXTS.LOGIN_AND_SIGNUP}</span>
          </button>
        </div>
      </div>
    </div>

    {
      // ------------------------------------------------------------------------------------------------------------------------
    }

    <nav className="bg-white pt-2 shadow-lg text-sm">
      <div className="mx-auto max-w-screen-lg flex items-center relative">
        <Link href="/">
          <a className="flex pt-4 ml-4 items-center text-gray-500 pb-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="mr-2">{TEXTS.HOME}</span>
          </a>
        </Link>

        <button className="flex pt-4 ml-4 items-center text-gray-500 pb-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>

          <span className="mr-2">{TEXTS.ELECTRONIC_AND_AUDIO_BOOK}</span>
        </button>

        <button className="flex pt-4 ml-4 items-center text-gray-500 pb-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>

          <span className="mr-2">{TEXTS.PODCAST}</span>
        </button>

        <button className="flex pt-4 ml-4 items-center text-gray-500 pb-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>

          <span className="mr-2">{TEXTS.MAGAZINE}</span>
        </button>

        <button className="mr-auto text-white px-12 py-2 bg-cyan-500 rounded-lg">{TEXTS.DOWNLOAD_APP}</button>

        <div className="w-full p-4 bg-white border border-gray-400 shadow-xl absolute top-full hidden">
          <span>item</span>
        </div>
      </div>
    </nav>
  </>
);

export default Home;
