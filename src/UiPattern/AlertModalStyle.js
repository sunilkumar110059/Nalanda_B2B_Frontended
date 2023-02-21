import React, { Fragment, useState } from "react";
import { AlertModal } from "../Shared/SharedIndex";

function AlertModalStyle() {
    const [ShowModal, setShowModal] = useState(false);

    const modalShowHideFn = (bootype) => {
        setShowModal(bootype);
    };

    return (
        <Fragment>
            <div className='row'>

                <div className='col-4'>
                    <button onClick={() => modalShowHideFn(true)}>Open Modal</button>
                </div>
                <div className='col-8'>

                    <pre>
                        {
                            `
import React, { useState } from "react";                            
import { AlertModal } from "../Shared/SharedIndex";
const [ShowModal, setShowModal] = useState(false);

const modalShowHideFn = (bootype) => {
setShowModal(bootype);
};

{ShowModal && (
<AlertModal modalShowHideFn={modalShowHideFn}>
<div className="ovr p-4"> Hello Alert Modal</div>
</AlertModal>
)}

`
                        }
                    </pre>

                </div>
            </div>

            {ShowModal && (
                <AlertModal modalShowHideFn={modalShowHideFn}>
                    <div className="ovr p-4"> Hello Alert Modal</div>
                </AlertModal>
            )}

        </Fragment>
    );
}

export default AlertModalStyle;
