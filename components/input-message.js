import styled from 'styled-components'
import Icon from './icons/index'
import { useState } from 'react'
import avatar from '../images/avatar.png'

const InputMessageStyled = styled.form`
  display: flex;
  align-items: center;
  padding: 1rem .5rem;
  border: 1px solid var(--grey);
  border-radius: .25rem;
  gap: .5rem;
  background-color: var(--black);

  position: sticky;
  bottom: 0;
  
  input{
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--white);
  }

  .button{
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    cursor: pointer;
  }

`

function InputMessage({setMessages, messages, channel}) {
  let [active, setActive] = useState(null)
  let [textMessage, setText] = useState('')

  function handleChange(e){
    if(e.target.value === ''){
      setActive(false)
    } else{
      setActive(true)
    }

    if(textMessage.includes('http', 'https')){
      let link = textMessage
      console.log(link)
    }

    setText(e.target.value)        
  }

  function handleSubmit(e){
    let date = new Date()
    e.preventDefault()
    let messageData = {
      name: 'Leonidas Esteban',
      avatar: avatar,
      hour: date.getHours(), 
      minutes: date.getMinutes(),
      text: textMessage,
      channel,
    }

    setMessages([...messages, messageData])
    setText('')
  }
  
  return (
    <InputMessageStyled onSubmit={handleSubmit}>
      <input value={textMessage} onChange={handleChange} type="text" placeholder={`Enviar mensaje a ${channel}`} />
      <button className='button'>

        <Icon 
          name="send" 
          size={16} 
          color={active ? 'var(--blue)' : 'var(--white)'} 
          opacity={active ? 1 : 0.1}
          />
      </button>
    </InputMessageStyled>
    
  )
}

export default InputMessage
