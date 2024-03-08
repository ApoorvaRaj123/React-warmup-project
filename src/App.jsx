import { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);

  return (
    <>
      <div className="h-screen w-full">
        {(pathname != "/" || search.length > 0) && (
          <Link to={"/"} className="absolute left-[17%] top-[2%] text-red-300">
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
