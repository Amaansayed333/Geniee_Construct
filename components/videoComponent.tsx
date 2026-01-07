"use client"
import React, { Component } from 'react'
import Link from 'next/link'
// import 
// import "Geniee_Construct/app/globals.css"
export class VideoComponent extends Component {
  render() {
    return (
      <div>
        {/* <button>BACK</button> */}
        <Link href="/"><button>BACK</button></Link>
        {/* <video><source src='/video.mp4' type='video/mp4' /></video> */}
        <div className="text-center my-4">This is a demo of the 3d model of the housing virtual tour</div>
        <div className='flex items-center justify-center min-h-screen'>
            <video width="90%" height="90%" controls autoPlay muted loop>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
    )
  }
}

export default VideoComponent
