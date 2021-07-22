import React from "react";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostCard({
  post: { firstName, lastName, note, age, city, state, phone },
}) {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
            <Card.Text>{note}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem> {age} </ListGroupItem>
            <ListGroupItem>
              {" "}
              {city}, {state}
            </ListGroupItem>
            <ListGroupItem> {phone} </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PostCard;