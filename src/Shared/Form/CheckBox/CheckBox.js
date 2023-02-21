import React, { useState } from 'react'

function CheckBox(props) {
    const { styleClass, textCheckBox, name, value, disabled, disabledColor, textPosition, onChange, onKeyDown, onKeyUp,
        falseCheckIcon, trueCheckIcon, checked,
    } = props

    const [check, setCheckedFun] = useState(checked || false)
    const checkboxHandler = (e) => {
        setCheckedFun(e.target.checked)
    }
    return (
        <div className='forms'>
            <label className={`checkbox  ${styleClass}  ${disabled && disabledColor}`} onChange={(e) => checkboxHandler(e)}>
                {textCheckBox && textPosition === true && <div className='checkcol'> {textCheckBox}</div>}
                {check ? (<div className='checkcol'>{trueCheckIcon}</div>)
                    : (<div className='checkcol'>{falseCheckIcon}</div>)}
                {textCheckBox && textPosition === false && <div className='checkcol'> {textCheckBox}</div>}
                <input
                    className='d-none'
                    name={name}
                    type='checkbox'
                    value={value}
                    checked={check}
                    disabled={disabled}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                />
            </label>
        </div>
    )
}

CheckBox.defaultProps = {
    disabled: false,
    textPosition: false
}

// <CheckBox
//styleClass={'align-items-center'}
// textCheckBox={'Check Box Text'}
// name={'name'}
// value={'value'}
// textPosition={false}
// checked={true}
// trueCheckIcon={<ImCheckboxChecked/>}
// falseCheckIcon={<ImCheckboxUnchecked/>}
// disabled={false}
// disabledColor={'text-color-2-3'}
// onChange={(event) => onChangeHandler(event)}
// onKeyDown={(event) => onKeyDownHandler(event) }
// onKeyUp={(event) => onKeyUpHandler(event) }
// />

export default CheckBox
