/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import Link from "next/link";

import { AppBarElement } from "./AppBarElement";
import { APP_ADDR } from "../../config";

export interface AppBarProps {
  backgroundColor?: string;
}

export const AppBar = ({ backgroundColor }: AppBarProps) => {
  return (
    <Navbar
      bg="light"
      expand="md"
      style={{ backgroundColor: `${backgroundColor || "EEE"}!important` }}
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <img src={"/logo.png"} alt={"Logo"} className={"navbar-image"} style={{cursor: "pointer"}}/>
          </Link>
        </Navbar.Brand>

        <Navbar style={{ justifyContent: "right" }}>
          <a
            href={APP_ADDR + "/login"}
            style={{ color: "black" }}
            className={"appbar-login"}
          >
            <Nav className="nav-item">Login</Nav>
          </a>
          <a href={APP_ADDR + "/signup"}>
            <Button
              title=""
              key="signup"
              className={"btn navbar-signup-button"}

            >
              Build now!
            </Button>
          </a>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default AppBar;
