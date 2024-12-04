import React, {useEffect, useState} from 'react'
import { Container , PostCard} from '../components'
import appwriteService from '../appwrite/config'


function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=> {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8' >
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                        //here we were not destruture it 
                        //bug fixed
                    </div>
                ))}            
            </div>
        </Container>
    </div>
  )
}

export default AllPost