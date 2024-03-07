import { React, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../utils/Context";
import Loading  from "./Loading";



function Details() {

  const detail = useContext(ProductContext);


  return detail ? (
    <>
      <div className="w-[70%] h-full m-auto p-[10%] flex gap-20">
        <img
        className="h-[80%]"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <div className="content">
          <h1 className="text-3xl mb-4">{detail.Title}</h1>
          <h3 className="text-3xl mb-4">{detail.categpry}</h3>
          <h2 className="text-xl mb-4">{detail.Price}</h2>
          <p className="mb-6">description</p>
          <Link className="mr-4 border-2 border-blue-200 px-4 py-2">Edit</Link>
          <Link className="border-2 border-red-200 px-4 py-2">Delete</Link>
        </div>
      </div>
    </>
  ):(
    <Loading />
  );
}

export default Details;
