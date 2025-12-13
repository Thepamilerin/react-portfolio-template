import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>

          {/* Data Scientist */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Oct 2025 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Scientist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England
            </h4>
            <p>
              Working on advanced analytics and machine learning problems, translating complex datasets
              into actionable insights. Focus areas include predictive modelling, experimentation,
              and supporting strategic decision-making with data-driven evidence.
            </p>
          </VerticalTimelineElement>

          {/* Senior Data Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2025 – Oct 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Data Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England
            </h4>
            <p>
              Led complex analytical work across customer behaviour, revenue, and performance metrics.
              Built dashboards and analytical frameworks using SQL, Python, and BI tools to inform
              product, marketing, and operational strategy.
            </p>
          </VerticalTimelineElement>

          {/* Data Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 – Mar 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England
            </h4>
            <p>
              Analysed large structured datasets to identify trends, performance drivers,
              and operational insights. Supported stakeholders through reporting,
              ad-hoc analysis, and data visualisation.
            </p>
          </VerticalTimelineElement>

          {/* Product / Customer Data Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 – Oct 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product & Customer Data Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England (Remote)
            </h4>
            <p>
              Analysed customer behaviour, sales performance, and engagement metrics to
              improve retention and product adoption. Built dashboards and conducted
              experimentation to inform product and marketing decisions.
            </p>
          </VerticalTimelineElement>

          {/* Assistant Lead / Product Data Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2020 – Jul 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistant Lead, Product Data Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England (Remote)
            </h4>
            <p>
              Supported the design and launch of a financial trading platform through
              data analysis, market research, and user testing. Built and maintained
              analytical databases to improve operational efficiency and decision-making.
            </p>
          </VerticalTimelineElement>

          {/* Team Lead, Data Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 – May 2020"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Team Lead, Data Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lagos, Nigeria
            </h4>
            <p>
              Led data initiatives including large-scale database implementation,
              access-control analytics, and fraud reduction. Delivered analytical
              insights that improved operational efficiency and reduced costs.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
