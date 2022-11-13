import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';
import { StyledLink } from "./BackLink.styled";

export default function BackLink({ to, children }) {
    return (
        <StyledLink to={to}>
            <HiArrowLeft size="24" />
            {children}
        </StyledLink>
    );
};

BackLink.propTypes = {
    to: PropTypes.object.isRequired,
    children: PropTypes.node,
}
