import React, { useState } from 'react';
import { TextArea } from '../Shared/SharedIndex';


function TextAreaStyle() {

    const [user, setUser] = useState({
        selvalue: ""
    })
    const { selvalue } = user

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className='row'>
            <div className='col-4'>
                <TextArea
                    styleClass={'bg-color-1-1 rounded-5 border-1 border-color-2-3 rounded-5 p-2'}
                    value={selvalue}
                    name={"selvalue"}
                    placeholder={'placeholder'}
                    rows={5}
                    autoComplete={'off'}
                    onChange={(e) => onChangeHandler(e)}
                />
            </div>
            <div className='col-8'>
                <pre>
                    {
                        `
import React, { useState } from "react";                        
import { TextArea } from '../Shared/SharedIndex';

const [user, setUser] = useState({selvalue: ""})
const { selvalue } = user

const onChangeHandler = (event) => {
    const { name, value } = event.target
    setUser({...user,[name]: value})
}

<TextArea
styleClass={'classname'}
value={"value"}
name={"name"}
placeholder={'placeholder'}
rows={5}
autoComplete={'off'}
disabled={true}
readOnly={true}
onChange={(e) => onChangeHandler(e)}
onKeyDown={(e) => onKeyDownHandler(e)}
onKeyUp={(e) => onKeyUpHandler(e)}
/>

`
                    }
                </pre>

            </div>

        </div>

    )
}

export default TextAreaStyle