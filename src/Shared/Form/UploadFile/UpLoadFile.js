import React, { useState, useEffect, Fragment } from 'react';
// const imageMimeType = /image\/(png|jpg|jpeg)/i;

const imageMimeType = /^image\/(gif|jpe?g|png)$|^application\/(pdf|msword)$|^text\/plain$/i;

function UpLoadFile() {

    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [fileLoader, setfileLoader] = useState(false);

    const changeHandler = (e) => {
        const file = e.target.files[0];

        let filesize = (file.size).toFixed(2)
        console.log(filesize)
        if (filesize >= 102400) {
            console.log("File must be between the size of 2-4 MB")            
        } else {
            console.log(`size is: ${filesize} MB"`)
        }



        if (!file.type.match(imageMimeType)) {
            console.log("this file is not supported")
            return;
        }
        setFile(file);
    }


    useEffect(() => {
        let fileReader = false;
        let isCancel = false;

        if (file) {
            setfileLoader(true)
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setfileLoader(false)
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }

        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);
    return (
        <Fragment>
            <label>
                <input
                    hidden
                    type="file"
                    accept='.png, .jpg, .jpeg, .pdf'
                    onChange={changeHandler}
                />
                <div className='btn-1 d-inline-block'>Button</div>

            </label>

            {fileDataURL && <img src={fileDataURL} alt="preview" />}

            {fileLoader && <h1>Loading...</h1>}
        </Fragment>


    )
}

export default UpLoadFile
