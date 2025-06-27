import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">My Application</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/login"> Login </Link>
              <Link href="/register"> Register </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
