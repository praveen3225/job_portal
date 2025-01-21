import React, { useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function JobApplyScreen()
{
    const navigate = useNavigate()

    function handleApplyButton()
    {
        navigate("/fill-form",{state:{title:state.job_title,job_id:state.job_id}})
    }

    useEffect(
        ()=>{
            window.scrollTo(0,0)
        },[]
    );

    const location = useLocation(); // Access the state passed via navigate
    const state = location.state || null

    const skills = state.skill || null

    return (
        <>
            <div className="job-apply-bg">
                <div className="job-apply-grid">
                    <div className="main-grid">
                        <div style={{flex:"0 0 auto"}}>
                            <div className="job-apply-screen-header-row">
                                <h1>{state.job_title}</h1>
                                <h2>JOB - ID : {state.job_id}</h2>
                            </div>
                            <hr className="job-apply-screen-divider"></hr>
                        </div>
                        <div className="job-apply-screen-main-screen-col-container">
                            <div className="job-apply-screen-main-screen-col-container-row1">
                                <div className="job-apply-screen-second-row">
                                    <p><strong>Location : </strong>{state.location}</p>
                                    <p><strong>Job-type : </strong>{state.job_type}</p>
                                </div>
                                <p><strong>Domain : </strong>{state.domain}</p>
                                <p><strong>Role : </strong></p>
                                <p style={{textAlign:"justify",}}>{state.role_description}</p>
                            </div>
                            <div className="job-apply-screen-main-screen-col-container-row2">
                                <div>
                                    <p><strong>Years of Experience : </strong>{state.experience}</p>
                                    <p style={{fontSize:"17px"}}><strong>Posted : </strong>{state.posted_time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-grid">
                        <div className="job-apply-screen-side-screen-col">
                            <div className="job-apply-screen-side-screen-col-heading">
                                <h3>Required Skillsets :</h3>
                            </div>
                            <div className="job-apply-screen-side-screen-col-body">
                                <ol>
                                    {skills.map((skill)=>{
                                        return (<div>
                                            <li>{skill}</li>
                                        </div>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div style={{display:"flex",flexDirection:'row',justifyContent:"center"}}>
                            <Button variant="success" onClick={handleApplyButton}> Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobApplyScreen;