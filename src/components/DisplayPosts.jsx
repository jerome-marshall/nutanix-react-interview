import React, { useState } from "react"
import { usePosts } from "../context/PostContext"
import Reply from "./Reply"

const RenderPost = ({ post, depth }) => {
  const { deletePost } = usePosts()
  const [replyMode, setReplyMode] = useState(false)

  if (!post) return null

  const shortName = post.user?.name
    ?.split(" ")
    ?.map((name) => name[0])
    .join("")

  const onDeletePost = () => {
    deletePost(post.id)
  }

  return (
    <div
      className="post-wrap"
      style={{
        paddingLeft: `${24 * depth}px`,
      }}
    >
      <div className="flex gap-3 items-center">
        <div className="user-name rounded-full p-1 bg-slate-500">
          {shortName}
        </div>
        <p className="">{post.message}</p>
      </div>
      <div className="">
        <Reply post={post} replyMode={replyMode} setReplyMode={setReplyMode} />
        <button onClick={onDeletePost}>Delete</button>
      </div>
      <div className="replies-section">
        {post.replies?.map((reply) => (
          <RenderPost post={reply} depth={depth + 1} />
        ))}
      </div>
    </div>
  )
}

const DisplayPosts = () => {
  const { posts } = usePosts()

  return (
    <div className="mt-6">
      <h3 className="mb-4">Posts:</h3>
      {posts.map((post) => (
        <RenderPost post={post} key={post.id} depth={0} />
      ))}
    </div>
  )
}

export default DisplayPosts
