import styled from 'styled-components'
import Image from 'next/image'

const EmojiSelectStyled = styled.div`
  display: block;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  cursor: pointer;
`

function EmojiSelect({src, setEmoji, emoji}) {

  function handleClick(){
    setEmoji([...emoji, src])
  }


  return (
    <EmojiSelectStyled onClick={handleClick}>
      <Image src={src} alt="" width="24" height="24" />
    </EmojiSelectStyled>
    
  )
}

export default EmojiSelect
