import React from "react";
import { Button } from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return <Button variant="outlined" onClick={() => signOut()}>Logout</Button>;
}
