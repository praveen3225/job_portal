import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

function ListJobs() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getDetails() {
            try {
                const response = await axios.get("http://localhost:8080/get-jobs");
                setData(response.data);
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        }
        getDetails(); 
    }, []);

    console.log(data)

    return (
        <>
            <div className="list-job-bg">
                <div className="job-cards">
                    {data && data.length > 0 ? (
                        data.map((props, index) => (
                            <JobCard
                                key={index}
                                identity = {index}
                                id = {props.id}
                                job_id = {props.job_id}
                                location={props.location}
                                job_title={props.job_title}
                                job_type={props.job_type}
                                role_description={props.role_description}
                                domain={props.domain}
                                experience={props.experience}
                                posted_time={props.posted_time}
                                is_saved = {props.is_saved}
                                skill = {props.skill}
                            />
                        ))
                    ) : (
                        <p>There are no jobs available now</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ListJobs;
