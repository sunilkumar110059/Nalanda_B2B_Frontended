import React from 'react'
import { IMAGES } from '../../Shared/SharedIndex';

function PdfSection() {
    const downloadFile = async (pdfurl) => {
        let alink = document.createElement('a');
        alink.href = pdfurl
        alink.download = "file"
        alink.click();
    };

    return (
        <div className='cover mb-3'>
            <div className='hd-5 mb-2 text-color-3-2'>Pdfs</div>
            <div className='row'>
                {[...Array(15).keys()].map((val) => (
                    <div className='col-12 col-sm-6 col-md-4 my-1' key={val} onClick={() => downloadFile(`${window.location.origin}/assets/pdf/form_11.pdf`)}>
                        <img src={IMAGES.PDF_ICON1} alt="PDf" />
                        <p className='font-12 text-truncate'>Practice words loreaqn ipsum  loreaqn ipsum  loreaqn ipsum  loreaqn ipsum</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PdfSection;