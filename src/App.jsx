import "./App.css"
import CreatePost from "./components/CreatePost"
import DisplayPosts from "./components/DisplayPosts"
import { PostProvider } from "./context/PostContext"

function App() {
  return (
    <PostProvider>
      <CreatePost />
      <DisplayPosts />
    </PostProvider>
  )
}

export default App
