import React from "react";
import "../public/form.css";

function Section2(){
    return (
        <>
            <section className="section-2">
                <div className="container text-center">
                    <div className="row align-items-center" style={{display: "flex",alignItems: "center"}}>
                        <div className="col-md-6 custom-col" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                            <video width="320" height="240" autoPlay muted loop>
                                <source src="../public/intro.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="col-md-6 custom-col col-description" style={{color: "black", display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                            Lumora encourages teamwork, creativity, and development, giving people the ability to influence the future with ground-breaking concepts and a vibrant atmosphere where everyone's opinion counts.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;