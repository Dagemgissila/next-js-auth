"use client";
import { logout } from "@/actions/logout";
import { auth, signOut } from "@/auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

const SeetingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white rounded-xl p-10">
      <button onClick={onClick} type="submit">
        Sign Out
      </button>
    </div>
  );
};

export default SeetingsPage;
