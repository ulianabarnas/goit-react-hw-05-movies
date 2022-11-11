import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(Link)`
    padding: 8px;
    color: black;
    text-decoration: none;

    &:hover,
    &:focus {
        font-weight: 700;
        color: #ff4500;
    }
`;