import React, {useState, useEffect} from 'react';
import cardData from '../../utils/cardData';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { splitBsPropsAndOmit } from 'react-bootstrap/lib/utils/bootstrapUtils';


function Cards(props) {
 console.log(cardData);
    return (
<Row xs={1} md={3} className="g-4">
    <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{props.firstName} {props.lastName}</Card.Title>
    <Card.Text>{props.note}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> {props.age} </ListGroupItem>
    <ListGroupItem> {props.city}, {props.state}</ListGroupItem>
    <ListGroupItem> {props.phoneNumber} </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>
</Row>

)};

export default Cards;