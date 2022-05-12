import React from 'react'
import { Avatar, Button} from "@material-ui/core";
import './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <from>
            <div className='tweetBox__input'>
                <Avatar src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/john-wick-rasit-hidayat.jpg"></Avatar>
                <input placeholder="What's happening?"></input>
                {/* <input placeholder='Enter image URL'></input> */}
            </div>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </from>
    </div>
  )
}

export default TweetBox