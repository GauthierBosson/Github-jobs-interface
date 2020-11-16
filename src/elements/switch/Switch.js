import styled from 'styled-components'

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 50px;
  width: 100px;
  background: url('/assets/desktop/icon-sun.svg') no-repeat left center, url('assets/desktop/icon-moon.svg') no-repeat right center;
`

const SwitchBody = styled.label`
  background-color: white;
  height: 20px;
  width: 45px;
  border-radius: 10px;
  position: relative;
  margin-left: 5px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--primary-btn);
    margin: 2px 4px 2px 4px;
    transition: .2s;
  }

  &:hover::after {
    background-color: var(--primary-btn-h);
  }
`

const SwitchInput = styled.input`
  position: absolute;
  right: 9999px;
  
  &:checked + ${SwitchBody}:after {
    margin-left: 25px;
    transition: .2s;
  }
`

const Switch = () => (
  <SwitchContainer>
    <SwitchInput type="checkbox" id="theme" />
    <SwitchBody htmlFor="theme" />
  </SwitchContainer>
)

export default Switch