import React from "react";
import Link from "next/link";
import styles from "../../styles/header.module.css";
import Userlogin from "../kamscomponents/userlogin";
import SearchBar from "../../pages/SearchBar";

const NavBar = () => {
  const { user } = Userlogin();
  const { search } = SearchBar();

  return (
    <nav className="flex py-4 px-6 border-b border-gray-200">
      <SearchBar />
      <Link href="/saved">
        <a className="ml-2">Saved</a>
      </Link>
      <Link href="/selling">
        <a className="ml-2">Selling</a>
      </Link>
      <Link href="/profile">
        <a className="ml-2">Profile</a>
      </Link>
      <Link href={user ? "/signup" : "/login"}>
        <a className="ml-auto">{user ? "Logout" : "Login"}</a>
      </Link>
    </nav>
  );
};

export default NavBar;
