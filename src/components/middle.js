import './middle.css'
import React from 'react'
import story from '../story.json'
import post from '../post.json'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import share from '../assets/share.svg'

const Middle = () => {
    const stories = story.story;
    const posts = post.post;
  return (
    <div className="middle">
        <div className="story">
            {
                stories?.map((item,index)=>{
                    return(
                        <div className="storyParticular" key={index}>
                            <div className="storyImg">
                                <img className='statusImg' src={item.img} alt="" />
                            </div>
                            <div className="profile">
                                {item.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {/* post block ------ */}
        <div className="postSection">
            <div className="post">
                {
                    posts?.map((item,index)=>{
                        return(
                            <>
                                <div className="postInfo" key={index}>
                                    <img className='postImgInfo' src={item.img} alt="" />
                                    <div className="username">{item.name}</div>
                                    <div className="duration">{item.duration}</div>
                                </div>
                                <div className="postImg" key={index}>
                                    <img className='postImage' src={item.img} alt="" />
                                </div>
                                <div className="icons">
                                    <img className='like' src={like} alt="" />
                                    <img className='like' src={comment} alt="" />
                                    <img className='like' src={share} alt="" />
                                </div>
                                <div className="likeSection">
                                    {item.likes} Likes
                                </div>
                                <div className="description">
                                    <div className="username">{item.name}</div>
                                    <div className="postDescription">{item.desc}</div>
                                </div>
                                <div className="likeSection">
                                    Add a comment...
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Middle
