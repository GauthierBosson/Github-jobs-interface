import styled from 'styled-components'

const SearchText = styled.input`
  width: 100%;
  padding: 3rem 5rem 3rem 2rem;
  color: var(--input-text);
  ::placeholder {
    color: var(--placeholder);
  }
  border: none;
  border-radius: .6rem;
  transform: translateY(-1.8rem);


  /* HIGHER BREAKPOINT */
  /* background: url('/assets/desktop/icon-search.svg') no-repeat 25px center var(--elements-bg);
  padding: 3rem 5rem 3rem 7rem; */
`

const FilterButton = styled.button`
  border: none;
  background-color: transparent;
  background: url('/assets/mobile/icon-filter.svg') no-repeat center center;
  width: 50px;
  height: 50px;
`

const SearchInput = () => (
  <>
    <SearchText />
    <FilterButton />
  </>
)

export default SearchInput;