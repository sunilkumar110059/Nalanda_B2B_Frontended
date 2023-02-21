import React from 'react';
import { RollerLoader, EllipsisLoader, SpinDottedLoader } from '../Shared/SharedIndex';


function LoaderStyle() {
    return (
        <div className='row'>
            <div className='col-6 py-2'>
                <div className='row'>
                    <div className='col-2'> <RollerLoader loaderColor={'bg-color-3-1'} /></div>
                    <div className='col'>
                        <pre>
                            {`
import { RollerLoader } from '../Shared/SharedIndex';

<RollerLoader loderColor={'bg-color-3-1'} />
`}
                        </pre>
                    </div>
                </div>
            </div>


            <div className='col-6 py-2'>

                <div className='row'>
                    <div className='col-2'>
                        <EllipsisLoader loaderColor={'bg-color-3-1'} />
                    </div>
                    <div className='col'>
                        <pre>
                            {`
import { EllipsisLoader } from '../Shared/SharedIndex';

<EllipsisLoader loaderColor={'bg-color-3-1'}/>
`}
                        </pre>
                    </div>
                </div>



            </div>



            <div className='col-6 py-2'>

                <div className='row'>
                    <div className='col-2'>
                        <SpinDottedLoader
                            borderColor={'border-color-2-1'}
                            loaderSize={50}
                        />

                    </div>
                    <div className='col'>
                        <pre>
                            {`
import { SpinDottedLoader } from '../Shared/SharedIndex';

<SpinDottedLoader
borderColor={'border-color-2-1'}
loaderSize={50}
/>

`}
                        </pre>
                    </div>
                </div>



            </div>



        </div>

    )
}

export default LoaderStyle