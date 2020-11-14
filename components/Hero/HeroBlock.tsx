/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";
import { Hero } from "../../core/hero";
import { APP_ADDR } from "../../config";
import { Analytics } from "rc-analytics";

interface HeroBlockProps {
  data: Hero | undefined;
}

export function HeroBlock({ data }: HeroBlockProps) {
  if (data === undefined) {
    return <div>NO DATA</div>;
  }

  const onRegister = async () => {
    await Analytics.sendEvent("REGISTER", "REGISTER PRESSED");
    window.location.href = APP_ADDR + "/signup";
  };

  return (
    // <Container>
    <Container fluid className={styles.hero_background}>
      <Container fluid className={styles.hero_inside}>
        <Container>
          <Row>
            <Col xs={12} sm={10} md={7} lg={6}>
              <h1 style={{ color: "white" }}>{data.title}</h1>
              <p className={"m-t-20 responsive"} style={{ color: "#DDD" }}>
                {data.subtitle}
              </p>
              <div style={{ marginTop: "15px" }}>
                <Button
                  type={"submit"}
                  className={"formButton"}
                  onClick={onRegister}
                >
                  Build your app now!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
