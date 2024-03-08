import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading  from "./Loading";
import axios from "../utils/axios";


function Details() {

  const [detail, setDetail] = useState(null)
  const { id } = useParams();


  let getDetails = async () => {
    try {
      const {data} = await axios.get(`/products/${id}`)
      setDetail(data);
    }
    catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    getDetails();
  },[]);


  return detail ? (
    <>
      <div className="w-[70%] h-full m-auto p-[10%] flex gap-20">
        <img
        className="h-[80%] w-[60%]"
          src={`${detail.image}`}
          alt=""
        />
        <div className="content">
          <h1 className="text-3xl mb-4">{detail.title}</h1>
          <h3 className="text-xs mb-4 text-red-300 font-semibold">{detail.category}</h3>
          <h2 className="text-xl mb-4 text-red-600 font-bold">${detail.price}</h2>
          <p className="mb-6">{detail.description}</p>
          <h5 className="text-lg pb-6">Ratings: {detail.rating.rate}⭐/5</h5>
          <Link className="mr-4 border-2 border-blue-200 px-4 py-2 text-blue-400 rounded-lg">Edit</Link>
          <Link className="border-2 border-red-200 px-4 py-2 text-red-400 rounded-lg">Delete</Link>
        </div>
      </div>
    </>
  ):(
    <Loading />
  );
}

export default Details;
