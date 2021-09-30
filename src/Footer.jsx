import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const divcss = {
    backgroundColor: 'grey',
    width: '60%',
    float:'left'
}

const divcss2 = {
    backgroundColor: 'grey',
    width: '35%',
    float:'right'
}

const inputStyle = {
    marginLeft: '5px',
    marginRight: '5px'
}

const socialmedia = {
    marginLeft: '20px',
}
function Footer() {
    return(
        <div>
            <div style={divcss}>
                <b>NewsLetter SIGN</b>
                <input style={inputStyle} placeholder="Enter your email"></input>
                <button>Subscribe</button>
            </div>

            <div style={divcss2}>
                <b>Connect Us</b>
                <a href="https://www.youtube.com"
                   style={socialmedia}>
                <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
                <a href="https://www.facebook.com"
                    style={socialmedia}>
                <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a href="https://www.twitter.com" style={socialmedia}>
                <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a href="https://www.instagram.com/"
                style={socialmedia}>
                <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
            </div>
        </div>
    )
}

export default Footer