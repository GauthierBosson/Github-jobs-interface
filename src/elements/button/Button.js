import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  ${props => props.type === "secondary"
    ? `
    background-color: var(--secondary-btn);
    color: var(--secondary-btn-text);

    &:hover {
      background-color: var(--secondary-btn-h)
    }
  `
    : props.type === "primary"
    ? `
    background-color: var(--primary-btn);
    color: var(--primary-btn-text);

    &:hover {
      background-color: var(--primary-btn-h)
    }
  `
    : `
    background-color: var(--primary-btn);
    color: var(--primary-btn-text);

    &:hover {
      background-color: var(--primary-btn-h)
    }
  `}
  cursor: pointer;
  padding: 1.3rem 3.2rem;
  border-radius: 0.5rem;
  border: none;

  transition: .5s;
`;

export default Button;
