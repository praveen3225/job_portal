import React from "react";
import { useState } from "react";
import {Button} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function JobApplyFillFormScreen()
{
    const location = useLocation();

    const navigate = useNavigate();

    const formContainerRef = useRef(null);

    let data = location.state || null;

    useEffect(() => {
        if (formContainerRef.current) {
            formContainerRef.current.scrollTop = 0;
        }
    }, []);

    const [option,SetOption] = useState("")
    const [gender,SetGender] = useState("")

    const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];

    const [formdata, setFormData] = useState({
        job_id: data.job_id || "",
        job_title: data.title || "",
        first_name: "",
        last_name: "",
        father_name: "",
        address: ["", ""], // Address array: [address_line_1, address_line_2]
        state: "",
        gender: "",
        email: "",
        mobile_number: "",
    });

    function handleFormDataChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
    
    function handleAddressChange(event, index) {
    const { value } = event.target;
    setFormData((prev) => {
        const updatedAddress = [...prev.address];
        updatedAddress[index] = value;
        return { ...prev, address: updatedAddress };
    });
    }

    function handleSubmit() {
        console.log("Form submitted with data:", formdata);
        axios.post(`http://localhost:8080/save-form`,formdata).then(
            (response)=>{alert("Data submitted successfully. Now redirecting to Home Page",response)
                setTimeout(()=>{
                    navigate("/")
                },3000)
            }
        ).catch((error)=>{
            alert("Error : ",error)
        })        
    }
    
    return (
        <>
            <div className="job-apply-fill-form-screen-bg">
                <div className="job-apply-fill-form-container" ref={formContainerRef}>
                   <h1 style={{textAlign:"center",marginBottom:"20px"}}> Form-details </h1>
                   <div className="job-apply-fill-form-row-header">
                        <h4>JOB-NAME: {data.title}</h4>
                        <h4>JOB-ID: {data.job_id}</h4> 
                        <hr style={{background: "linear-gradient(to right, #ff0099, #493240)", opacity:"1",width:"100%",border:"none",height:"5px"}}></hr>
                   </div>
                   
                   <div className="row-mod">
                        <div className="job-apply-fill-form-row-1">
                            <label style={{marginRight:"20px"}}>First-Name :</label>
                            <input className="input-field" name="first_name" autoFocus="false" autoComplete="false" onChange={handleFormDataChange} value={formdata.first_name}></input>
                        </div>
                        <div className="job-apply-fill-form-row-2">
                            <label style={{marginRight:"20px"}}>Last-Name :</label>
                            <input className="input-field" name="last_name" autoFocus="false" autoComplete="false" onChange={handleFormDataChange} value={formdata.last_name}></input>
                        </div>
                   </div>
                   {/* <br></br> */}
                    <div className="row-mod">
                        <div className="job-apply-fill-form-row-3">
                            <label style={{marginRight:"20px"}}>Father-Name :</label>
                            <input className="input-field" name="father_name" autoFocus="false" autoComplete="false" onChange={handleFormDataChange} value={formdata.father_name}></input>
                        </div>
                        <div className="job-apply-fill-form-row-4">
                            <label style={{marginRight:"20px"}}>Mobile No. :</label>
                            <input className="input-field" name="mobile_number" onChange={handleFormDataChange} type="number" value={formdata.mobile_number}></input>
                        </div>
                    </div>
                    <div className="row-mod">
                        <div className="job-apply-fill-form-row-3">
                            <label style={{marginRight:"20px"}}>E-mail :</label>
                            <input className="input-field" name="email" autoFocus="false" autoComplete="false" onChange={handleFormDataChange} value={formdata.email}></input>
                        </div>
                    </div>
                    {/* <br></br> */}
                    <div className="gender-main-row">
                        <div className="job-apply-fill-form-row-5">
                            <div style={{width:"auto"}}>
                                <label>Gender :</label>
                            </div>
                            <div style={{width:"auto"}}>
                                <input type="radio" name="gender" onChange={handleFormDataChange} value="Male" checked={formdata.gender==='Male'} style={{margin:"0px 10px"}} ></input>
                                <label>Male</label>
                            </div>
                            <div style={{width:"auto"}}>
                                <input type="radio" name="gender" onChange={handleFormDataChange} value="Female" checked={formdata.gender==='Female'} style={{margin:"0px 10px"}}></input>
                                <label>Female</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="job-apply-fill-form-row-1">
                        <div className="job-apply-fill-form-row-1">
                            <label>Address :</label>
                        </div>
                    </div>
                    <br></br>
                    <div className="address-width-fix">
                        <div className="job-apply-fill-form-row-6">
                            <label style={{paddingRight:"20px"}}>Address-Line 1:</label>
                            <input style={{flex:'1'}} name="address_line_1" onChange={(event) => handleAddressChange(event, 0)}
                value={formdata.address[0]}></input>
                        </div>
                        {/* <br></br> */}
                        <div className="job-apply-fill-form-row-6">
                            <label style={{paddingRight:"20px"}}>Address-Line 2:</label>
                            <input style={{flex:'1'}} name="address_line_2" onChange={(event) => handleAddressChange(event, 1)}
                value={formdata.address[1]}></input>
                        </div>
                        {/* <br></br> */}
                        <div className="job-apply-fill-form-row-6">
                            <label style={{paddingRight:"20px"}}>State:</label>
                            <select className="input-field" 
                            name="state" 
                            autoFocus="false" 
                            autoComplete="false" 
                            onChange={handleFormDataChange}
                            value={formdata.state}
                            style={{width:"145px"}}
                            >
                            <option value="" disabled>
                                -- Select a state --
                            </option>
                            {states.map((state, index) => (
                            <option key={index} value={state} style={{maxHeight:"80%"}}>
                                {state}
                            </option>
                            ))}
                            </select>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center",paddingBottom:"40px"}}>
                            <Button variant="success" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobApplyFillFormScreen;