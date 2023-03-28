import React from 'react'

import './searchemp.css'

const Searchemp = (props) => {
    return (
        <div className='Modal' style={
            {
                transform: props.show
                    ? 'translateY(0)' : 'translateY(-100)',
                opacity: props.show ? '1' : '0'
            }

        }>

            <label for="pc">EMP </label>
            <input
                id="pc"
                type="text"
                placeholder=""
                name="pc"
                required
            />

            <button>Iloveyou</button>
        </div >
    )
}

export default Searchemp
