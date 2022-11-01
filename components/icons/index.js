import Left from "./left"
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
    case 'left': {
      return <Left {...props} />
    }
    default: {
      return null
    }
  }

}

export default Index
