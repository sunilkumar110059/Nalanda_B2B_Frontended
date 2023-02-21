import React from 'react';
import PropTypes from "prop-types";

function VideoModal({ children, modalShowHideFn }) {
    const closeHandler = (event) => {
        if (event.target === event.currentTarget) {
            modalShowHideFn(false);
        }
    }

    return (
        <div className='modalwrap' onClick={(event) => closeHandler(event)}>
            <div className='modalcol'>
                <div className='cover'>{children}</div>
            </div>
        </div>
    )
}

VideoModal.propTypes = {
    modalShowHideFn: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default VideoModal
