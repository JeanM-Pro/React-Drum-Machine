import React, { useState } from 'react'
import { AudioButton } from './AudioButton.js'
import {samples} from './data.js'

export const DrumMachineApp = () => {


    const [currentButton, setCurrentButton] =useState()
    


    return (
        <div className='content'>
            
            <div id='drum-machine'>

                <div className='pad-content'>
                    
{samples.map(sample => <AudioButton setCurrentButton={setCurrentButton} key={sample.id} musiquita={sample}/>)}
                    
                </div>

                <div className='display-content'>

                    <div id='display'>
                        {currentButton ? currentButton : 'Play something'}
                    </div>
                    
                </div>

            </div>


        </div>
    )
}
