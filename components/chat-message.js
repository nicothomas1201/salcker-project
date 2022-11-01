import styled from 'styled-components'
import Image from 'next/image'
import Icon from './icons/index'
import ReactionsSelect from './reactions-select'
import TabReaction from './tab-reaction'
import { useState, useRef, useEffect } from 'react'
import linkifyHtml from "linkify-html";


const ChatMessageStyled = styled.div`
  display: flex;
  gap: 1rem;

  .avatar{
    display: flex;
  }

  .message-content{
    .name-hour{
      display: flex;
      align-items: center;
      gap: .5rem  ;
      .name{
        color: var(--white);
        font: var(--body2-bold);
        margin: 0;
      }
    }

    .message-text{
      font: var(--body2-regular);
      margin: 0;

      a{
        color: var(--blue);
      }
    }

    .reactions-container{
      padding-block-start: .5rem;
      display: flex;
      gap: .5rem;
      align-items: center;
      button{
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        inline-size: 1.125rem;
        block-size: 1.125rem;
        cursor: pointer;
      }

      .reaction-select-container{
        position: relative;
        max-inline-size: 1.125rem;
        max-block-size: 1.125rem;
      }
    }

  }

`

function ChatMessage({avatar, name, hour, minute, message}) {
  let [ show, setShow ] = useState(false)
  let [ emojiReaction, setEmoji ] = useState([])
  let ref = useRef()
  let setMessage = linkifyHtml(message)

  useEffect(() => {
    let element = ref.current

    element.scrollIntoView()
  }, []);

  function handleMouseOver(){
    setShow(true)
  }

  function handleMouseOut(){
    setShow(false)

  }


  return (
    <ChatMessageStyled ref={ref}>
      <div className='avatar'>
        <Image src={avatar} alt="" width="48" height="48" />
      </div>

      <div className='message-content'>
        <div className='name-hour'>
          <h4 className='name'>{name}</h4>
          <span>{hour}:{minute <= 9 ? `0${minute}` : minute}</span>
        </div>
        <p className='message-text' dangerouslySetInnerHTML={{__html: setMessage}}></p>
        <div className='reactions-container'>
          {
            emojiReaction.length !== 0 ? emojiReaction.map( (item, index) => <TabReaction key={index} src={item} /> ) : null
          }
          <div className='reaction-select-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ReactionsSelect emoji={emojiReaction} setEmoji={setEmoji} show={show} />
            <button>
              <Icon 
                name="reaction"
                size={18}
                color="var(--white)"
              />
            </button>
          </div>

        </div>
      </div>
    </ChatMessageStyled>
  )
}

export default ChatMessage
