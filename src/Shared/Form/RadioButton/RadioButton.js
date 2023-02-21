import React from 'react'

function RadioButton(props) {
    const { styleClass, radioText, textPosition, disabled, disabledColor,
        name, value, checked, trueRadioIcon, falseRadioIcon,
        onChange, onKeyDown, onKeyUp } = props

    return (
        <div className='forms'>

            <label className={`radiobox  ${styleClass}  ${disabled ? disabledColor : ''}`} >
                {radioText && textPosition === true && <div className='radiocol'> {radioText}</div>}
                {
                    checked ? <div className='radiocol'>{trueRadioIcon}</div> :
                        disabled ? <div className='radiocol'> {falseRadioIcon}</div> : <div className='radiocol'>{falseRadioIcon}</div>
                }

                {radioText && textPosition === false && <div className='radiocol'> {radioText}</div>}
                <input
                    hidden
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                />
            </label>
        </div>
    )
}


export default RadioButton

// <RadioButton
// radioText={'Female'}
// textPosition={true}
// disabled={true}
// disabledColor={'text-color-2-3'}
// name={'gender'}
// value={'female'}
// checked={IsGender === "female"}
// trueRadioIcon={<ImCheckboxChecked />}
// falseRadioIcon={<ImCheckboxUnchecked />}
// onChange={(e) => onChangeHandler(e)}
// onKeyDown={(e) => onKeyDownHandler(e)}
// onKeyUp={(e) => onKeyUpHandler(e)}
// />


