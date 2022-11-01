import styled from 'styled-components'
import Image from 'next/image'

const WorkspacesStyled = styled.div`
  grid-area: workspaces;
  padding-block-start: 1rem;
  padding-block-end: 1rem;
  background: var(--primary);
  border-inline-end: 1px solid #FFBCDB;

  .image-container{
    border: 1px solid var(--white);
    border-radius: .625rem;
    block-size: 2rem;
    inline-size: 2rem;
    padding: .25rem;
    margin: auto;
  }
`

function Workspaces() {
  return (
    <WorkspacesStyled>
      <div className='image-container'>
        <Image src="/logo.png" alt='' width="32" height="32" />
      </div>
    </WorkspacesStyled>
  )
}

export default Workspaces