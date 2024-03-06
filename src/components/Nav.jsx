import { React } from "react";

function Nav() {
  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className=" px-3 py-4 rounded border-2 text-blue-400 border-blue-200 "
          href="/create"
        >
          Add new product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-xl font-semibold mb-3 w-[80%]">Categories</h1>
        <ul className="w-[80%]">
          <li className="flex items-center gap-3 mb-3">
            <span className="rounded-full block w-[17px] h-[17px] bg-blue-200"></span>{" "}
            Cat 1
          </li>
          <li className="flex items-center gap-3 mb-3">
            <span className="rounded-full block w-[17px] h-[17px] bg-red-200"></span>{" "}
            Cat 2
          </li>
          <li className="flex items-center gap-3 mb-3">
            <span className="rounded-full block w-[17px] h-[17px] bg-green-200"></span>{" "}
            Cat 3
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
