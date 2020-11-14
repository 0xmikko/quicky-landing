import React from "react";
import ReactMarkdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";

export interface MarkdownBlockProps {
  text: string;
  href: string;
}

export function MarkdownBlockWidget({
  text,
}: MarkdownBlockProps): React.ReactElement {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
