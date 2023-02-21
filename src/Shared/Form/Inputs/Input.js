import React from 'react';

function Input(props) {
    const {
        styleClass, styleId,
        autoComplete, type, name, value, placeholder, readOnly, disabled, ref,
        onChange, onKeyDown, onKeyUp } = props
    return (
        <div className='forms'>
            <input
                className={`inputs ${styleClass}`}
                id={styleId}
                autoComplete={autoComplete}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                ref={ref}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            />
        </div>
    )
}


export default Input

Input.defaultProps = {
    AutoComplete: "off",
    type: "text",
    disabled: false,
    readOnly: false,
}

// <Input
// styleClass={'p-2'}
// styleId={'inputid'}
// type={'text'}
// name={'selvalue'}
// value={selvalue}
// autoComplete={'on'}
// placeholder={'placeholder'}
// readOnly={true}
// disabled={true}
// ref={'refname'}
// onChange={(e) => { onChangeHandler(e) }}
// onKeyDown={(e) => { onKeyDownHandler(e) }}
// onKeyUp={(e) => { onKeyUpHandler(e) }}
// />