import React from "react";
import { Link } from "react-router-dom";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">

                {/* Plastic Bag Charge Analysis — featured case study */}
                <div className="project featured-project">
                    <Link to="/analysis/plastic-bag-charge">
                        <img
                            src={mock04}
                            className="zoom"
                            alt="Did the plastic bag charge actually work?"
                            width="100%"
                        />
                    </Link>
                    <span className="project-tag">Case study</span>
                    <h2>
                        <Link to="/analysis/plastic-bag-charge">
                            Did the plastic bag charge actually work?
                        </Link>
                    </h2>
                    <p>
                        A statistical analysis of nine years of Defra data on single-use plastic
                        carrier bags in England. The headline says the charge worked. The data
                        says something more interesting &mdash; and reveals what the public dataset
                        is structurally unable to tell us.
                    </p>
                </div>

                {/* Sales & Revenue Performance Analysis */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img
                            src={mock05}
                            className="zoom"
                            alt="Sales & Revenue Performance Analysis"
                            width="100%"
                        />
                    </a>
                    <h2>Sales &amp; Revenue Performance Analysis</h2>
                    <p>
                        Analysed multi-year sales and revenue data to identify growth drivers,
                        seasonality patterns, and performance gaps. Communicated insights through
                        clear summaries and data visualisations for non-technical stakeholders.
                    </p>
                </div>

                {/* GenAI Question Answering System */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img
                            src={mock08}
                            className="zoom"
                            alt="GenAI Question Answering System"
                            width="100%"
                        />
                    </a>
                    <h2>GenAI Question Answering System</h2>
                    <p>
                        Developed a GenAI-powered question answering system using large language
                        models and retrieval-augmented generation. Integrated document ingestion,
                        vector search, and prompt engineering to improve response relevance and accuracy.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
