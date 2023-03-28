import React, { useState } from 'react'

import "../Form/Form.css"

const Form2 = () => {
    const [pType, setPType] = useState("system_internet")






    return (
        <div className='FormTwo'>
            <div >
                <label for="exampleFormControlInput1" className='details'>Customer Name</label>
                <input className='Corners' type="text" />

            </div>
            <div >
                <label for="exampleFormControlInput1" className='details'>Department Name</label>
                <input className='Corners' type="text" />
            </div>
            <div >
                <label for="exampleFormControlInput1" className='details'>Hod Name</label>
                <input className='Corners' type="text" />
            </div>
            <div >
                <label for="exampleFormControlInput1" className='details'>EXT No.</label>
                <input className='Corners' type="text" />
            </div>
            <div >
                <label for="exampleFormControlInput1" className='details'>Mobile No.</label>
                <input className='Corners' type="text" />
            </div>
            <div >
                <label for="exampleFormControlInput1" className='details'>Email</label>
                <input className='Corners' type="email" />
            </div>
            <div>
                <label htmlFor="" className='details'>Problem Type</label>
                <select className='Corners' onChange={(e) => { setPType(e.target.value) }}  >

                    <option value="system_internet">System/Internet</option>
                    <option value="printer">Printer</option>
                    <option value="dsw">Development software/Web Site</option>
                    <option value="erp">ERP</option>
                    <option value="network_cctv">Network/CCTV</option>
                    <option value="telephone">Telephone</option>
                </select>

            </div>
            {
                pType === "system_internet" &&
                <>

                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' ></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="text" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create time: </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>
                </>
            }
            {
                pType === "printer" &&
                <>

                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' aria-label="With textarea"></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create time: </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>
                </>
            }
            {
                pType === "dsw" &&
                <>
                    <div>
                        <label htmlFor="" className='details'>Software Name</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" className='details'>Maintain By</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label htmlFor="" className='details'>Organization</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Division</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' aria-label="With textarea"></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label for="appt-date" className='details'>Create time: </label>
                        <input className='Corners' id="appt-date" type="date" name="appt-time" value="" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create time: </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>

                    <div>
                        <label className='details' htmlFor="">Responsible Employees Email To CC</label>

                        <button>Serach Email</button>
                        <span>OR</span>
                        <input type="email" className='Corners' />
                        <button>Add Email</button>
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Attachment</label>
                        <input type="file" />
                        <button>Add Attachment</button>
                    </div>


                </>
            }
            {
                pType === "erp" &&
                <>

                    <div>
                        <label htmlFor="" className='details'>ERP(Oracle) Module</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" className='details'>Maintain By</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label htmlFor="" className='details'>Organization</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Division</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div >
                        <label htmlFor="" className='details'>Priority
                            <input type="radio" value="low" name='low' />Low
                            <input type="radio" value="medium" name='medium' />Medium
                            <input type="radio" value="high" name='high' />High
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' aria-label="With textarea"></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label for="appt-date" className='details'>Create Date   </label>
                        <input className='Corners' id="appt-date" type="date" name="appt-time" value="" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create Time </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>

                    <div>
                        <label className='details' htmlFor="">Responsible Employees Email To CC</label>

                        <button>Serach Email</button>
                        <span>OR</span>
                        <input type="email" className='Corners' />
                        <button>Add Email</button>
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Attachment</label>
                        <input type="file" />
                        <button>Add Attachment</button>
                    </div>
                </>
            }
            {
                pType === "network_cctv" &&
                <>

                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' aria-label="With textarea"></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create time: </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Attachment</label>
                        <input type="file" />
                        <button>Add Attachment</button>
                    </div>
                </>
            }
            {
                pType === "telephone" &&
                <>

                    <div>
                        <label htmlFor="" className='details'>Select User Location</label>
                        <select className='Corners' aria-label="Select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='PDescription'>
                        <span className='details'>Problem Description</span>
                        <textarea className='Corners' aria-label="With textarea"></textarea>
                    </div>
                    <div >
                        <label for="exampleFormControlInput1" className='details'>IP Address</label>
                        <input className='Corners' type="email" placeholder="" />

                    </div>
                    <div>
                        <label for="appt-time" className='details'>Create time: </label>
                        <input className='Corners' id="appt-time" type="time" name="appt-time" value="13:30" />
                    </div>
                    <div>
                        <label htmlFor="" className='details'>Attachment</label>
                        <input type="file" />
                        <button>Add Attachment</button>
                    </div>
                </>
            }

            <div className='TwoButton'>

                <div>
                    <button className='buttoncsss'>Submit</button>
                </div>
                <div>
                    <button className='buttoncsss'>Cancle</button>
                </div>
            </div>
        </div>
    )
}

export default Form2
