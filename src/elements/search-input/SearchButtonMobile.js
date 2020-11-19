import styled from 'styled-components'

import Button from '../button/Button'

const StyledSearchButtonMobile = styled(Button)`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  padding: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchButtonMobile = () => (
  <StyledSearchButtonMobile>
    <img src="/assets/desktop/icon-check.svg" alt="search" />
  </StyledSearchButtonMobile>
)

export default SearchButtonMobile;
