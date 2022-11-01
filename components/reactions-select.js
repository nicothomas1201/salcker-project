import styled from 'styled-components'
import EmojiSelect from './emoji-select'
import grin from '../images/grin.png'
import contented from '../images/contented.png'
import laugh from '../images/laugh.png'
import laugther from '../images/laugther.png'
import lmao from '../images/lmao.png'
import lol from '../images/lol.png'
import reallyHappy from '../images/really-happy.png'
import rofl from '../images/rofl.png'
import smile from '../images/smile.png'

const ReactionsSelectStyled = styled.div`
  display: ${({show}) => show ? 'flex' : 'none'};
  gap: .5rem;
  background: var(--black);
  padding: .5rem;
  border-radius: .5rem;
  border: 1px solid var(--grey);
  position: absolute;
  top: 100%;
`

function ReactionsSelect({show, setEmoji, emoji}) {
  return (
    <ReactionsSelectStyled show={show}>
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={grin} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={contented} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={laugh} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={laugther} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={lmao} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={lol} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={reallyHappy} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={rofl} />
      <EmojiSelect emoji={emoji} setEmoji={setEmoji} src={smile} />
    </ReactionsSelectStyled>
    
  )
}

export default ReactionsSelect
