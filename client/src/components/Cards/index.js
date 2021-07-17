import React, {useState, useEffect} from 'react';
import cardData from '../../utils/cardData';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';


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
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>
  ))}
</Row>

)};

export default Cards;