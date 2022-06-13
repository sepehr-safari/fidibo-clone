import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type Texts = {
  TITLE: string;
  DESCRIPTION: string;
  LOGO_ALT: string;
  PLACEHOLDER: string;
};

const TEXTS: Texts = {
  TITLE: 'خرید کتاب و دانلود کتاب الکترونیک از فیدیبو',
  DESCRIPTION:
    'هزاران کتاب الکترونیک را به صورت رایگان در فیدیبو دانلود کنید دانلود کتاب الکترونیک و مطالعه کتاب و مجله در موبایل یا تبلت خود',
  LOGO_ALT: 'دانلود کتاب رمان و مجله با اپلیکیشن کتابخوان فیدیبو',
  PLACEHOLDER: 'جستجو کتاب الکترونیکی و صوتی، پادکست، نویسنده …',
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

    <div className="max-h-32 bg-white">
      <div className="mx-auto max-w-screen-lg flex items-center">
        <div className="pt-1 pl-2">
          <Image src="https://newcdn.fidibo.com/img/nd-header-logo.svg" alt={TEXTS.LOGO_ALT} width={100} height={50} />
        </div>

        <form className="w-[80%] relative" action="/books/search" role="search">
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
      </div>
    </div>

    <nav className="bg-white pt-2"></nav>
  </>
);

export default Home;
