import styled from "styled-components";

const CheckboxLabel = styled.label`
  position: relative;
  font-size: 1.6rem;
  padding-left: 4rem;
  font-weight: bold;
  color: var(--input-text);
`;

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left:0;
  transform: translateY(-25%);
  height: 24px;
  width: 24px;
  border-radius: 3px;
  background-color: var(--checkbox);
  transition: 0.2s;

  &:hover {
    background-color: hsla(235.1, 68.5%, 61.4%, 0.25);
    transition: 0.2s;
  }
`;

const BaseCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${CustomCheckbox} {
    background: url("/assets/desktop/icon-check.svg") no-repeat center center
      var(--primary-btn);
    transition: 0s;
  }
`;

const Checkbox = ({ name, label }) => (
  <CheckboxLabel htmlFor={name}>
    {label}
    <BaseCheckbox type="checkbox" id={name} name={name} />
    <CustomCheckbox />
  </CheckboxLabel>
);

export default Checkbox;
