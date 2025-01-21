import React from "react";
import "../public/form.css";

function Section1(){

    return (
        <>
            <section className="section-1">
                <h1>Welcome to Lumora</h1>
                <p className="section-1-content">Illuminating Innovation, Empowering Progress</p>
                <div className="section-1-content p">
                    <p>At Lumora, we blend cutting-edge technology with visionary solutions to drive global transformation. With a focus on excellence and sustainability, we shape a brighter future for businesses and communities worldwide.</p>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#363795" />
                    <stop offset="100%" stop-color="#005C97" />
                </linearGradient>
                </defs>
                <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z" fill="url(#gradient)"></path>
            </svg>
        </>
    );
}

export default Section1;

