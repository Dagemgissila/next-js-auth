"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("auth/login");
  };

  if (mode == "modal") {
  }
  if (asChild) {
  }

  return <span onClick={onClick}>{children}</span>;
};
