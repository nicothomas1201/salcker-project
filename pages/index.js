import Channels from "../components/channels"
import Layout from "../components/layout"
import Workspaces from "../components/workspaces"
import Central from "../components/central"
import { useState, useEffect } from "react"

export default function Home() {
  let [ currentChannel, setCurrentChannel ] = useState('# development')
  let [ mediaQuery, setMediaQuery] = useState(null)
  let [animateCentral, setAnimateCentral] = useState(false)

  useEffect(() => {
    console.log(window)
    if(window){
      setMediaQuery(window.matchMedia("(min-width: 595px)").matches)
    }

  }, [])

  return (
    <Layout>
      {
        mediaQuery ? <Workspaces mediaQuery={mediaQuery} /> : null
      }
      <Channels setAnimate={setAnimateCentral} mediaQuery={mediaQuery} setCurrentChannel={setCurrentChannel} />
      <Central mediaQuery={mediaQuery} animate={animateCentral} setAnimate={setAnimateCentral} currentChannel={currentChannel} />
    </Layout>
  )
}
