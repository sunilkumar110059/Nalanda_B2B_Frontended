import React, { useState } from 'react'
import ButtonStyle from './ButtonStyle';
import SelectBoxStyle from './SelectBoxStyle';
import InputStyle from './InputStyle';
import TextAreaStyle from './TextAreaStyle';
import Colors from './Colors';
import CheckBoxStyle from './CheckBoxStyle';
import UploadFileStyle from './UploadFileStyle';
import RadioStyle from './RadioStyle';


import VideoModalStyle from './VideoModalStyle';
import AlertModalStyle from './AlertModalStyle';


import LoaderStyle from './LoaderStyle';




function UiPatternIndex() {
    const [StateStyle, SetStyleFun] = useState('loader')

    const uiPatternHandle = (param) => {
        SetStyleFun(param)
    }

    return (
        <div className="wrapper p-3">
            <div className="cover mb-3">
                <div className="row">
                    <div className="col-auto" onClick={() => uiPatternHandle('select')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'select' ? 'active' : ''}`}>Select Box</div>
                    </div>
                    <div className="col-auto cursor-pointer" onClick={() => uiPatternHandle('textarea')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'textarea' ? 'active' : ''}`}>Textarea</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('input')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'input' ? 'active' : ''}`}>Inputs</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('button')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'button' ? 'active' : ''}`}>Buttons</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('checkbox')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'checkbox' ? 'active' : ''}`}>Checkbox</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('radio')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'radio' ? 'active' : ''}`}> Radio Button</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('file')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'file' ? 'active' : ''}`}> Upload File</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('color')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'color' ? 'active' : ''}`}> Colors</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('videomodal')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'videomodal' ? 'active' : ''}`}> Video Modal</div>
                    </div>
                    <div className="col-auto" onClick={() => uiPatternHandle('alertmodal')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'alertmodal' ? 'active' : ''}`}> Alert Modal</div>
                    </div>

                    <div className="col-auto" onClick={() => uiPatternHandle('loader')}>
                        <div className={`cursor-pointer btn btn-2 btn-size-1 ${StateStyle === 'loader' ? 'active' : ''}`}> Loader</div>
                    </div>

                    

                </div>
            </div>


            <div className="cover">
                {StateStyle === "select" && <SelectBoxStyle />}
                {StateStyle === "textarea" && <TextAreaStyle />}
                {StateStyle === "input" && <InputStyle />}
                {StateStyle === "button" && <ButtonStyle />}
                {StateStyle === "checkbox" && <CheckBoxStyle />}
                {StateStyle === "radio" && <RadioStyle />}
                {StateStyle === "file" && <UploadFileStyle />}

                {StateStyle === "color" && <Colors />}

                {StateStyle === "videomodal" && <VideoModalStyle />}
                {StateStyle === "alertmodal" && <AlertModalStyle />}

                {StateStyle === "loader" && <LoaderStyle />}

                

            </div>
        </div>
    )
}

export default UiPatternIndex