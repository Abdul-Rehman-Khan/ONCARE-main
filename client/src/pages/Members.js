import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import Axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Members = () => {
  const { logout } = useContext(AuthContext);
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    const getMembersData = await Axios.get('/api/users'); // TODO // shift it to api folder
    setMembers(getMembersData.data);
  };

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Members Page</h1>
          <Button
            className="m-1"
            onClick={() => {
              logout();
              setMembers([]);
            }}
          >
            Logout
          </Button>
          <Button className="m-1" onClick={getMembers}>
            Show Secret
          </Button>
        </Col>
      </Row>
      <Row>{/* loop through members, use table may be ? */}</Row>
    </Container>
  );
};

export default Members;
