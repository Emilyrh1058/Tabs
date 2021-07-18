import React, {useState, useEffect} from 'react';
import cardData from '../../utils/cardData';
import './cards.css';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import Fire from '../../assets/images/fire-heart.png';
import Ice from '../../assets/images/ice.png';

function Cards(props) {
 console.log(cardData);
    return (

<Row xs={1} md={3} className="g-4">
  {cardData.map((data, idx) => (
    <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{data.firstName} {data.lastName}</Card.Title>
    <Card.Text>{data.note}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> {data.age} </ListGroupItem>
    <ListGroupItem> {data.city}, {data.state}</ListGroupItem>
    <ListGroupItem> {data.phoneNumber} </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link className="icons" href="#"><img src={Fire} width="40" height="40" />Fire</Card.Link>
    <Card.Link className="icons" href="#"><img src={Ice} width="40" height="40"/>Ice</Card.Link>
    <Card.Link href="#">Add</Card.Link>
    <Card.Link href="#">Del</Card.Link>
  </Card.Body>
</Card>
    </Col>
  ))}
</Row>

)};

export default Cards;