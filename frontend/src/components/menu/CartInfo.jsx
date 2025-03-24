import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Import useSelector
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { removeItem } from "../../redux/slices/cartSlice";
// Adjust path based on your project structure

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart.items); // ✅ Correct way to access Redux state || adding "items"
  const scrolLRef = useRef(null);
  const dispatch = useDispatch(); // ✅ Import and use use Dispatch for dispatching actions

  useEffect(() => {
    if (scrolLRef.current) {
      scrolLRef.current.scrollTo({
        top: scrolLRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="px-5 py-2">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order details
      </h1>
      <div
        className="mt-4  overflow-y-scroll scrollbar-hide h-[380px]"
        ref={scrolLRef}
      >
        {cartData?.length === 0 ? ( // ✅ Optional chaining to prevent errors
          <p className="text-[#ababab] text-sm flex justify-center items-center h-[380px]">
            Your cart is empty. Start Adding Items!
          </p>
        ) : (
          cartData.map((item) => (
            <div
              key={item.id}
              className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                  {item.name}
                </h1>
                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <RiDeleteBin2Fill
                    onClick={() => handleRemove(item.id)}
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                  <FaNotesMedical
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">
                  Rs {item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartInfo;
