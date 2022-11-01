import { useState } from 'react'
import styled from 'styled-components'
import ChannelListItem from './channel-list-item'

const ChannelListStyled = styled.div`
  
  .channel-title{
    font: var(--body2-bold);
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
  }
  
  .list{
    margin: 0;
    padding: 0;
    list-style: none;
  }

`

function ChannelList({setChannel}) {
  let [itemActive, setItem] = useState('dev')

  

  return (
    <ChannelListStyled>
      <span className='channel-title'>Canales</span>
      <ul className='list'>
        <ChannelListItem
        setChannel={setChannel}
        itemActive={itemActive}
        setItem={setItem} 
        id="dev" 
        text="# development" />
        <ChannelListItem
        setChannel={setChannel}
        itemActive={itemActive}
        setItem={setItem} 
        id="design" 
        text="# design" />
        <ChannelListItem
        setChannel={setChannel}
        itemActive={itemActive}
        setItem={setItem} 
        id="prod" 
        text="# production" />
        <ChannelListItem
        setChannel={setChannel}
        itemActive={itemActive}
        setItem={setItem} 
        id="project" 
        text="# proyectos" />
      </ul>
    </ChannelListStyled>    
  )
}

export default ChannelList
