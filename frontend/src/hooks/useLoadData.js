import { useEffect, useState } from "react";
import { getUserData } from "../https/index.js";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../redux/slices/userSlice.js";
import { useNavigate } from "react-router-dom";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserData();
        const { _id, name, email, role } = data.data;
        dispatch(setUser({ _id, name, email, role }));
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized error
          dispatch(removeUser());
          localStorage.removeItem("accessToken"); // Clear token
          navigate("/auth"); // Redirect to login
        } else {
          console.error("Error fetching user data:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return isLoading;
};

export default useLoadData;
