import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { COLOR, BP } from '../styles/constants';
import { validate } from './shared/helperfunctions';
/* Apis */
import Api from '../api';
/* Shared Components and utils */
import Input from './shared/Input';
import Button from './shared/Button';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignupForm = (props) => {
  const [signupError, setSignupError] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      try {
        setSignupError(false);
        setLoading(true);
        await Api.auth.signUp(values);
        props.history.push('/');
      } catch (err) {
        setSignupError(true);
        setLoading(false);
      }
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Container>
      <h1>Sign up.</h1>

      {signupError ? (
        <h2 style={{ color: COLOR.RED }}>Oops! Trouble Signing up !</h2>
      ) : (
        <h2>Enter your details below.</h2>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="First Name"
          type="text"
          validationMessage={touched.firstName ? errors.firstName : undefined}
          submitFailed={signupError}
        />
        <Input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="Last Name"
          type="text"
          validationMessage={touched.lastName ? errors.lastName : undefined}
          submitFailed={signupError}
        />
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="Email"
          type="email"
          validationMessage={touched.email ? errors.email : undefined}
          submitFailed={signupError}
        />
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="Password"
          type="password"
          validationMessage={touched.password ? errors.password : undefined}
          submitFailed={signupError}
        />
        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={loading}
          disabled={!!Object.keys(errors).length}
        >
          SIGN UP
        </SubmitButton>
      </form>
      <footer>
        <p>
          <Link to="/">
            <img src="/icons/arrow-left.svg" alt="Back" /> Login
          </Link>
        </p>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  width: 50rem;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }

  > form {
    margin-top: 4rem;
  }
`;
const SubmitButton = styled(Button)`
  margin: 4rem 0;

  @media (max-width: ${BP.MOBILE}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default SignupForm;
