import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Row } from 'react-bootstrap';
import Api from '../api';
// import Loader from '../shared/Loader'
import MemberRow from '../components/MembersRow';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.members.getAll().then((response) => {
      setMembers(response?.users);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="signup">
      {loading
        ? 'Loading'
        : members.map((member) => {
            return <MemberRow member={member} />;
          })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 4rem;

  /* Spinner */
  > img {
    height: 6rem;
    display: block;
    margin: 10rem auto;
  }
`;

export default Members;
