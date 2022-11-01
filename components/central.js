import styled from 'styled-components'
import InputMessage from './input-message'
import { useState, useRef, useEffect } from 'react'
import ChatMessage from './chat-message'
import RenderMessagesChannel from './render-messages-channel'

const CentralStyled = styled.div`
  grid-area: central;
  display: flex;
  flex-direction: column;

  .header{
    display: flex;
    justify-content: space-between;
    padding: .375rem 1rem;
    border-block-end: 1px solid  var(--grey);
    box-sizing: border-box;
    max-block-size: 3.5rem;

    .header-info{
      .title{
        font: var(--body1-bold);
        margin: 0;
        margin-block-end: 4px;
      }

      span{
        color: var(--grey);
        font: var(--caption-regular);
      }
    }
  }

  .chat{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex: 1;
    box-sizing: border-box;
    overflow: auto;

    .chat-messages{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      overflow: auto;


      span{
        color: var(--grey);
        font: var(--caption-regular);
      }
    }
  }
`

function Central({ currentChannel }) {
  let [messages, setMessages] = useState([])

  return (
    <CentralStyled>
      <div className='header'>
        <div className='header-info'>
          <h4 className='title'>{currentChannel}</h4>
          <span>Rutina de desarrollo diaria</span>
        </div>
        <div className='header-users'></div>
      </div>

      <div className='chat'>
        <div className='chat-messages'>
          <RenderMessagesChannel messages={messages} currentChannel={currentChannel} />
        </div>
        <InputMessage channel={currentChannel} setMessages={setMessages} messages={messages}/>
      </div>
    </CentralStyled>
    
  )
}

export default Central
