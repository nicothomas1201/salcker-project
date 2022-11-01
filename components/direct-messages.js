import styled from 'styled-components'
import DirectItem from './direct-item'
import avatar from '../images/avatar.png'

const DirectMessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;

  .title{
    margin: 0;
    font: var(--body2-bold);
    color: var(--white);
  }

  .direct-list{
    list-style: none;
    margin: 0;
    padding: 0;
  }

`

function DirectMessages() {
  return (
    <DirectMessagesStyled>
      <h2 className='title'>Mensajes Directos</h2>
      <ul className='direct-list'>
        <DirectItem src={avatar} name="Leonidas Esteban" />
      </ul>
    </DirectMessagesStyled>
    
  )
}

export default DirectMessages
