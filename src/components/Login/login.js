import React, { useState } from "react";
import "./login.css";
// import lImage from "../../assets/Image/te1.png"

const Login = (props) => {
    const [value, setValue] = useState('');
    const [ENO, setENO] = useState('')
    const [pass, setPass] = useState('')

    const company = [

        { label: 'Select Company', value: 'selectcompany' },

        { label: 'Tech Elecon', value: 'techelecon' },

        { label: 'Tech Elecon1', value: 'techelecon1' },

    ];

    const handleChange = (event) => {

        setValue(event.target.value);
        // console.log(event.target.value);
    };

    const resetHandler = () => {
        setValue('selectcompany');
        setENO('');
        setPass('');
    }


    // console.log(ENO, pass);

    return (
        <section className="main ">

            <div className="loginMain">
                <div className="loginImage">
                    <img className="img1" src="/src/assets/Image/te1.png" alt="" />
                    {/* <lImage className="img1" /> */}
                </div>
                <div className="loginHeader">
                    <div>
                        <div className="">
                            <h1>Call Management System</h1>
                        </div>
                        <label>



                            <select value={value} onChange={handleChange}>

                                {company.map((option) => (

                                    <option value={option.value}>{option.label}</option>

                                ))}

                            </select>

                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder="Employee No." value={ENO} onChange={(nk) => setENO(nk.target.value)} />
                    </div>
                    <div>
                        <input type="password" name="password" id="" value={pass} placeholder="Password" onChange={(kn) => setPass(kn.target.value)} />
                    </div>

                    <div>
                        <button onClick={props.click}>Push</button>
                        <button onClick={resetHandler}>Reset</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login;