import React, { useState } from 'react'
import {sample} from './data.js'


export const DrumMachineApp = () => {

    const boton = document.getElementById('Heater-1');
    const audio = document.getElementById('Q')
    boton.addEventListener('click', ()=>{
        audio.onplay();
    })



    return (
        <div className='content'>
            
            <div id='drum-machine'>

                <div className='pad-content'>
                    <button className="drum-pad" id={sample[0].id} value='reproducir'>Q
                        <audio className='clip' id={sample[0].keyTrigger} src={sample[0].url}/>
                    </button>

                    <button className="drum-pad" id={sample[1].id}>W
                        <audio className='clip' id={sample[1].keyTrigger} src={sample[1].url}/>
                    </button>

                    <button className="drum-pad" id={sample[2].id}>E
                        <audio className='clip' id={sample[2].keyTrigger} src={sample[2].url}/>
                    </button>
                    
                    <button className="drum-pad" id={sample[3].id}>A
                        <audio className='clip' id={sample[3].keyTrigger} src={sample[3].url}/>
                    </button>

                    <button className="drum-pad" id={sample[4].id}>S
                        <audio className='clip' id={sample[4].keyTrigger} src={sample[4].url}/>
                    </button>

                    <button className="drum-pad" id={sample[5].id}>D
                        <audio className='clip' id={sample[5].keyTrigger} src={sample[5].url}/>
                    </button>

                    <button className="drum-pad" id={sample[6].id}>Z
                        <audio className='clip' id={sample[6].keyTrigger} src={sample[6].url}/>
                    </button>

                    <button className="drum-pad" id={sample[7].id}>X
                        <audio className='clip' id={sample[7].keyTrigger} src={sample[7].url}/>
                    </button>

                    <button className="drum-pad" id={sample[8].id}>C
                        <audio className='clip' id={sample[8].keyTrigger} src={sample[8].url}/>
                    </button>
                </div>

                <div className='display-content'>

                    <div id='display'>
                        Holaa
                    </div>
                    
                </div>

            </div>


        </div>
    )
}
