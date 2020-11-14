/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Feature } from "../../core/feature";
import { Analytics, GoogleAnalytics } from "rc-analytics";
interface FeatureProps {
  data: Feature | undefined;
}

export function FeatureBlockWidget({ data }: FeatureProps) {
  const [videoShow, setVideoShow] = useState(false);
  const [timeSeen, setTimeSeen] = useState(0);
  if (data === undefined) return <div>No data</div>;

  const onVideoFinished = (data: any) => {
    setTimeSeen(data.target.currentTime);
  };

  const onPlayerClosed = async () => {
    setVideoShow(false);
    await Analytics.sendEvent("VIDEO_SEEN", timeSeen.toFixed(0));
    if (timeSeen > 10) {
      GoogleAnalytics.event({
        action: "Video10sec",
        category: "",
        label: "",
        value: 0,
      });
    }
    console.log("Close!");
  };

  const videoBlock = data.youtubeLink ? (
    <>
      <Modal
        show={videoShow}
        onHide={onPlayerClosed}
        centered
        className={"video_modal"}
      >
        <div
          style={{
            textAlign: "right",
            marginRight: "30px",
          }}
        >
          <a onClick={onPlayerClosed} style={{ cursor: "pointer" }}>
            Close x
          </a>
        </div>
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{ height: "99%" }}
        >
          <video
            src={"/quicky.m4v"}
            autoPlay={true}
            controls={true}
            onTimeUpdate={onVideoFinished}
          />
        </div>
      </Modal>
      <a onClick={() => setVideoShow(true)}>
        <img
          src={data.imageUrl}
          style={{ margin: "auto", borderRadius: "15px", cursor: "pointer" }}
          alt={data.title}
        />
      </a>
    </>
  ) : (
    <img
      src={data.imageUrl}
      style={{ margin: "auto", borderRadius: "15px" }}
      alt={data.title}
    />
  );

  return (
    <Container
      fluid
      style={{ backgroundColor: data.backgroundColor || "#EEE" }}
    >
      <Container className={"container_block"}>
        <Row>
          <Col
            xs={{ span: 12, order: "last" }}
            sm={{ span: 12, order: "last" }}
            md={{ span: 4, order: data.position === "Left" ? "first" : "last" }}
            lg={{ span: 4, order: data.position === "Left" ? "first" : "last" }}
          >
            <div className={"feature-description"}>
              <h3 className={"responsive"}>{data.title}</h3>
              <p style={{ marginTop: "10px" }}> {data.description}</p>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            sm={{ span: 12, order: "first" }}
            md={{ span: 8, order: data.position === "Left" ? "last" : "first" }}
            lg={{ span: 8, order: data.position === "Left" ? "last" : "first" }}
            className={"feature-block"}
          >
            {videoBlock}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
