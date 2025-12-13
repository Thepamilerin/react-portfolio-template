import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Data Analysis",
    "Statistics",
    "Data Visualisation"
];

const labelsSecond = [
    "Docker",
    "AWS",
    "Linux",
    "ETL Pipelines",
    "Model Deployment",
    "Git",
    "CI/CD",
    "APIs"
];


const labelsThird = [
    "OpenAI",
    "LangChain",
    "LlamaIndex",
    "Vector Databases",
    "RAG",
    "Prompt Engineering",
    "Hugging Face",
    "Streamlit"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Analysis & Modelling</h3>
                    <p>I work with structured and unstructured data to extract insights, build predictive models, and support data-driven decision making. My work includes exploratory data analysis, feature engineering, and model evaluation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>ML Systems & Data Engineering</h3>
                    <p>I design and maintain data pipelines and machine learning systems, focusing on reliability, scalability, and reproducibility. This includes data ingestion, model deployment, and workflow automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM Applications</h3>
                    <p>I build GenAI-powered applications using modern LLM frameworks, focusing on retrieval-augmented generation, prompt design, and real-world use cases that enhance user workflows and decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;