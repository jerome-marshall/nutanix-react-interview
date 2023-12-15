import React, { useId } from "react"
import { usePosts } from "../context/PostContext"
import { USER } from "../data"

const CreatePost = () => {
  const [inputValue, setInputValue] = React.useState("")
  const id = useId()

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const { addPost } = usePosts()

  const onAddPost = () => {
    if (!inputValue) return

    addPost({
      id: id + inputValue,
      message: inputValue,
      user: USER,
      liked: false,
      time: new Date(),
      replies: [],
    })

    setInputValue("")
  }

  const onCancel = () => {
    setInputValue("")
  }

  return (
    <div className="">
      <h3>Create a new Post:</h3>
      <div className="input-wrap">
        <textarea type="text" value={inputValue} onChange={onInputChange} />
      </div>
      <div className="cta-section mt-4">
        <button onClick={onAddPost} disabled={!inputValue}>
          Post
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default CreatePost
