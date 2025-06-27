"use client";
import { useMutation } from "@tanstack/react-query";
import { login, register } from "./api";
import { useAuthStore } from "@/store/auth/auth";

export const useRegister = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};
