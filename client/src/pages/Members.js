import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemberRow from '../components/MembersRow';
/* Shared Components and utils */
import Loader from '../components/shared/Loader';
/* Apis */
import Api from '../api';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllMembers = async () => {
    setLoading(true);
    try {
      const { users } = await Api.members.getAllMembers();
      setMembers(users);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMembers();
  }, []);

  return (
    <Container className="signup">
      {loading ? (
        <Loader />
      ) : (
        members.map((member) => {
          return (
            <MemberRow fetchAllMembers={fetchAllMembers} member={member} />
          );
        })
      )}
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
