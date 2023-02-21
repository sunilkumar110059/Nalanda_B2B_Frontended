import React, { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { standArray } from './data';




function TopicLeftSide() {
    const [isOpen, setiSOpenFn] = useState(false)

    const standingHandler = (id) => {
        if (isOpen === id) {
            setiSOpenFn(null)
        } else {
            setiSOpenFn(id)
        }
    }

    return (
        standArray.map((curElem, index) => {
            const { standhd, lesson, standdata } = curElem

            return (
                <div className='wrapper mb-5' key={index} >
                    <div className='row align-items-center mb-2'>
                        <div className='col-auto'> <span className='hd-1 fw-500 text-color-3-4'>0{index + 1}</span></div>
                        <div className='col'><span className='hd-1 fw-500'>{standhd}</span></div>
                        <div className='col-auto'><BsCircleFill className='font-11 text-color-7-1' />  <span className='font-14'>{lesson} Lession</span> </div>
                    </div>

                    {
                        standdata.map((curElem, index) => {
                            const { id, heading, subheading, times, discription, batchid } = curElem
                            return (
                                <div className='wrapper standingwrap py-1' key={index}>
                                    <div className='row'>
                                        <div className='col-auto'>
                                            <div className={`stline ${isOpen === id ? "stlinedotted" : "stlinesolid"}`}>
                                                <div className='hd-2 fw-500 text-color-3-4 mt-2'>L0{index + 1}</div>
                                            </div>
                                        </div>

                                        <div className='col'>
                                            <div className='wrapper cursor-pointer bg-color-1-1 rounded-10 border-color-2-3 border-1 px-3 py-2'>
                                                <div className='cover' onClick={() => standingHandler(id)}>
                                                    <div className='row align-items-center'>
                                                        <div className='col'><span className='hd-2 fw-500 text-color-3-1'>{heading}</span></div>
                                                        <div className='col-auto'><span className='font-14'>{times}</span></div>
                                                    </div>
                                                </div>
                                                {isOpen === id &&
                                                    <LetterCard
                                                        subheading={subheading}
                                                        discription={discription}
                                                        batchidArray={batchid}
                                                    />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            )
        }))
}

export default TopicLeftSide

function LetterCard(props) {
    const { subheading, discription, batchidArray } = props
    return (
        <div className='cover'>
            <div className='ovr hd-5 mb-1'>{subheading}</div>
            <div className='ovr hd-6 mb-1 text-color-2-3'>{discription}</div>
            <div className='row'>
                {batchidArray.map((elm, index) => {
                    const colors = ["btn-3", "btn-6", "btn-7", "btn-8"]
                    return (
                        <div className='col-6 col-lg-3 py-1' key={index}>
                            <div className={`cursor-pointer text-center font-12 fw-600 p-1 rounded-8 btn ${colors[index]}`}>
                                {elm.batch}
                            </div>
                            <div className='font-12 text-center align-middle'>
                                <span className='d-inline-block'>{elm.views}</span>
                                <span className='d-inline-block'> <AiOutlineUser /> View</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}