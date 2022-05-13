import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"

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
                        JPeters {" "} <span>
                            <VerifiedUserIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Whoever comes. Whoever it is. I'll kill them. I'll kill them all.</p>
                </div>
            </div>
            <img src="https://www.slashfilm.com/wp/wp-content/images/john_wick_chapter_three_ver20_xlg.jpg" alt="" />
        </div>
    </div>
  )
}

export default Post