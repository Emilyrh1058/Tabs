// import React, { useState, useEffect } from "react";
import cardData from "../../utils/cardData";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import rose from '../../assets/images/rose.png'
/**
 *  create a post request to backend to get cards
 *  once data is received dinamically display cards
 *
 */

function Cards(props) {
  // write post req for cards

  console.log(cardData);
  return (
    <Row xs={1} md={3} className="g-4">
      {cardData.map((data, idx) => (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={rose}/>
            <Card.Body>
              <Card.Title>
                {data.firstName} {data.lastName}
              </Card.Title>
              <Card.Text>{data.note}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> {data.age} </ListGroupItem>
              <ListGroupItem>
                {" "}
                {data.city}, {data.state}
              </ListGroupItem>
              <ListGroupItem> {data.phoneNumber} </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Img src="https://image.flaticon.com/icons/png/512/907/907838.png" width="50" height= "50" hspace="10"></Card.Img>
              <Card.Img src="https://image.flaticon.com/icons/png/512/1160/1160990.png" width="50" height= "50" hspace="10"></Card.Img>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
