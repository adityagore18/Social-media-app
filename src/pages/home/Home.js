import "./home.scss"
import Story from "../../components/story/Story"
import Posts from "../../components/posts/Posts"

const home = () => {
  return (
    <div className="home">
      <Story/>
      <Posts/>
    </div>
  )
}

export default home
