import styled from 'styled-components'

const LayoutStyled = styled.div`
  position: relative;
  inset: 0;
  block-size: 100vh;
  overflow: hidden;
  

  @media screen and (min-width: 595px) {
    display: grid;
    grid-template-columns: 4.125rem 16.25rem auto;
    grid-template-areas: "workspaces channels central";
    grid-template-rows: 100vh;
       
  }
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled> 
  )
}

export default Layout
