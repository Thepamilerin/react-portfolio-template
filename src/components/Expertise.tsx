import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faServer, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Card-specific chips. Languages (Python, SQL) are mentioned once globally,
// not in every card, so each card's chips actually differentiate.
const decisionChips = [
    "Forecasting",
    "Scoring methodologies",
    "Statistical modelling",
    "Regression analysis",
    "scikit-learn",
];

const pipelineChips = [
    "Snowflake",
    "AWS",
    "Athena",
    "dbt-style modelling",
    "Git",
    "Orchestration",
];

const experimentChips = [
    "A/B testing",
    "Cohort analysis",
    "CLV",
    "Statistical inference",
    "Tableau",
    "Power BI",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <p className="expertise-intro">
                Built primarily in Python and SQL.
            </p>
            <div className="skills-grid">

                {/* Card 1 — Decision Systems & Modelling */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Decision Systems &amp; Modelling</h3>
                    <p>
                        I build the analytical objects organisations actually act on:
                        scoring engines, forecasting models, benchmarking frameworks.
                        Defining what the model is for, who'll use it, and what failure
                        modes matter.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {decisionChips.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Card 2 — Data Pipelines & Infrastructure */}
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Data Pipelines &amp; Infrastructure</h3>
                    <p>
                        Turning messy organisational data into reliable analytical
                        foundations. I've engineered ingestion and processing pipelines
                        on tens of millions of records, including the unglamorous parts:
                        deduplication, schema evolution, late-arriving data, and the
                        documentation that means anyone else can use what I've built.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {pipelineChips.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Card 3 — Experimentation & Behavioural Analysis */}
                <div className="skill">
                    <FontAwesomeIcon icon={faFlaskVial} size="3x"/>
                    <h3>Experimentation &amp; Behavioural Analysis</h3>
                    <p>
                        A/B testing and behavioural segmentation done properly:
                        pre-registration, power, peeking, segment effects. I've used this
                        to inform product, marketing, and retention decisions, including
                        driving an 18% reduction in churn at a previous role.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {experimentChips.map((label, index) => (
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
