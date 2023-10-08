import React from "react";
import Button from "@mui/material/Button";


export default function PhantomBtn({ onClick, children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        marginRight: 5,
        color: "white",
        ml: 2,
        fontWeight: 700,
        background: "green",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
