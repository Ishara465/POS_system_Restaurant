import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Model from "./Model";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlices";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  const increment = () => {
    if (guestCount < 10) {
      setGuestCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (guestCount > 0) setGuestCount((prev) => prev - 1);
  };

  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {
    // send the data store
    dispatch(setCustomer({ name, phone, guests: guestCount }));

    navigate("/tables");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around h-16">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className={`w-[200px] flex items-center justify-center font-bold px-4 py-2 rounded-[20px] transition-all duration-300
          ${
            isActive("/")
              ? "bg-[#f6B100] text-white"
              : "bg-[#343434] text-[#ababab]"
          }
        `}
      >
        <FaHome className="mr-2" size={30} />
        <p>Home</p>
      </button>

      {/* Orders Button */}
      <button
        onClick={() => navigate("/orders")}
        className={`w-[200px] flex items-center justify-center font-bold px-4 py-2 rounded-[20px] transition-all duration-300
          ${
            isActive("/orders")
              ? "bg-[#f6B100] text-white"
              : "bg-[#343434] text-[#ababab]"
          }
        `}
      >
        <MdOutlineReorder className="mr-2" size={30} />
        <p>Orders</p>
      </button>

      {/* Tables Button */}
      <button
        onClick={() => navigate("/tables")}
        className={`w-[200px] flex items-center justify-center font-bold px-4 py-2 rounded-[20px] transition-all duration-300
          ${
            isActive("/tables")
              ? "bg-[#f6B100] text-white"
              : "bg-[#343434] text-[#ababab]"
          }
        `}
      >
        <MdTableBar className="mr-2" size={30} />
        <p>Tables</p>
      </button>

      {/* More Button */}
      <button className="text-[#ababab] flex items-center justify-center">
        <CiCircleMore className="inline mr-2" size={30} />
        <p>More</p>
      </button>

      {/* Floating Add Order Button */}
      {!(isActive("/") || isActive("/menu") || isActive("/tables")) && (
        <button
          // disabled={isActive("/") || isActive("/menu") || isActive("/tables")}
          onClick={openModel}
          className="absolute bottom-6 bg-[#f6B100] text-[#f5f5f5] rounded-full p-3 items-center"
        >
          <BiSolidDish size={30} />
        </button>
      )}

      {/* Order Model */}
      <Model isOpen={isModelOpen} onClose={closeModel} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter customer name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium mt-2">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="+94-702937893"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Guest Count */}
        <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
          Guests
        </label>
        <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
          <button
            onClick={decrement}
            className="text-yellow-500 text-2xl hover:text-yellow-100"
          >
            &minus;
          </button>
          <span className="text-white">{guestCount} Person</span>
          <button
            onClick={increment}
            className="text-yellow-500 text-2xl hover:text-yellow-100"
          >
            &#43;
          </button>
        </div>

        {/* Create Order Button */}
        <button
          onClick={handleCreateOrder}
          className="w-full bg-[#F68100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Create Order
        </button>
      </Model>
    </div>
  );
};

export default BottomNav;
