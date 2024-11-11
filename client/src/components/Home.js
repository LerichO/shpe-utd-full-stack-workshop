import React from 'react'
import { useState } from 'react'

import Post from './common/Post'
import Menu from './common/Menu'

const Home = () => {

    const [posts, setPosts] = useState([{
        id: 1,
        title: "Title of first card",
        description: ""
    }, {
        id: 1,
        title: "Title of first card",
        description: ""
    }, {
        id: 1,
        title: "Title of first card",
        description: ""
    }, {
        id: 1,
        title: "Title of first card",
        description: ""
    }])

  return (
    <div className="h-full w-full flex flex-row gap-8">
        <div><Menu /></div>
        <div id="content" className='p-6 w-full bg-neutral-700 rounded-xl'>
            <h1 className='text-left'><b>Home feed</b></h1>
            <p className='text-left'>See the latest and most popular posts from your fellow UTD Comets!</p>
            <div className='flex flex-wrap gap-8 w-full'>
            {posts.map((post) => (
              <Post id={post.id} title={post.title} description={post.description} likes={post.likes} comments={post.comments} />
            ))}
        </div>

        </div>
    </div>
  )
}

export default Home