"use client";

import { logout } from "@/actions/logout";
import React from "react";

const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const onClick = () => {
    logout();
  };
  return <span onClick={onClick}>{children}</span>;
};

export default LogoutButton;
