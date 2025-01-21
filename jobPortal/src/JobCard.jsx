import React from "react";
import "../public/form.css";
import {Star,StarFill} from 'react-bootstrap-icons'
import { useState } from "react";
import {Button} from "react-bootstrap"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobCard(props)
{
    const [pressed, isPressed] = useState(props.is_saved)
    function handlePress()
    {
        isPressed(!pressed)
        axios.patch(`http://localhost:8080/update-saved-job/${props.id}`)
    }  

    let navigate = useNavigate()

    function handleApply() {
        navigate(`/job-apply/${props.job_id}`, {
            state: {
                id: props.id,
                job_id: props.job_id,
                location: props.location,
                job_title: props.job_title,
                job_type: props.job_type,
                role_description: props.role_description,
                domain: props.domain,
                experience: props.experience,
                posted_time: props.posted_time,
                is_saved: props.is_saved,
                skill: props.skill
            },
        });
    }
    

    return (
        <>
            <div className="card-body">
                <div>
                    <div className="card-location-title-row">
                        <h5>{props.location}</h5>
                        {(pressed)?<StarFill className="saved-job-star-icon-fill" onClick={handlePress} style={{cursor:"pointer"}}></StarFill>:<Star className="saved-job-star-icon-outline" onClick={handlePress} style={{cursor:"pointer"}}></Star>}
                    </div>
                    <hr className="card-divider"></hr>
                    <div className="card-job-title">
                        <h2>{props.job_title}</h2>
                        <p>{props.job_type}</p>
                    </div>
                    <div className="card-role-description">
                        <h4>Role : </h4>
                        <p>{props.role_description}</p>
                    </div>
                    <div className="card-body-details">
                        <div className="card-body-details-row1">
                        <h4>Domain : </h4>
                        <p>{props.domain}</p>
                        </div>
                        <div className="card-body-details-row2">
                        <h4>Years of Experience : </h4>
                        <p>{props.experience}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-apply-button">
                        <p>posted: {props.posted_time}</p>
                        <Button variant="success" onClick={handleApply}>Apply</Button>
                    </div>
                </div>    
            </div>
        </>
    );
}

export default JobCard;