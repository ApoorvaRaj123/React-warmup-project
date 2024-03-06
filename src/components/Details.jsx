import { React } from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <div className="w-[70%] h-full bg-red-100 m-auto p-[10%]">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <div className="content">
          <h1>Title</h1>
          <h2>Price</h2>
          <p>description</p>
          <Link>Edit</Link>
          <Link>Delete</Link>
        </div>
      </div>
    </>
  );
}

export default Details;
