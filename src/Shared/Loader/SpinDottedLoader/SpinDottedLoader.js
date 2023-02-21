import React from 'react'

function SpinDottedLoader({ borderColor, loaderSize }) {

    return (

        <div className={`lds-dotted-spin ${borderColor}`} style={{ width:`${loaderSize}px`, height:`${loaderSize}px`}}>

        </div>
    )
}

export default SpinDottedLoader