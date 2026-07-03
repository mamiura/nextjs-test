'use client'

import { useState } from 'react'

export default function LikeButton({
  initialLikes,
  children,
  onLike,
  createdAt,
}: {
  initialLikes: number
  children?: React.ReactNode
  onLike: () => Promise<void>
  createdAt: Date
}) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)

  function handleClick() {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
    onLike()
  }

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? '♥' : '♡'} {likes}
      </button>
      <p>
        createdAt is instanceof Date: {String(createdAt instanceof Date)}
        {' | '}
        createdAt.getFullYear(): {createdAt.getFullYear()}
      </p>
      {children}
    </div>
  )
}
