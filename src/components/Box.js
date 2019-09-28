import React from "react";
import styled from "styled-components";

const BaseBox = styled.div`
  border: 1px solid #888888;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 5px 8px #888888;
  background-color: white;
  margin-top: 50px;
`;

const Box = ({ children }) => {
  return <BaseBox>{children}</BaseBox>;
};

export default Box;
