import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Index() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", () => {});
  }, [test]);

  return (
    <>
      <main className="flex items-start justify-center h-screen">
        <div className="w-full px-8 mt-10">
          <button
            type="button"
            className={`btn w-full max-w-xl text-white p-4 mr-2 font-bold rounded-lg text-sm transition bg-c3 hover:bg-c4 hover:text-c1 `}>
            SUBSCRIBE
          </button>
        </div>
      </main>
    </>
  );
}
