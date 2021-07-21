// import React, { useState, useEffect } from "react";
// import cardData from "../../utils/cardData";
// import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
// import { useQuery, useMutation } from "@apollo/react-hooks";
// import { QUERY_POSTS } from "../../utils/queries";

// function Cards(props) {
//   // write function to fetch cards

//   // const {
//   //   loading,
//   //   data: { getPosts: posts },
//   // } = useQuery(QUERY_POSTS);

//   // if (data) {
//   //   console.log(data);
//   // }

//   // console.log(cardData);
//   return (
//     <Row xs={1} md={3} className="g-4">
//       {cardData.map((data, idx) => (
//         <Col>
//           <Card style={{ width: "18rem" }}>
//             <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//             <Card.Body>
//               <Card.Title>
//                 {data.firstName} {data.lastName}
//               </Card.Title>
//               <Card.Text>{data.note}</Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroupItem> {data.age} </ListGroupItem>
//               <ListGroupItem>
//                 {" "}
//                 {data.city}, {data.state}
//               </ListGroupItem>
//               <ListGroupItem> {data.phoneNumber} </ListGroupItem>
//             </ListGroup>
//             <Card.Body>
//               <Card.Link href="#">Card Link</Card.Link>
//               <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Cards;
