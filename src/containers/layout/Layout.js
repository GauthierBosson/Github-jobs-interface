import styled from 'styled-components'

const LayoutElements = styled.div`
  background: url('/assets/desktop/bg-pattern-header.svg') no-repeat 20% 0 var(--bg);
  background-size: auto 14rem;
  min-height: 100vh;
  width: 100%;
`

const WidthDelimiter = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Layout = ({ children }) => (
  <LayoutElements>
    <WidthDelimiter>
      {children}
    </WidthDelimiter>
  </LayoutElements>
)

export default Layout