import styled from 'styled-components'
import Image from 'next/image'

const DirectItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;

  .image-container{
    display: flex;
    position: relative;
  }

  .image-container::after{
    content: '';
    position: absolute;
    block-size: .5rem;
    inline-size: .5rem;
    background-color: var(--green);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transform: translate(30%, 20%);
  }

  .direct-name{
    margin: 0;
    font: var(--body1-regular);
    color: var(--white);
  }
`

function DirectItem({src, name}) {
  return (
    <DirectItemStyled>
      <div className='image-container'>
        <Image src={src} alt='' width={20} height={20} />
      </div>
      <h4 className='direct-name'>{name}</h4>
    </DirectItemStyled>
    
  )
}

export default DirectItem
