import ChatMessage from "./chat-message"

function RenderMessagesChannel({messages, currentChannel}) {
  if(messages.length !== 0){
    return messages.map( (message, index) => {
      if(message.text !== '' && message.channel === currentChannel){
        return (
        <ChatMessage
          name={message.name} 
          message={message.text}
          avatar={message.avatar}
          hour={message.hour}
          minute={message.minutes}
          key={index}/>
        )
      }
    })
  } else {
    return <span>No hay mensajes</span>
  }
}

export default RenderMessagesChannel
