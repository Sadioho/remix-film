import { useCallback, useRef, useState } from 'react';
import { ActionFunction, Form, Link, LoaderFunction, redirect } from 'remix';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get('keyword');
  console.log('🚀 ~ constloader:LoaderFunction= ~ title', title);
  // return getDetailData(film);
  return null;
};

export default function Header() {
  const [keyword, setKeyWord] = useState();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (params: any) => {
    setKeyWord(params);
  };
  return (
    <nav className="nav sticky flex-between-center">
      <Link to="/" className="logo">
        REMIX.Movie
      </Link>
      <form
        method="post"
        className="nav_search flex-between-center"
        action={`/films?keyword=${keyword}`}
      >
        <input
          ref={inputRef}
          type="text"
          name="keyword"
          placeholder="Type a title..."
          className="nav_search__input py-2 px-3"
          onClick={(e) => inputRef.current?.focus()}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        <button type="submit" className="nav_search__btn py-2 px-3">
          Search
        </button>
      </form>
      <ul className="nav_menu flex-between-center">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
    </nav>
  );
}
