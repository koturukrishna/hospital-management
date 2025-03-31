import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";
import { useUser } from "../context/UserContext";

export function useLogin() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogin } = useMutation({
    mutationFn: async (data) => {
      try {
        const { data: userInfo } = await axios.post(
          `${BASE_URL}/api/users/login`,
          data,
          {
            withCredentials: true,
          },
        );
        console.log(userInfo);
        setUser(userInfo);
        toast.success("Welcome to medicare");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        throw error;
      }
    },
    onSuccess: () => {
      navigate("/", { replace: true });
      //   toast.success("Welcome to medicare");
    },
  });

  return { login, isLogin };
}
