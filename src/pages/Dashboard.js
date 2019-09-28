import React from "react";

import Layout from "components/Layout";
import Box from "components/Box";
import Home from "components/Home";
import Title from "components/Title";

const Dashboard = () => {
  return (
    <Layout>
      <Box>
        <Title>Transfer</Title>

        <Home />
      </Box>
    </Layout>
  );
};

export default Dashboard;
