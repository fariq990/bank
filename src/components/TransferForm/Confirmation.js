import React from "react";
import { Table } from "react-bootstrap";
import NumberFormat from "react-number-format";

import { from, to } from "mocks/accounts.json";

const Confirmation = ({ values }) => {
  return (
    <Table style={{ textAlign: "left" }} bordered hover>
      <tbody>
        <tr>
          <td>From Account</td>
          <td>{from.find(f => f.value === values.from).label}</td>
        </tr>
        <tr>
          <td>Transfer To</td>
          <td>{to.find(t => t.value === values.to).label}</td>
        </tr>
        <tr>
          <td>When</td>
          <td>{values.when}</td>
        </tr>
        <tr>
          <td>Amount</td>
          <td>
            <NumberFormat
              value={values.amount}
              prefix="RM "
              decimalScale={2}
              displayType="text"
              fixedDecimalScale={true}
              thousandSeparator={true}
            />
          </td>
        </tr>
        <tr>
          <td>Recipient Reference</td>
          <td>{values.recipientref}</td>
        </tr>
        <tr>
          <td>Other Payment Detail</td>
          <td>{values.otherdetail ? values.otherdetail : "N/A"}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Confirmation;
