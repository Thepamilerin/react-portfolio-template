import React from "react";
import { Link } from "react-router-dom";
import stanfordCover from '../assets/images/stanford-ai-index-2026.png';
import plasticBagThumb from '../assets/images/plastic-bag-thumbnail.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">

                {/* Stanford AI Index 2026 — featured */}
                <div className="project featured-project">
                    <a
                        href="https://aiindex.stanford.edu/report/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={stanfordCover}
                            className="zoom"
                            alt="Stanford AI Index Report 2026"
                            width="100%"
                        />
                    </a>
                    <span className="project-tag">Named contributor</span>
                    <h2>
                        <a
                            href="https://aiindex.stanford.edu/report/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Stanford AI Index 2026
                        </a>
                    </h2>
                    <p>
                        Named contributor to the Research &amp; Development chapter of
                        the 2026 edition of Stanford HAI's annual AI Index, the most
                        widely-cited reference on the state of AI globally. Contributed
                        talent and workforce data alongside ~30 other named contributors
                        from research and industry.
                    </p>
                </div>

                {/* Plastic Bag Charge Analysis */}
                <div className="project featured-project">
                    <Link to="/analysis/plastic-bag-charge">
                        <img
                            src={plasticBagThumb}
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
                        A statistical analysis of nine years of Defra data on
                        single-use plastic carrier bags in England. The headline says
                        the charge worked. The data says something more interesting,
                        and reveals what the public dataset is structurally unable to
                        tell us.
                    </p>
                </div>

                {/* NHS Waiting Lists Explorer — in progress */}
                <div className="project in-progress-project">
                    <span className="project-tag in-progress-tag">In progress</span>
                    <h2>NHS waiting lists explorer</h2>
                    <p>
                        An interactive tool for exploring NHS England waiting list data
                        by trust and specialty, with light forecasting on where current
                        trajectories lead. Coming soon.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
