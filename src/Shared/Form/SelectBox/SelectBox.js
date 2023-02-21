import React from 'react';

function SelectBox(props) {
    const {
        rightIcon, rightIconStyleClass,
        styleClass, name, value, readOnly, disabled, placeholder, optionData, styleId,
        onChange, onKeyDown, onKeyUp } = props
    
    return (
        <div className='forms'>
            {rightIcon && <div className={`select-righticon ${rightIconStyleClass}`}>{rightIcon}</div>}
            <select
                className={`selects ${styleClass}`}
                id={styleId}
                name={name}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            >
                {placeholder && <option value=''> {placeholder} </option>}
                {optionData && optionData.map((elm, ind) => <option value={elm} key={ind}>{elm}</option>)}
            </select>
        </div>
    )
}

SelectBox.defaultProps = {
    disabled: false,
    readOnly: false,
}

export default SelectBox


// <SelectBox
// rightIcon={<FaChevronCircleDown/>}
// rightIconStyleClass={'p-2'}
// styleId={"selectId1"}
// styleClass={'bg-color-1-1 rounded-5 border-1 border-color-2-3 rounded-5'}
// name={"names"}
// value={values}
// placeholder={"hello"}
// optionData={["one", "Two", "Three"]}
// disabled={true}
// readOnly={true}
// onChange={(e) => onChangeHandler(e)}
// onKeyDown={(e) => onKeyDownHandler(e)}
// onKeyUp={(e) => onKeyUpHandler(e)}
// />