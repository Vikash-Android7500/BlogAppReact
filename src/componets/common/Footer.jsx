import React from "react";
import { useContext } from "react";
import { AppContext } from "../../service/AppContext";

const Footer = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  if (!totalPages) return null;

  return (
    <footer className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="rounded-md border-2 border-x-green-900 px-4 py-1  hover:bg-green-200 active:bg-green-500 shadow-md"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border-2  border-x-green-900 px-4 py-1 hover:bg-green-200 active:bg-green-500 shadow-md"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
