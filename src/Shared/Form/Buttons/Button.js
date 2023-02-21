import React, { Fragment } from 'react'

function Button(props) {
    const { onClick, type, styleClass, styleId, disabled, children } = props

    return (
        <Fragment>
            {
                disabled ?
                    (<button className={`btn ${styleClass}`} id={`${styleId}`} disabled={disabled} type={type} > {children} </button>)
                    :
                    (<button onClick={onClick} className={`btn ${styleClass}`} id={`${styleId}`} type={type} > {children} </button>)
            }
        </Fragment>
    )
}


Button.defaultProps = {
    disabled: false,
}




export default Button