import React from 'react'

import "./Form.css"

const Form = (props) => {
    return (
        <div>
            <h2>Call Entry</h2>
            <form action="">
                <div>
                    <span className='details' >Select Company
                    </span>
                    <select className='Corners' value={props.value} onChange={props.Change}>

                        {props.company.map((option) => (

                            <option value={option.value}>{option.label}</option>

                        ))}

                    </select>

                </div>
                <div>

                    <label for="pc" className='details' >PC NO. </label>
                    <input
                        className='Corners'
                        id="pc"
                        type="text"
                        placeholder=""
                        name="pc"
                        required
                    />
                </div>


                <div className='or'>
                    <hr className='HR' />
                    <p> OR</p>
                    <hr className='HR' />
                </div>
                <div >
                    <button className='buttoncss' onClick={props.pop}>Search By Employee Name</button>
                </div>
            </form>
        </div>
    )
}

export default Form
