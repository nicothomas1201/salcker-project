import styled from 'styled-components'
import ChannelList from './channel-list'
import DirectMessages from './direct-messages'
import Workspaces from './workspaces'

const ChannelsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--primary);
  block-size: 100vh;


  .header{
    display: flex;
    align-items: center;
    gap: .5rem;
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

  @media screen and (min-width: 595px){
    border-inline-end: 1px solid #FFBCDB;


    .header{
      display: block;
    }

  }


`

function Channels({ setCurrentChannel, mediaQuery, setAnimate }) {
  return (
    <ChannelsStyled>
      <div className='header'>
        {
          !mediaQuery ? <Workspaces mediaQuery={mediaQuery} /> : null
        }
        <h1 className='title'>LeonidasEsteban</h1>
      </div>
      <ChannelList setAnimate={setAnimate} setChannel={setCurrentChannel} />
      <DirectMessages />
    </ChannelsStyled>
    
  )
}

export default Channels
