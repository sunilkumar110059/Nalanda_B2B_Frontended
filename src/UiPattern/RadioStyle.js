import React, { useState } from 'react';
import { RadioButton } from '../Shared/SharedIndex';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

const RadioStyle = () => {

    const [IsGender, setIsGender] = useState('female')
    const onChangeHandler = (e) => {
        setIsGender(e.target.value)
    }

    return (
        <div className='row'>
            <div className='col-4'>
                <div className='ovr mb-3'>
                    <RadioButton
                        radioText={'LeftSide'}
                        textPosition={false}
                        styleClass={'align-items-center'}
                        name={'gender'}
                        value={'female'}
                        checked={IsGender === "female"}
                        trueRadioIcon={<ImRadioChecked className='me-2' />}
                        falseRadioIcon={<ImRadioUnchecked className='me-2' />}
                        onChange={(e) => onChangeHandler(e)}
                    />
                </div>
                <div className='ovr mb-3'>
                    <RadioButton
                        radioText={'RightSide'}
                        textPosition={true}
                        styleClass={'align-items-center'}
                        name={'gender'}
                        value={'male'}
                        checked={IsGender === "male"}
                        trueRadioIcon={<ImRadioChecked className='ms-2' />}
                        falseRadioIcon={<ImRadioUnchecked className='ms-2' />}
                        onChange={(e) => onChangeHandler(e)}
                    />

                </div>
                <div className='ovr mb-3'>
                    <RadioButton
                        styleClass={'align-items-center'}
                        name={'gender'}
                        value={'other'}
                        checked={IsGender === "other"}
                        trueRadioIcon={<ImRadioChecked className='me-2' />}
                        falseRadioIcon={<ImRadioUnchecked className='me-2' />}
                        onChange={(e) => onChangeHandler(e)}
                    />

                </div>

                <div className='ovr mb-3'>
                    <RadioButton
                        radioText={'disabled'}
                        textPosition={false}
                        disabled={true}
                        disabledColor={'text-color-2-3'}
                        styleClass={'align-items-center'}
                        name={'gender'}
                        value={'disabled'}
                        checked={IsGender === "disabled"}
                        trueRadioIcon={<ImRadioChecked className='me-2' />}
                        falseRadioIcon={<ImRadioUnchecked className='me-2' />}
                        onChange={(e) => onChangeHandler(e)}
                    />
                </div>
            </div>
            <div className='col-8'>

                <pre>
                    {
                        `
import React, { useState } from "react";                       
import { RadioButton } from '../Shared/SharedIndex';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

const [IsGender, setIsGender] = useState('female')
const onChangeHandler = (e) => {setIsGender(e.target.value)}

<RadioButton
radioText={'Female'}
textPosition={true}
disabled={true}
disabledColor={'text-color-2-3'}
name={'gender'}
value={'female'}
checked={IsGender === "female"}
trueRadioIcon={<ImRadioChecked />}
falseRadioIcon={<ImRadioUnchecked />}
onChange={(e) => onChangeHandler(e)}
onKeyDown={(e) => onKeyDownHandler(e)}
onKeyUp={(e) => onKeyUpHandler(e)}
/>

`
                    }
                </pre>

            </div>
        </div>

    )
}

export default RadioStyle