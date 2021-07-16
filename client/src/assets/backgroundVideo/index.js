import React from 'react'

// import classes from './backgroundVideo.module.css';

const backgroundVideo = () => {
    const videoSource = "https://www.videezy.com/fire-and-smoke/13242-hypnotic-spirals-of-white-controlled-smoke-going-up-on-darkness-in-4k"
    return (
        <div
            className={classes.Container}>
                <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.    
                </video>
                <div className={classes.Content}>
                    <div className={classes.SubContent}>
                        <h1>TABS</h1>
                </div>
            </div>
        </div>
    )
}

export default backgroundVideo