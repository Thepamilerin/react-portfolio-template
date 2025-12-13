import React from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                {/* Customer Churn Prediction */}
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img
                            src={mock04}
                            className="zoom"
                            alt="Customer Churn Prediction"
                            width="100%"
                        />
                    </a>
                    <h2>Customer Churn Prediction</h2>
                    <p>
                        Built a machine learning model to predict customer churn using historical
                        customer data. Performed exploratory data analysis, feature engineering,
                        and model evaluation to support retention-focused business decisions.
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
                    <h2>Sales & Revenue Performance Analysis</h2>
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
