/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import {Button, Container,} from "react-bootstrap";
import styles from "./Register.module.css";
import {RegisterBlock} from "../../core/register";
import {APP_ADDR} from "../../config";
import {Analytics} from "rc-analytics";

interface RegisterBlockProps {
  data: RegisterBlock | undefined;
}

export function RegisterBlockWidget({ data }: RegisterBlockProps) {
  const onRegister = async () => {
    await Analytics.sendEvent("REGISTER", "REGISTER PRESSED");
    window.location.href = APP_ADDR + "/signup";
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: data?.backgroundColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container className={styles.register_background}>
        <h2 style={{ fontSize: "2.5rem", color: "white" }}>{data?.title}</h2>
        <br />
        <Button
          type={"submit"}
          className={styles.register_btn}
          style={{ marginTop: "2rem" }}
          onClick={onRegister}
        >
          Start building now!
        </Button>
        <span style={{ color: "white" }}>
          Quicky is rapid way for digital transformation. Try it now!
          <br />
        </span>
      </Container>
    </Container>
  );
}
