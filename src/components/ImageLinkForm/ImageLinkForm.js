import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='ml4 mr4'>
            <p className='f3 white'>
                {'This magic brain will detect faces in your picture. Give it a try! (One face only for now)'}
            </p>
            <div className='center'>
                <div className='mt3 shadow-5 form'>
                    <input className='f4 pa2 w-75 br2-ns br--left-ns' 
                            type='text' 
                            placeholder='Paste URL' 
                            onChange={onInputChange}/>
                    <button className='br2-ns br--right-ns w-25 grow f4 link ph3 pv2 dib white bg-light-purple' 
                            onClick={onButtonSubmit}
                            >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;