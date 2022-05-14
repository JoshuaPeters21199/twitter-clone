import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
// import JohnWick from './loq7qoqbfqy51.jpg'

function Post({
    displayName,
    username,
    verified,
    text,
    image, 
    avatar,
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/john-wick-rasit-hidayat.jpg"></Avatar>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post_headerText'>
                    <h3>
                        JPeters {" "} 
                        <span className='post__headerSpecial'>
                            <VerifiedUserIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Whoever comes. Whoever it is. I'll kill them. I'll kill them all.</p>
                </div>
            </div>
            <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
            {/* <img src="https://i.redd.it/loq7qoqbfqy51.jpg" alt="" /> */}
            {/* <img src={JohnWick} alt="JohnWick" /> */}
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post