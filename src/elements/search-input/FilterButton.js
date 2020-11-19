import styled from 'styled-components'

const FilterButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  background: url('/assets/mobile/icon-filter.svg') no-repeat center center;
  width: 50px;
  height: 50px;
`

export default FilterButton;