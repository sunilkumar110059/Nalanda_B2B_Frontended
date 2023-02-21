import React, { Fragment, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { VideoModal } from '../Shared/SharedIndex';
import ReactPlayer from 'react-player';

const videoArray = [
    { title: "Letter A", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Letter B", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Letter C", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Letter D", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Letter E", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
]

function VideoModalStyle() {
    const [videoUrl, setVideoUrl] = useState({})

    const [ShowModal, setShowModal] = useState(false);
    const modalShowHideFn = (bootype, obj) => {
        setShowModal(bootype);
        setVideoUrl(obj)
    };

    return (
        <Fragment>
            <div className='cover'>
                <div className='row'>
                    <div className='col-4'>
                        {videoArray.map((curElm, index) => (
                            <div className='d-inline-block mr-2' key={index}>
                                <div className='ovr cursor-pointer' onClick={() => modalShowHideFn(true, curElm)}>
                                    <FaPlayCircle className='font-32 text-color-3-1' />
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className='col-8'>

                        <pre>
                            {
                                `
import React, { useState } from "react";                                
import { VideoModal } from '../Shared/SharedIndex';
import ReactPlayer from 'react-player';

const [videoUrl, setVideoUrl] = useState({})
const [ShowModal, setShowModal] = useState(false);

const modalShowHideFn = (bootype, obj) => {
    setShowModal(bootype);
    setVideoUrl(obj)
};

{ShowModal &&
<VideoModal modalShowHideFn={modalShowHideFn}>
<div className='ovr bg-color-1-1 p-2'> {videoUrl.title}</div>
<ReactPlayer
url={videoUrl.url}
muted={false}
playing={true}
controls={true}
width={'100%'}
height={'100%'}
/>
</VideoModal>}

`
                            }
                        </pre>


                    </div>
                </div>
            </div>


            {ShowModal &&
                <VideoModal modalShowHideFn={modalShowHideFn}>
                    <div className='ovr bg-color-1-1 p-2'> {videoUrl.title}</div>
                    <ReactPlayer
                        url={videoUrl.url}
                        muted={false}
                        playing={true}
                        controls={true}
                        width={'100%'}
                        height={'100%'}
                    />
                </VideoModal>}
        </Fragment>
    )
}

export default VideoModalStyle