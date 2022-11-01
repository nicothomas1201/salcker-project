import styled from 'styled-components'
import Image from 'next/image'

const TabReactionStyled = styled.div`
  background: #FFFFFF0A;
  padding: .25rem .375rem;
  border-radius: 6.25rem;
  display: flex;

`

function TabReaction({src}) {
  return (
    <TabReactionStyled>
      <Image src={src} alt='' width={24} height={24}/>
    </TabReactionStyled>
    
  )
}

export default TabReaction
