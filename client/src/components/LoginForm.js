import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { AuthContext } from '../AuthContext';
/* Auth APi */
import Api from '../api';
/* Shared Components and utils */
import Input from './shared/Input';
import Button from './shared/Button';
import SignUpLink from './shared/Header/SignUpLink';
import { validate } from './shared/helperfunctions';
/* Constants */
import { COLOR, BP } from '../styles/constants';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { setIsAuth, setCurrentUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        setLoginError(false);
        setLoading(true);
        const userData = await Api.auth.signIn(email, password);
        setIsAuth(true);
        setCurrentUser(userData);
      } catch (err) {
        setLoginError(true);
        setLoading(false);
      }
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Container>
      <h1>Sign in.</h1>

      {loginError ? (
        <h2 style={{ color: COLOR.RED }}>
          Oops! That email and password combination is not valid.
        </h2>
      ) : (
        <h2>Enter your details below.</h2>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          type="email"
          validationMessage={touched.email ? errors.email : undefined}
          submitFailed={loginError}
        />
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          type="password"
          validationMessage={touched.password ? errors.password : undefined}
          submitFailed={loginError}
        />

        <StyledSignUpLink />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={loading}
          disabled={!!Object.keys(errors).length}
        >
          SIGN IN
        </SubmitButton>
      </form>
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
const StyledSignUpLink = styled(SignUpLink)`
  display: none;

  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;

export default LoginForm;
