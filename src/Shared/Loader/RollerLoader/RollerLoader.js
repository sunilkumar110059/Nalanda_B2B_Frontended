import React from 'react'

function RollerLoader({loaderColor }) {
    return (
        <div className="lds-roller" >
            <div className='lds lds-1'><span className={loaderColor}></span></div>
            <div className='lds lds-2'><span className={loaderColor}></span></div>
            <div className='lds lds-3'><span className={loaderColor}></span></div>
            <div className='lds lds-4'><span className={loaderColor}></span></div>
            <div className='lds lds-5'><span className={loaderColor}></span></div>
            <div className='lds lds-6'><span className={loaderColor}></span></div>
            <div className='lds lds-7'><span className={loaderColor}></span></div>
            <div className='lds lds-8'><span className={loaderColor}></span></div>
        </div>
    )
}
export default RollerLoader
