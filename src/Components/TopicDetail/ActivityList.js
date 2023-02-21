import React from 'react';
import { Fragment } from 'react';
import { CheckBox } from '../../Shared/SharedIndex';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

function ActivityList() {

    const checkBoxHandler = (event) => {
        const { name, value, checked } = event.target
        console.log({ [name]: checked ? value : "" })
    }
    return (
        <Fragment>
            <div className='row align-items-center'>
                <div className='col'>
                    <div className='hd-2 mb-2 fw-500 text-color-3-1'>Activity list</div>
                </div>
                <div className='col-auto'>
                    <div className='hd-5 text-color-3-2'>Student</div>
                </div>
            </div>
            <table className='d-table-collapse font-14 w-100'>
                <tbody>
                    {[...Array(4).keys()].map((val) => (
                        <tr key={val}>
                            <td className='py-2 pe-2 align-middle'>
                                <p> Identify the letter L,</p>
                                <p>Associate the letter L with images and words.</p>
                            </td>
                            <td className='py-2 w-auto'>
                                <CheckBox
                                    styleClass={'align-items-center justify-content-end'}
                                    name={'checkboxname'}
                                    value={'checkboxvalue'}
                                    trueCheckIcon={<MdCheckBox className='font-32 text-color-3-1' />}
                                    falseCheckIcon={<MdCheckBoxOutlineBlank className='font-32 text-color-3-4' />}
                                    onChange={(event) => checkBoxHandler(event)}
                                />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ActivityList