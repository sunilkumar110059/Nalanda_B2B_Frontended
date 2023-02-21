import React from 'react';
import { WeekCalander } from '../../Helper/HelperIndex';
import { AiOutlineRightCircle, AiOutlineLeftCircle, AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import TopicActivePending from './TopicActivePending';


function TopicIndex() {

    const showDetailsHandle = (dayStr) => {
        // console.log(dayStr)
    };

    return (
        <div className="container-fluid p-md-4">
            <div className='cover mb-5'>
                <div className='hd-1 mb-3 text-color-3-1 fw-600'>My Classes</div>
                <div className='cover bg-color-1-1 shadow-1 p-3 rounded-10'>
                    <WeekCalander
                        showDetailsHandle={showDetailsHandle}
                        IconPrev={<AiOutlineLeftCircle />}
                        IconNext={<AiOutlineRightCircle />}
                        IconPrevMonth={<AiFillLeftCircle />}
                        IconNextMonth={<AiFillRightCircle />}
                        IconCalander={<FaRegCalendarAlt />}
                        MonthSliderShow={true}
                        CurrentDateShow={true}
                        PeriodsData={"2/6"}
                    />
                </div>
            </div>
            <TopicActivePending />
        </div>
    )
}

export default TopicIndex