import { Form, Link } from "remix";

export default function Header() {
  return (
    <nav className="nav sticky flex-between-center">
      <div className="logo">REMIX.Movie</div>
      <Form
        reloadDocument
        method="get"
        className="nav_search flex-between-center"
      >
        <input
          type="text"
          name="title"
          placeholder="Type a title..."
          className="nav_search__input py-2 px-3"
        />
        <button type="submit" className="nav_search__btn py-2 px-3">
          Search
        </button>
      </Form>
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
