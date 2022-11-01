import styled from 'styled-components'
import InputMessage from './input-message'
import { useState } from 'react'
import RenderMessagesChannel from './render-messages-channel'
import Icon from './icons'

const CentralStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 0;
  background: var(--black);
  transform: ${({animate}) => animate ? 'translate(0, 0)' : 'translate(100%, 0)'};
  transition: .3s transform ease-in-out;  
  
  .header{
    display: flex;
    align-items: center;
    padding: .375rem 1rem;
    border-block-end: 1px solid  var(--grey);
    box-sizing: border-box;
    max-block-size: 3.5rem;
    gap: .5rem;


    .button-icon{
      background: none;
      border: none;
      padding: 0;
      block-size: 1.5rem;
    }

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

  @media screen and (min-width: 595px){
    grid-area: central;
    position: initial;
    transform: none;

    .header{
      justify-content: space-between;
    }
  }
`

function Central({ mediaQuery, currentChannel, setAnimate, animate }) {
  let [messages, setMessages] = useState([])

  function handleTouch(){
    setAnimate(false)
  }

  return (
    <CentralStyled animate={animate}>
      <div className='header'>
        {
          !mediaQuery ?  (
            <button className='button-icon' onTouchStart={handleTouch}>
              <Icon name="left" size={24} color="var(--white)" />
            </button>
          ) : null
        }
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
