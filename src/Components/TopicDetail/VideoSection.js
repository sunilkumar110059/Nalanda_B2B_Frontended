import React, { Fragment, useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoModal, IMAGES } from '../../Shared/SharedIndex';
import { FaPlayCircle } from 'react-icons/fa';

const videoArray = [
    { title: "Video A", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video B", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video C", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video D", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video E", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video F", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video G", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video H", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video I", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "Video J", url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
]


function VideoSection() {
    const [videoUrl, setVideoUrl] = useState({})
    const [ShowModal, setShowModal] = useState(false);
    const modalShowHideFn = (bootype, obj) => {
        setShowModal(bootype);
        setVideoUrl(obj)
    };

    const vidtext = "Practice words loreaqn ipsum  loreaqn ipsum";
    return (
        <Fragment>
            <div className='hd-5 mb-2 text-color-3-2'>Videos</div>
            <div className='row'>
                {videoArray.map((curElm, index) => (
                    <div className='col-auto my-1' title={vidtext} key={index}>
                        <div className='videothumb rounded-5 cursor-pointer' onClick={() => modalShowHideFn(true, curElm)}>
                            <img src={IMAGES.VIDEO_BG} alt='Videos' />
                            <div className='thumicon'>
                                <FaPlayCircle className='font-30 text-color-1-1' />
                            </div>
                        </div>
                        <p className='font-12 text-truncate'> {vidtext.substring(0, 10) + '...'}</p>
                    </div>
                ))}
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

export default VideoSection