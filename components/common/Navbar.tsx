import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "../../styles/Navbar.module.css";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
      {/* <div className="container"> */}
        {/* <div className="row justify-content-between"> */}
          {/* Brand */}
          <div className="col">
            <Link href="/" passHref>
              <a className="navbar-brand fw-bold">Blog</a>
            </Link>
          </div>

          {/* Search */}
          <div className="col d-none d-sm-flex">
            <form className={styles.searchForm + " justify-content-center"}>
              <button type="submit">
                <AiOutlineSearch />
              </button>
              <input className="me-2" type="search" placeholder="Search..." />
            </form>
          </div>

          {/* Navigation */}
          <div className="col d-none d-md-flex justify-content-end">
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-between">
              <li className="nav-item mx-2">
                <Link href="/" passHref>
                  <a className={"nav-link " + (pathname === "/" && "active")}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/posts" passHref>
                  <a
                    className={
                      "nav-link " + (pathname === "/posts" && "active")
                    }
                  >
                    Posts
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="https://instagram.com/mcpeblocker" passHref>
                  <a className="nav-link" target="_blank">
                    <AiFillInstagram />
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="https://twitter.com/mcpeblocker" passHref>
                  <a className="nav-link" target="_blank">
                    <AiOutlineTwitter />
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="https://linked.in/mcpeblocker" passHref>
                  <a className="nav-link" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        {/* </div> */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
