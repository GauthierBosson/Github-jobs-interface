import styled from 'styled-components'

const SearchInput = styled.input`
  width: 100%;
  padding: 3rem 5rem 3rem 2rem;
  color: var(--input-text);
  ::placeholder {
    color: var(--placeholder);
  }
  border: none;
  border-radius: .6rem;


  /* HIGHER BREAKPOINT */
  /* background: url('/assets/desktop/icon-search.svg') no-repeat 25px center var(--elements-bg);
  padding: 3rem 5rem 3rem 7rem; */
`

// const SearchInput = () => (
//   <SearchContainer>
//     <SearchText />
//     <FilterButton />
//   </SearchContainer>
// )

export default SearchInput;