import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

const WorkspacesStyled = styled.div`
  .image-container{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--white);
    border-radius: .3125rem;
    padding: .25rem;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    box-sizing: border-box;
  }


  @media screen and (min-width: 595px){
    grid-area: workspaces;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    background: var(--primary);
    border-inline-end: 1px solid #FFBCDB;

    .image-container{
      border: 1px solid var(--white);
      border-radius: .625rem;
      block-size: 2.625rem;
      inline-size: 2.625rem;
      padding: .5rem;
      margin: auto;
    }


  }
`

function Workspaces({ mediaQuery }) {

  return (
    <WorkspacesStyled>
      <div className='image-container'>
        <Image src="/logo.png" alt='' width={mediaQuery ? 32 : 18} height={mediaQuery ? 32 : 18} />
      </div>
    </WorkspacesStyled>
  )
}

export default Workspaces