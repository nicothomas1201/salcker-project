import Reaction from "./reaction"
import Send from "./send"

function Index({ name, ...props }) {
  switch (name){
    case 'send': {
      return <Send {...props} />
    }

    case 'reaction': {
      return <Reaction {...props} />
    }
    default: {
      return null
    }
  }

}

export default Index
