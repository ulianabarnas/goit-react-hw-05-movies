import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
    display: block;

`
export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`
export const Info = styled.div`
    margin-left: 12px;
`
export const Title = styled.h2`
    margin-bottom: 12px;
    font-size: 32px;
`
export const Paragraph = styled.p`
    margin-bottom: 12px;
`
export const Rating = styled.span`
    background-color: #ff4500;
    color: white;
    padding: 0 8px;
    border-radius: 4px;
    line-height: 12px
`