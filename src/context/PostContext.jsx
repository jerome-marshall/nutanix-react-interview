import React, { useContext, useState } from "react"

const PostContext = React.createContext({})

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  console.log("🚀 ~ PostProvider ~ posts:", posts)

  const addPost = (post) => {
    setPosts((prev) => [...prev, post])
  }

  const deletePost = (postID) => {
    const postIndex = posts.findIndex((post) => post.id === postID)
    console.log("🚀 ~ deletePost ~ postIndex:", postIndex)

    setPosts((prev) => {
      const myPosts = prev.splice(postIndex, 1)
      console.log("🚀 ~ setPosts ~ myPosts:", myPosts)

      return myPosts
    })
  }

  const addReply = ({ postID, reply }) => {
    setPosts((prev) => {
      const myPosts = prev.map((post) => {
        if (post.id === postID) {
          return {
            ...post,
            replies: [...post.replies, reply],
          }
        } else {
          return post
        }
      })

      return myPosts
    })
  }

  const deleteReply = ({ postID, replyID }) => {
    setPosts((prev) => {
      const myPosts = prev.map((post) => {
        if (postID === post.id) {
          return {}
        }
      })
    })
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        addReply,
        deleteReply,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const usePosts = () => {
  const postContext = useContext(PostContext)
  return postContext
}
