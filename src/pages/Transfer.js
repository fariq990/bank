import React, { useState } from "react";

import Layout from "components/Layout";
import TransferForm from "components/TransferForm";
import Acknowledge from "components/TransferForm/Acknowledge";
import Box from "components/Box";
import Title from "components/Title";

const Transfer = () => {
  const [transferStatus, setTransferStatus] = useState(null);

  return (
    <Layout>
      <Box>
        <Title>Own Account Transfer</Title>

        {transferStatus ? (
          <Acknowledge transferStatus={transferStatus} />
        ) : (
          <TransferForm setTransferStatus={setTransferStatus} />
        )}
      </Box>
    </Layout>
  );
};

export default Transfer;
