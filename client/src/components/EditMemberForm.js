import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
/* Shared Components and utils */
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import { validate } from '../components/shared/helperfunctions';
/* Apis */
import Api from '../api';
/* Constants */
import { CARD_SHADOW, BP } from '../styles/constants';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const EditMemberForm = ({
  id,
  ModalClose,
  fetchAllMembers,
  initialValues = initialFormValues,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      setSubmitting(true);
      try {
        await Api.members.updateMember(id, values);
        fetchAllMembers();
      } catch (e) {
        throw new Error(e);
      } finally {
        setSubmitting(false);
        ModalClose();
      }
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Container>
      <h1>Update Member</h1>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="firstName"
          label="First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.firstName ? errors.firstName : null}
        />
        <Input
          name="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.lastName ? errors.lastName : null}
        />
        <Input
          name="email"
          label="Email"
          value={values.email}
          disabled={true}
        />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={submitting}
          disabled={!!Object.keys(errors).length}
        >
          Submit
        </SubmitButton>
      </form>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  padding: 4rem;
  box-shadow: ${CARD_SHADOW};

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }

  > form {
    margin-top: 3rem;
  }
`;
const SubmitButton = styled(Button)`
  margin: 5rem auto 0;
`;

export default EditMemberForm;
