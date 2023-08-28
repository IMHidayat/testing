import { useState } from "react";
import { motion } from "framer-motion";

export const Label_swap_button = () => {
  const [test, setTest] = useState(false);

  return (
    <>
      <label className="btn btn-square swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              (e.target as HTMLInputElement).checked = !(
                e.target as HTMLInputElement
              ).checked;
              setTest(!test);
            }
          }}
        />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512">
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <motion.div
        className="absolute bg-green-500"
        initial={{ display: "none" }}
        animate={
          test
            ? { height: "auto", display: "flex" }
            : { height: 0, transitionEnd: { display: "none" } }
        }
        transition={{ duration: 0.1, ease: "easeOut" }}>
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 p-4 bg-yellow-500">
            <a href="#" className="p-4 transition duration-100 bg-red-600">
              About
            </a>
            <a href="#" className="p-4 bg-red-600">
              Contact
            </a>
            <a href="#" className="p-4 bg-red-600">
              Something
            </a>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

const index = () => {
  return <div>index</div>;
};

export default index;
