import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const { products } = useContext(ProductContext);

  return products ? (
    <>
      <div className="h-full w-full flex gap-8">
        <Nav />
        <div className="w-[85%] h-full flex flex-wrap overflow-x-hidden overflow-y-auto gap-3">
          {products.map((p, i) => (
            <Link
              key={p.id}
              to="/details/1"
              className="mr-3 mb-3 card p-3 mt-12 border shadow rounded w-[15vw] h-[30vh] flex-col flex justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
