import styled from 'styled-components'

const CheckboxLabel = styled.label`
  position: relative;
`

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 3px;
  background-color: hsla(219, 29%, 14%, 0.1);
  transition: .2s;

  &:hover {
    background-color: hsla(235.1,68.5%,61.4%,0.25);
    transition: .2s;
  }
`

const BaseCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${CustomCheckbox} {
    background: url('/assets/desktop/icon-check.svg') no-repeat center center var(--primary-btn);
    transition: 0s;
  }
`

const Checkbox = () => (
  <CheckboxLabel>
    <BaseCheckbox type="checkbox" />
    <CustomCheckbox />
  </CheckboxLabel>
)

export default Checkbox;
