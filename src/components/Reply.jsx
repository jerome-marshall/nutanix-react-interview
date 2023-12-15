import React, { useId, useState } from "react"
import { usePosts } from "../context/PostContext"
import { USER } from "../data"

const Reply = ({ post, replyMode, setReplyMode }) => {
  const [inputValue, setInputValue] = useState("")
  const id = useId()

  const { addReply } = usePosts()

  const onAddReply = () => {
    if (!inputValue) return

    addReply({
      postID: post.id,
      reply: {
        id: id + inputValue,
        message: inputValue,
        user: USER,
        liked: false,
        time: new Date(),
        //   replies: [],
      },
    })

    setInputValue("")
    setReplyMode(false)
  }

  return replyMode ? (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddReply}>Reply</button>
      <button
        onClick={() => {
          setReplyMode(false)
          setInputValue("")
        }}
      >
        Cancel
      </button>
    </div>
  ) : (
    <button onClick={() => setReplyMode(true)}>Reply</button>
  )
}

export default Reply
