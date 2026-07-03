'use client'

import { useState } from 'react'

export default function LikeButton({
  initialLikes,
  children,
}: {
  initialLikes: number
  children?: React.ReactNode
}) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)

  function handleClick() {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? '♥' : '♡'} {likes}
      </button>
      {children}
    </div>
  )
}
