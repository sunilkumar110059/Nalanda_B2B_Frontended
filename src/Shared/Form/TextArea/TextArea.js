import React, { Fragment } from 'react';

function TextArea(props) {

    const {
        styleClass, value, name, placeholder, rows,
        autoComplete, disabled, readOnly, onChange, onKeyDown, onKeyUp
    } = props
    return (
        <Fragment>
            <div className="forms">
                <textarea
                    className={`tera ${styleClass}`}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    rows={rows}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                />
            </div>
        </Fragment>
    )
}


TextArea.defaultProps = {
    disabled: false,
    readOnly: false,
}

export default TextArea;


// <TextArea
// styleClass={'classname'}
// value={"value"}
// name={"name"}
// placeholder={'placeholder'}
// rows={5}
// autoComplete={'off'}
// disabled={true}
// readOnly={true}
// onChange={(e) => onChangeHandler(e)}
// onKeyDown={(e) => onKeyDownHandler(e)}
// onKeyUp={(e) => onKeyUpHandler(e)}
// />
