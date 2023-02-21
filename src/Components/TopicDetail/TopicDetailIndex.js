import React, { useState } from 'react';
import TopicLeftSide from './TopicLeftSide';
import TopicRightSide from './TopicRightSide';
import { FaChevronCircleDown } from 'react-icons/fa'
import { SelectBox } from '../../Shared/SharedIndex';


function TopicDetailIndex() {
    const [Subject, setSubbjectFn] = useState(
        { sub: "" }
    )
    const { sub } = Subject

    const onChangeHandler = (val) => {
        setSubbjectFn(val)
    }

    const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

    return (
        <div className='container-fluid p-md-4'>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-5'>
                    <div className='cover'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-7 py-2'><div className='hd-1 fw-600 text-color-3-1'>Topic Detail</div></div>
                            <div className='col-12 col-lg-5 py-2'>
                                <SelectBox
                                    rightIcon={<FaChevronCircleDown />}
                                    rightIconStyleClass={'px-2 py-1 text-color-1-1 font-12'}
                                    styleId={"selectId1"}
                                    styleClass={'bg-color-3-1 rounded-5 text-color-1-1 font-14'}
                                    value={sub}
                                    name={"sub"}
                                    optionData={["My English- Level 1", "My Numbers- Level 2", "My Culture- Level 2"]}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='cover py-2'>
                        <div className='row align-items-center'>
                            <div className='col'><div className='hd-3'>Month 1</div></div>
                            <div className='col-auto'>
                                <SelectBox
                                    rightIcon={<FaChevronCircleDown />}
                                    rightIconStyleClass={'px-2 py-1 text-color-3-1 font-12'}
                                    styleId={"selectId1"}
                                    styleClass={'bg-color-3-3 rounded-5 font-14'}
                                    value={sub}
                                    name={"sub"}
                                    placeholder={'Months'}
                                    optionData={months}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <TopicLeftSide />

                </div>


                <div className='col-12 col-md-8 col-lg-7'>
                    <TopicRightSide />
                </div>

            </div>
        </div>
    )
}

export default TopicDetailIndex