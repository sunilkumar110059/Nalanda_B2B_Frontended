import React from 'react';
import { CheckBox } from '../Shared/SharedIndex';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

function CheckBoxStyle() {
    const checkBoxHandler = (event) => {
        const { name, value, checked } = event.target
        console.log({ [name]: checked ? value : "" })
    }

    return (
        <div className='cover'>

            <div className='row'>

                <div className='col-4'>

                    <div className='ovr mb-3'>
                        <CheckBox
                            styleClass={'align-items-center'}
                            textCheckBox={'Check Box Text'}
                            textPosition={false}
                            name={'chargingpoint'}
                            value={"Charging Point"}
                            trueCheckIcon={<ImCheckboxChecked className='me-2' />}
                            falseCheckIcon={<ImCheckboxUnchecked className='me-2' />}
                            onChange={(event) => checkBoxHandler(event)}
                        />
                    </div>

                    <div className='ovr mb-3'>
                        <CheckBox
                            styleClass={'align-items-center'}
                            textCheckBox={'Check Box Text'}
                            textPosition={true}
                            name={'chargingpoint'}
                            value={"Charging Point"}
                            trueCheckIcon={<ImCheckboxChecked className='ms-2' />}
                            falseCheckIcon={<ImCheckboxUnchecked className='ms-2' />}
                            onChange={(event) => checkBoxHandler(event)}
                        />
                    </div>

                    
                    <div className='ovr mb-3'>
                        <CheckBox
                            styleClass={'align-items-center'}
                            textCheckBox={'Check Box Text'}
                            textPosition={false}
                            name={'chargingpoint'}
                            value={"Charging Point"}
                            trueCheckIcon={<ImCheckboxChecked className='me-2' />}
                            falseCheckIcon={<ImCheckboxUnchecked className='me-2' />}
                            onChange={(event) => checkBoxHandler(event)}
                            checked={true}
                        />
                    </div>

                    <div className='ovr mb-3'>
                        <CheckBox
                            styleClass={'align-items-center'}
                            name={'chargingpoint'}
                            value={"Charging Point"}
                            trueCheckIcon={<ImCheckboxChecked className='me-2' />}
                            falseCheckIcon={<ImCheckboxUnchecked className='me-2' />}
                            onChange={(event) => checkBoxHandler(event)}
                            checked={true}
                        />
                    </div>


                    <div className='ovr mb-3'>
                        <CheckBox
                            styleClass={'align-items-center'}
                            textCheckBox={'Check Box disabled'}
                            textPosition={false}
                            name={'chargingpoint'}
                            value={"Charging Point"}
                            trueCheckIcon={<ImCheckboxChecked className='me-2' />}
                            falseCheckIcon={<ImCheckboxUnchecked className='me-2' />}
                            onChange={(event) => checkBoxHandler(event)}
                            disabled={true}
                            disabledColor={'text-color-2-3'}
                        />
                    </div>

                </div>
                <div className='col-8'>
                    <pre>
                        {
                            `                         
import { CheckBox } from '../Shared/SharedIndex';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

const checkBoxHandler = (event) => {
    const { name, value, checked } = event.target
    console.log({ [name]: checked ? value : "" })
}

<CheckBox
styleClass={'align-items-center'}
textCheckBox={'Check Box Text'}
textPosition={false}
name={'name'}
value={'value'}
checked={true}
trueCheckIcon={<ImCheckboxChecked/>}
falseCheckIcon={<ImCheckboxUnchecked/>}
disabled={false}
disabledColor={'text-color-2-3'}
onChange={(event) => onChangeHandler(event)}
onKeyDown={(event) => onKeyDownHandler(event) }
onKeyUp={(event) => onKeyUpHandler(event) }
/>

`
                        }
                    </pre>

                </div>

            </div>

        </div>
    )
}

export default CheckBoxStyle