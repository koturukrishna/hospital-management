import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: register, isPending: isRegister } = useMutation({
    mutationFn: async (data) => {
      try {
        const res = await axios.post(`${BASE_URL}/api/users/register`, data, {
          withCredentials: true,
        });
        console.log(res);
        toast.success("Welcome to medicare");
      } catch (error) {
        toast.error(error.response.data.message);
        throw error;
      }
    },
    onSuccess: () => {
      navigate("/login", { replace: true });
      //   toast.success("Welcome to medicare");
    },
  });

  return { register, isRegister };
}
