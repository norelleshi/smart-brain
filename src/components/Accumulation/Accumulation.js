import React from 'react';

const Accumulation = ({accumulation}) => {
    return (
        <div>
            <div className='white f3'>
                {'Current entry count is: '}
            </div>
            <div className='white f1'>
                {accumulation}
            </div>
        </div>
    )
}

export default Accumulation;