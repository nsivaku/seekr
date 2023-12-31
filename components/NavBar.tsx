import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="./lost">Lost</Link>
              </li>
              <li>
                <Link href="./found">Found</Link>
              </li>
              <li>
                <Link href="./upload">Upload</Link>
              </li>
              <li>
                <Link href="./leaderboard">Leaderboard</Link>
              </li>
            </ul>
          </div>
          <Link href={"./"}>
            <div className="btn btn-ghost normal-case text-xl inline m-0">Seekr</div>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="./lost">Lost</Link>
            </li>
            <li>
              <Link href="./found">Found</Link>
            </li>
            <li>
              <Link href="./upload">Upload</Link>
            </li>
            <li>
              <Link href="./leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
        <Link href={"./"}>
          <img src="/compass-white.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>
    </div>
  );
}
