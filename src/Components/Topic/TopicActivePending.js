
import React, { Fragment, useState } from 'react';
import { Button } from '../../Shared/SharedIndex';
import myclassdata from '../../Data/MyClassData';
import { useEffect } from 'react';


function TopicActivePending() {
    const [isActive, setiSActive] = useState('active')
    const [lengthCount, setlengthCountFn] = useState(null)
    const [UpdateData, setUpdateDataFn] = useState(null)

    const classStatusHandler = (curElem) => {
        const updateClass = myclassdata.filter((elem) => elem.status === curElem)
        setUpdateDataFn(updateClass)
        setiSActive(curElem)
    }

    const viewLessonHandler = (id) => { console.log(id) }

    useEffect(() => {
        const getActivedata = myclassdata.filter((elm) => elm.status === "active")
        setUpdateDataFn(getActivedata)
    }, [])


    useEffect(() => {
        const obj = { active: 0, complete: 0, pending: 0, skipped: 0 }
        myclassdata.forEach((elm) => {
            // if (!obj[elm.status]) { obj[elm.status] = 0 }
            if (elm.status === "active") { obj[elm.status] += 1 }
            if (elm.status === "complete") { obj[elm.status] += 1 }
            if (elm.status === "pending") { obj[elm.status] += 1 }
            if (elm.status === "skipped") { obj[elm.status] += 1 }
        })
        setlengthCountFn(obj)
    }, [])


    return (
        <Fragment>
            <div className='cover mb-3'>
                <div className='row justify-content-between'>
                    <div className="col-auto cursor-pointer" onClick={() => classStatusHandler('active')}>
                        <div className={`hd-2 fw-600 text-btn-2 ${isActive === "active" && "active"}`}>Active({lengthCount?.active})</div>
                    </div>
                    <div className="col-auto cursor-pointer" onClick={() => classStatusHandler('complete')}>
                        <div className={`hd-2 fw-600 text-btn-2 ${isActive === "complete" && "active"}`}>Completed({lengthCount?.complete})</div>
                    </div>
                    <div className="col-auto cursor-pointer" onClick={() => classStatusHandler('pending')}>
                        <div className={`hd-2 fw-600 text-btn-2 ${isActive === "pending" && "active"}`}>Pending({lengthCount?.pending})</div>
                    </div>
                    <div className="col-auto cursor-pointer" onClick={() => classStatusHandler('skipped')}>
                        <div className={`hd-2 fw-600 text-btn-2 ${isActive === "skipped" && "active"}`}>Skipped({lengthCount?.skipped})</div>
                    </div>
                </div>
            </div>

            {UpdateData && UpdateData.map((curElem, index) => {
                const { id, shedule, periodtime, title, topic, plandate, completiondate, lesson } = curElem
                return (
                    <div className='cover mb-5' key={index}>
                        <div className='row align-items-end mb-2'>
                            <div className='col hd-4 text-color-3-2'>{shedule}</div>
                            <div className='col-auto hd-5 text-color-7-1'>Period-{periodtime}</div>
                        </div>
                        <div className='cover bg-color-1-1 shadow-1 p-3 rounded-10'>
                            <div className='row'>
                                <div className='col-12 col-md'>
                                    <div className='ovr hd-3 mb-2'>{title}</div>

                                    <div className='row'>
                                        <div className='col-12 col-md-6 my-1'>
                                            <div className='ovr text-color-2-3'>Topio Name</div>
                                            <div className='ovr hd-3'>{topic}</div>
                                        </div>

                                        <div className='col-12 col-md-6 my-1'>
                                            <div className='ovr text-color-2-3'>Lesson name</div>
                                            <div className='ovr hd-3'>{lesson}</div>
                                        </div>

                                        <div className='col-12 col-md-6 my-1'>
                                            <div className='ovr text-color-2-3'>Planned date</div>
                                            <div className='ovr hd-3'>{plandate}</div>
                                        </div>

                                        <div className='col-12 col-md-6 my-1'>
                                            <div className='ovr text-color-2-3'>Completion date</div>
                                            <div className='ovr hd-3'>{completiondate}</div>
                                        </div>

                                    </div>
                                </div>

                                <div className='col-12 col-md-auto d-flex align-items-center'>
                                    <Button styleClass={"btn-1 btn-size-3 rounded-5"} onClick={() => viewLessonHandler(id)}> View Lession
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            {UpdateData?.length < 1 &&
                <div className='cover mt-5 bg-color-1-1 shadow-1 px-3 py-5 rounded-10 font-32 text-center fw-bold'>Not Data Here</div>
            }


        </Fragment>

    )
}

export default TopicActivePending