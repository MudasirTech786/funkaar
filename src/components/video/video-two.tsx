'use client';
import React from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {

  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative ">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751026502/contact_vk4vai.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="tp-video-content text-center">
                <h2 className="tp-video-title">Let’s Create Something Extraordinary</h2>
                <p className="text-white mt-2">
                  Every great story starts with a conversation.<br />
                  <b className="text-white">Whether you are a brand looking to make an impact or a creative partner ready to collaborate, we’re all ears.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
