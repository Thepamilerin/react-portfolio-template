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

          {/* Zeki Data */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Oct 2024 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Scientist
              <span className="company-name"> · Zeki Data</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England
            </h4>
            <p>
              Lead analyst on the State of AI Talent product, an annual flagship
              publication on the global movement of frontier AI talent. Built the
              scoring methodology and the SQL infrastructure behind it. Cited by
              the Wall Street Journal, Financial Times, and Semafor.
            </p>
          </VerticalTimelineElement>

          {/* Secret Sales */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 – Oct 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product &amp; Customer Data Analyst
              <span className="company-name"> · Secret Sales</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England (Remote)
            </h4>
            <p>
              Customer behaviour, retention, and CLV analysis for a fashion
              marketplace. Designed and ran the A/B testing programme. The work
              I'm proudest of: a segmentation model that materially shifted churn.
            </p>
          </VerticalTimelineElement>

          {/* PixelMixer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 – Jun 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst
              <span className="company-name"> · PixelMixer</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              California (Remote)
            </h4>
            <p>
              Market and product analysis supporting the launch of five digital
              products. The kind of cross-functional role where the analyst is
              the only one who can see across engineering, design, and marketing
              at once.
            </p>
          </VerticalTimelineElement>

          {/* Eagle Global Markets */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2020 – Jul 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistant Lead, Product Data Analyst
              <span className="company-name"> · Eagle Global Markets</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, England (Remote)
            </h4>
            <p>
              Analytical lead for the launch of a Naira trading platform. Market
              sizing, behavioural analysis of early users, and ongoing measurement
              of registration and engagement.
            </p>
          </VerticalTimelineElement>

          {/* Dangote Industries */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 – May 2020"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Team Lead, Data Analyst
              <span className="company-name"> · Dangote Industries</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lagos, Nigeria
            </h4>
            <p>
              Built an enterprise employee database covering 100,000+ records,
              plus the access-control analytics layer on top. My first taste of
              data work that mattered to the business.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
