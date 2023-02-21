import React from 'react';
import { Button } from '../Shared/SharedIndex';

const buttonHandler = () => {
    console.log("buttons")

}



function ButtonStyle() {
    return (


        <div className='wrapper'>

            {/* ========= button 1 start ===== */}
            <div className='cover'>
                <h2 className='mb-2'>Button 1</h2>
                <div className='row mb-2'>
                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-1 btn-size-1 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-1 btn-size-2 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-1 btn-size-3 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            type={'text'}
                            styleClass={"btn-1 btn-size-3 rounded-5"}
                            styleId={"buttonId"}
                            disabled={true}
                        >Button Text
                        </Button>
                    </div>


                    <div className='col-12 py-2'>

                        <pre>
                            {
                                `<Button
onClick={() => buttonHandler()}
type={'text'}
styleClass={"btn-1 btn-size-3 rounded-5"}
styleId={"buttonId"}
disabled={ true}
>Button Text
</Button>`
                            }
                        </pre>
                    </div>
                </div>
            </div>
            {/* ========= button 1 end ===== */}





            {/* ========= button 2 start ===== */}
            <div className='cover'>
                <h2 className='mb-2'>Secondary Button</h2>
                <div className='row mb-2'>
                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-2 btn-size-1 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-2 btn-size-2 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            styleClass={"btn-2 btn-size-3 rounded-5"}
                            styleId={"buttonId"}
                        >Button Text
                        </Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Button
                            onClick={() => buttonHandler()}
                            type={'text'}
                            styleClass={"btn-2 btn-size-3 rounded-5"}
                            styleId={"buttonId"}
                            disabled={true}
                        >Button Text
                        </Button>
                    </div>


                    <div className='col-12 py-2'>

                        <pre>
                            {
                                `<Button
onClick={() => buttonHandler()}
type={'text'}
styleClass={"btn-2 btn-size-3 rounded-5"}
styleId={"buttonId"}
disabled={ true}
>Button Text
</Button>`
                            }
                        </pre>
                    </div>
                </div>
            </div>
            {/* ========= primary button end ===== */}

        </div>



    )
}

export default ButtonStyle