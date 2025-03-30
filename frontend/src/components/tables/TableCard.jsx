import React from "react";
import { getAvatarName, getBgColor } from "../../utils/index.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlices.js";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ key, name, status, initial, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (status === "Booked") return;
    dispatch(updateTable({ tableNo: name }));
    navigate("/menu");
  };
  return (
    <div
      onClick={() => handleClick(name)}
      key={key}
      className="w-[250px] h-50 bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer hover:bg-[#424242]"
    >
      <di className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
          {name}
        </h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </di>

      <div className="flex items-center justify-center mt-5 mb-5">
        <h1
          className={` text-white rounded-full p-5 text-xl`}
          style={{ backgroundColor: initial ? getBgColor() : "#424242" }}
        >
          {getAvatarName(initial) || "N/A"}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5]">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
