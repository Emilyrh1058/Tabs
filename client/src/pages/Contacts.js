import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import gql from "graphql-tag";
import PostCard from "../components/Cards/PostCard";
import { QUERY_POSTS } from "../utils/queries";

function Contacts() {
  const {
    loading,
    data,
  } = useQuery(QUERY_POSTS);
  console.log('data', data)
  const cardData = data?.getPosts || {};
  return (
    //Card vs Row
    <Row xs={1} md={3} className="g-4">
      {loading ? (
        <h1>Loading posts..</h1>
      ) : (
        cardData.map((post) => (
          <Col key={post.id} style={{ marginBottom: 20 }}>
            <PostCard post={post} />
          </Col>
        ))
      )}
    </Row>
  );
}

export default Contacts;
