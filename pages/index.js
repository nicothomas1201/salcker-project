import Channels from "../components/channels"
import Layout from "../components/layout"
import Workspaces from "../components/workspaces"
import Central from "../components/central"
import { useState } from "react"

export default function Home() {
  let [ currentChannel, setCurrentChannel ] = useState('# development')

  return (
    <Layout>
      <Workspaces />
      <Channels setCurrentChannel={setCurrentChannel} />
      <Central currentChannel={currentChannel} />
    </Layout>
  )
}
