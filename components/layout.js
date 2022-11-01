import styled from 'styled-components'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 4.125rem 16.25rem auto;
  grid-template-areas: "workspaces channels central";
  grid-template-rows: 100vh;
  /* grid-auto-columns: auto; */
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
