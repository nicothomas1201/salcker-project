import styled from 'styled-components'
import ChannelList from './channel-list'
import DirectMessages from './direct-messages'

const ChannelsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--primary);
  border-inline-end: 1px solid #FFBCDB;


  .header{
    padding: 1rem;
    border-block-end: 1px solid #512852;
    box-sizing: border-box;
    max-block-size: 3.5rem;

    .title{
      font: var(--body1-bold);
      color: var(--white);
      margin: 0;
    }
  }


`

function Channels({setCurrentChannel}) {
  return (
    <ChannelsStyled>
      <div className='header'>
        <h1 className='title'>LeonidasEsteban</h1>
      </div>
      <ChannelList setChannel={setCurrentChannel} />
      <DirectMessages />
    </ChannelsStyled>
    
  )
}

export default Channels
