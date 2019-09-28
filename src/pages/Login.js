import React, { useContext } from "react";
import { Redirect } from "react-router";

import { DataContext } from "contexts/DataContext";
import Box from "components/Box";
import Title from "components/Title";
import Layout from "components/Layout";
import LoginForm from "components/LoginForm";

const Login = () => {
  const { isAuth } = useContext(DataContext);

  return !isAuth ? (
    <Layout>
      <Box>
        <Title>Log In</Title>

        <LoginForm />
      </Box>
    </Layout>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Login;
