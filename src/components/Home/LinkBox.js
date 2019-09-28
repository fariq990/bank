import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBox = styled(Link)`
    display: block;
    width: 200px
    min-height: 100px;
    text-align: center;
    border: 1px solid #6c757d;
    border-radius: 10px;
    color: #6c757d;
    opacity:0.7;
    margin: 0 auto;
    margin-bottom: 30px;

    &:hover {
        text-decoration: none;
        border: 1px solid #6c757d;
        color: #6c757d;
        opacity:1;
    }

    svg {
        display: block;
        margin: 0 auto;
    }
`;

export default LinkBox;
