import * as React from "react";
import Image from "next/image";
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "../utils/string";
import bg from "../assets/Terra-Vault-Logo-removebg-preview.png";
require("@solana/wallet-adapter-react-ui/styles.css");

const pages = ["Home", "Features", "Testimonials", "FAQs"];

function NavAppBar({ connected, publicKey }) {
  return (
    <AppBar position="static" sx={{ background: "#2f3030", opacity: "0.9" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            wrap="true"
            component="a"
            href="/"
            sx={{
              mr: 16,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TERRA VAULT
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={{ color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
            <WalletMultiButton className="wallet-connect">
              <span>
                {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
              </span>
            </WalletMultiButton>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavAppBar;
