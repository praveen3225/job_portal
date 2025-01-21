import React from "react";
import { Button } from "react-bootstrap";
import "../public/form.css";
import { useNavigate} from "react-router-dom";

function Section3(){

    function showJobsPage()
    {
        navigate("/jobs")
    }

    let navigate = useNavigate()

    return (
        <>
            <section className="apply-section">
                <Button variant="success" onClick={showJobsPage}>Apply Now</Button>
            </section>
        </>
    );
}

export default Section3;

