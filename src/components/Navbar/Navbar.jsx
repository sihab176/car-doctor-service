import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlHandbag } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";

//! cardoctorsNextJs
//! hNu0ultQlDhj7lo5

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className=" text-xl flex items-center gap-2">
            <Image
              src="https://i.ibb.co/qLhDGjNC/car-removebg-preview.png"
              alt="Website Logo"
              width={70}
              height={10}
            />
            <p className="font-bold">Car Doctor</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal gap-10">{links}</ul>
        </div>
        <div className="navbar-end gap-10">
          <p>
            <SlHandbag />
          </p>
          <p>
            <FaMagnifyingGlass />
          </p>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
