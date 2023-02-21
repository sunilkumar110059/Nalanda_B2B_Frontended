import React from 'react'

function EllipsisLoader({ loaderColor }) {
    return (
        <div className="lds-ellipsis">
            <div className={`lds lds-1 ${loaderColor}`}></div>
            <div className={`lds lds-2 ${loaderColor}`}></div>
            <div className={`lds lds-3 ${loaderColor}`}></div>
            <div className={`lds lds-4 ${loaderColor}`}></div>
        </div>
    )
}

export default EllipsisLoader