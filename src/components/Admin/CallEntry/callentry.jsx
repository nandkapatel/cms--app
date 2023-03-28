import React from 'react'
import { useState } from 'react'

import Navbar from '../../Navbar/navbar'
import Searchemp from './searchemp/searchemp'
import './callentry.css'
import Form from '../../Form/Form'
import FormTwo from '../../Form2/Form2'


const CallEntry = () => {
    const [pop, setPop] = useState(false);
    const [value, setValue] = useState('');
    const [ENO, setENO] = useState('')
    const [pass, setPass] = useState('')

    const company = [

        { label: '                 ', value: '' },

        // { label: 'Tech Elecon', value: 'techelecon' },

        // { label: 'Tech Elecon1', value: 'techelecon1' },

    ];

    const handleChange = (event) => {

        setValue(event.target.value);
        // console.log(event.target.value);
    };

    const popHandler = () => {
        setPop(true);

    }
    return (
        <div>
            {/* <Navbar className="NavBar" /> */}
            <Searchemp show={pop} />


            <div className='CallEntry'>
                <div className='CallMain'>
                    <div className='CallImg'>
                        <img src={require('../../../assets/Image/13038.jpg')} alt="" />
                    </div>
                    <div className='MainInput'>
                        <Form value={value} Change={handleChange} company={company} pop={popHandler} />
                    </div>
                </div>
            </div>
            <div className='MainInput2' >

                <FormTwo />
            </div>
        </div>
    )
}

export default CallEntry
