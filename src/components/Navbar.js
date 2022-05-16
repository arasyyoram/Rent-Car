import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);

  return (
    <nav className="mt-6 container absolute top-0 right-1/2 z-50 translate-x-1/2 mx-auto flex justify-between flex-col sm:flex-row">
      <div className="flex justify-between">
        <div className="px-5 py-2 font-bold text-xl">Honda</div>
        <button
          className="sm:hidden px-5 py-2 font-bold"
          onClick={() => setOpen((prev) => !prev)}
        >
          (Menu)
        </button>
      </div>
      <ol
        className={`${open ? "flex" : "hidden"} flex-col sm:flex sm:flex-row`}
      >
        <li className="">
          <Link to="/" className="px-5 py-2 block">
            Home
          </Link>
        </li>
        <li className="">
          <Link to="login" className="px-5 py-2 block">
            Our Services
          </Link>
        </li>
        <li className="">
          <Link to="profile" className="px-5 py-2 block">
            Why Us
          </Link>
        </li>
        <li className="">
          <Link
            to="register"
            className="px-5 py-2 block bg-[#5CB85F] text-white rounded-sm font-bold"
          >
            Register
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
