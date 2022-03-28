import { FC } from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer: FC = () => {
  return (
    <footer className="footer mt-3">
      {/* <div className="border-top"> */}
        <div className="row border-top p-2">
          <div className="col d-flex align-items-center">
            <span className="mx-1">
              <b>Delta</b>
            </span>
            <span className="">
              2022 copyright all rights reserved
            </span>
          </div>
          <div className="col d-flex justify-content-end">
            <ul className="list-unstyled mb-1 d-flex flex-row justify-content-between">
              <li className="nav-item mx-1">
                <Link href="https://instagram.com/mcpeblocker" passHref>
                  <a className="nav-link text-dark" target="_blank">
                    <AiFillInstagram />
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link href="https://twitter.com/mcpeblocker" passHref>
                  <a className="nav-link text-dark" target="_blank">
                    <AiOutlineTwitter />
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link href="https://linked.in/mcpeblocker" passHref>
                  <a className="nav-link text-dark" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
