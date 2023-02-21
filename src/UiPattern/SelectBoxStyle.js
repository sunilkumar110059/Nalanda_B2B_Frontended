import React, { useState } from 'react';
import { SelectBox } from '../Shared/SharedIndex';
import { FaChevronCircleDown } from 'react-icons/fa';



function SelectBoxStyle() {

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
                <SelectBox
                    rightIcon={<FaChevronCircleDown />}
                    rightIconStyleClass={'p-2'}
                    styleId={"selectId1"}
                    styleClass={'bg-color-1-1 rounded-5 border-1 border-color-2-3 rounded-5'}
                    name={"selvalue"}
                    value={selvalue}
                    placeholder={"hello"}
                    optionData={["one", "Two", "Three"]}
                    onChange={(e) => onChangeHandler(e)}
                />
            </div>
            <div className="col-6">
                <pre>
                    {
                        `
import React, { useState } from "react";                        
import { SelectBox } from '../Shared/SharedIndex';

const [user, setUser] = useState({ selvalue: ""})
const { selvalue } = user

const onChangeHandler = (event) => {
    const { name, value } = event.target
    setUser({...user,[name]: value})
}


<SelectBox
rightIcon={<FaChevronCircleDown/>}
rightIconStyleClass={'p-2'}
styleId={"selectId1"}
styleClass={'bg-color-1-1 rounded-5 border-1 border-color-2-3 rounded-5'}
name={"names"}
value={values}
placeholder={"hello"}
optionData={["one", "Two", "Three"]}
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


export default SelectBoxStyle


