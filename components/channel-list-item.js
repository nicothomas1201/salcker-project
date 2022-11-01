import styled from 'styled-components'
import { useState, useEffect, use } from 'react'
import classNames from 'classnames'

const ChannelListItemStyled = styled.li`
  color: var(--white);
  font: var(--body2-regular);
  padding: .5rem 1rem;
  cursor: pointer;
  background: transparent;
  
  &.active{
    background: var(--pink);
  }
`

function ChannelListItem({text, id, itemActive, setItem, handleClick, setChannel}) {
  let [active, setActive] = useState(true)

  useEffect(() => {
    
    if(itemActive === id){
      return setActive(true)
    }
    
    return setActive(false)
  }, [itemActive, id])

  let classes = classNames({
    'active': active
  }) 

  function handleClick(){
    setChannel(text)
    setItem(id)
  }

  
  


 
 

  return (
    <ChannelListItemStyled className={classes} onClick={handleClick}>
      {text}
    </ChannelListItemStyled>
    
  )
}

export default ChannelListItem
