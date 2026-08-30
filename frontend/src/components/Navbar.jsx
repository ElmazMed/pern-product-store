import { Palette, ShoppingBag } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";
import ThemSelector from "./ThemSelector";

function Navbar() {
  const { pathName } = useResolvedPath();
  const isHomePage = pathName === "/";
  return (
    <>
      <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50 flex justify-between items-center w-full h-16 p-8">
        <div className="logo">
          <Link
            to={"/"}
            className="hover:opacity-80 transition-opacity ease-in-out"
          >
            <h1 className="text-green-500 font-bold">FULL STACK STORE</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <ThemSelector />

          <button className="btn btn-ghost btn-circle relative">
            <div className="bg-green-700 h-4 w-6 rounded-full absolute left-4 bottom-6 hidden">
              <p className="text-[.7rem]">+99</p>
            </div>
            <ShoppingBag />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
