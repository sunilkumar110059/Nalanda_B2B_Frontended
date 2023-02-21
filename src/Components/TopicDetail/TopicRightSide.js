import React, { Fragment } from 'react';
import { BsCalendar4Event } from 'react-icons/bs';
import PdfSection from './PdfSection';
import VideoSection from './VideoSection';
import GamesSection from './GamesSection';
import ActivityList from './ActivityList';


function TopicRightSide() {
    return (
        <Fragment>
            <div className='cover mt-3'>
                <div className='row'>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5 active'>B101</div></div>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5'>B102</div></div>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5'>B103</div></div>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5'>B104</div></div>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5'>B105</div></div>
                    <div className='col-auto'><div className='btn btn-2 btn-size-1 rounded-5'>B106</div></div>
                </div>
            </div>

            <div className='container-fluid  mt-4 gx-0'>
                <div className='wrapper my-3 px-3 pt-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                    <div className='hd-2 mb-2 fw-500 text-color-3-1'>Assets</div>
                    <div className='cover assetscol scrollbar'>
                        <div className='row'>
                            <div className='col-12 col-lg-8'>
                                <div className='cover mb-3'> <VideoSection /></div>
                                 <div className='cover mb-3'><GamesSection /></div> 
                            </div>
                            <div className='col-12 col-lg-4'> <PdfSection /></div>
                        </div>
                    </div>
                </div>

                <div className='cover my-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                    <div className='hd-2 mb-2 fw-500 text-color-3-1'>Pre Requisite</div>
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='hd-5 mb-1 text-color-3-2'>Teacher</div>
                            <div className='ovr font-14'>
                                <p> Identify the letter L,</p>
                                <p>Associate the letter L with images and words.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='hd-5 mb-1 text-color-3-2'>Student</div>
                            <div className='ovr font-14'>
                                <p> Identify the letter L,</p>
                                <p>Associate the letter L with images and words.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='cover my-3'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>

                            <div className='cover mb-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                                <div className='hd-2 mb-2 fw-500 text-color-3-1'>Pre Requisite</div>
                                <div className='ovr font-14'>
                                    <p>
                                        Identify the letter L, Associate the letter L with a text images and words.
                                        Associate the letter L images and words. Associate the letter L with images.
                                    </p>
                                </div>
                            </div>

                            <div className='cover mb-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                                <ActivityList />
                            </div>

                            <div className='cover mb-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                                <div className='hd-2 mb-2 fw-500 text-color-3-1'>Practice at home</div>
                                <div className='ovr font-14'>
                                    <p> Identify the letter L,</p>
                                    <p>TextBox ....</p>
                                </div>

                                <div className='cover my-2'>
                                    <div className='row'>
                                        <div className='col-auto'><BsCalendar4Event className='font-20' /></div>
                                        <div className='col-auto'>
                                            <label>
                                                <input hidden type="file" accept='.png, .jpg, .jpeg, .pdf' />
                                                <div className='btn btn-3 btn-size-1 rounded-5'>Upload</div>
                                            </label>
                                        </div>
                                        <div className='col-auto'><div className='btn btn-3 btn-size-1 rounded-5'>Assign</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6'>
                            <div className='cover mb-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='hd-2 mb-2 fw-500 text-color-3-1'>Timeline</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='btn btn-3 btn-size-1 rounded-5'>See All</div>
                                    </div>
                                </div>
                                <div className='cover timelinerow'>
                                    {[...Array(6).keys()].map((elm) => (
                                        <div className='timecol' key={elm}>
                                            <p className='font-14'>A paragraph of text with an unassigned link. Assigned homework</p>
                                            <p className='font-12 text-color-2-3'>Dec 14, 2022  9:30am  Sec A</p>
                                        </div>
                                    ))}



                                </div>
                            </div>

                            <div className='cover mb-3 px-3 py-2 bg-color-1-1 rounded-10 border-color-2-3 border-1 remarkcol'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='hd-2 mb-2 fw-500 text-color-3-1'>Remarks</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='btn btn-3 btn-size-1 rounded-5'>Edit</div>
                                    </div>
                                </div>
                                <div className='ovr font-14'> NA</div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='cover text-align-right'>
                    <div className='d-inline-block'>
                        <div className='btn btn-1 btn-size-2 rounded-5'>Submit</div></div>
                </div>
            </div>

        </Fragment>
    )
}

export default TopicRightSide