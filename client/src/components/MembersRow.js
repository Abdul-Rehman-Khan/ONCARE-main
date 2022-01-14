import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import EditMemberForm from './EditMemberForm';
/* Shared Components and utils */
import Button from './shared/Button';
import { formatDate } from './shared/helperfunctions';
/* Apis */
import Api from '../api';
/* Constants */
import { COLOR, CARD_SHADOW, BP } from '../styles/constants';

const MemberRow = ({ member, fetchAllMembers }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = async (memberId) => {
    try {
      await Api.members.deleteMember(memberId);
      fetchAllMembers();
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <>
      <Container>
        <Title>{member.id}</Title>
        <Description>{member.firstName + ' ' + member.lastName}</Description>
        <Description>{member.email}</Description>
        <CreatedAt>{formatDate(member.createdAt)}</CreatedAt>
        <Button size="small" color="grey" onClick={handleShow}>
          Edit
        </Button>
        <Button size="small" color="red" onClick={() => deleteUser(member.id)}>
          Delete
        </Button>
      </Container>
      {/* Edit Member Modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <EditMemberForm
          id={member.id}
          ModalClose={handleClose}
          fetchAllMembers={fetchAllMembers}
          initialValues={{
            firstName: member.firstName,
            lastName: member.lastName,
            email: member.email,
          }}
        />
      </Modal>
      {/* Ends */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1.5rem;
  box-shadow: ${CARD_SHADOW};
  padding: 2rem 3rem;
  border-radius: 0.2rem;

  @media (max-width: ${BP.TABLET}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    display: grid;
    grid-template-columns: 1fr 12rem;
  }

  /* Every text column */
  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 3rem;
    margin-left: auto;

    :first-child {
      margin-left: 0;
    }

    @media (max-width: ${BP.TABLET}) {
      padding-right: 1.5rem;
    }

    @media (max-width: ${BP.MOBILE}) {
      padding-right: 0;
      margin-left: 0;
    }
  }

  /* Event action button */
  > button {
    margin-left: 10px;

    @media (max-width: ${BP.MOBILE}) {
      grid-column: 2;
    }
  }
`;
const Title = styled.p`
  width: 10rem;
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${BP.TABLET}) {
    width: 16rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`;
const Description = styled.p`
  width: 30rem;
  color: ${COLOR.GREY_TEXT_LIGHT};

  @media (max-width: ${BP.TABLET}) {
    width: 12rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;?
  }
`;

const CreatedAt = styled.p`
  width: 30rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1;
    margin-top: 1.5rem;
  }
`;

export default MemberRow;
