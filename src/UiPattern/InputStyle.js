import React, { useState } from 'react';
import { Input } from '../Shared/SharedIndex';

function InputStyle() {

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
            <div className="col-4">
                <Input
                    styleClass={'p-2 bg-color-1-1 rounded-5 border-1 border-color-2-3 rounded-5'}
                    type={'text'}
                    name={'selvalue'}
                    value={selvalue}
                    autoComplete={'on'}
                    placeholder={'placeholder'}
                    onChange={(e) => { onChangeHandler(e) }}
                />
            </div>
            <div className="col-8">
                <pre>
                    {
                        `
import React, { useState } from "react";                           
import { Input } from '../Shared/SharedIndex';

const [user, setUser] = useState({selvalue: "" })
const { selvalue } = user

const onChangeHandler = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value})
}

<Input
styleClass={'p-2'}
styleId={'inputid'}
type={'text'}
name={'name'}
value={name}
autoComplete={'on'}
placeholder={'placeholder'}
readOnly={true}
disabled={true}
ref={'refname'}
onChange={(e) => { onChangeHandler(e) }}
onKeyDown={(e) => { onKeyDownHandler(e) }}
onKeyUp={(e) => { onKeyUpHandler(e) }}
/>        
`
                    }
                </pre>

            </div>
        </div>

    )
}

export default InputStyle