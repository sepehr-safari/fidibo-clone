import { PLACEHOLDER } from '../../config/constants/homepage';

const Searchbar = () => (
  <form className="w-[60%] relative" action="/books/search" role="search">
    <input
      type="text"
      name="key"
      autoComplete="off"
      className="p-3 bg-gray-200 rounded-xl text-right w-full"
      aria-label="Search"
      placeholder={PLACEHOLDER}
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
);

export default Searchbar;
