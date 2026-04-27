import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, ReferenceArea,
} from "recharts";
import "../assets/styles/Analysis.scss";

// ============================================================================
// Data — sourced from Defra Single-use plastic carrier bags charge data for
// England 2016-17 to 2024-25 (published 31 July 2025), aggregated from the
// per-retailer Table 2. Population figures from ONS mid-year estimates for
// England.
// ============================================================================

const yearlyData = [
  { year: "2016-17", perCapita: 38.3, total: 2116.0, mainShare: 62.7 },
  { year: "2017-18", perCapita: 31.5, total: 1754.1, mainShare: 59.2 },
  { year: "2018-19", perCapita: 20.1, total: 1126.8, mainShare: 50.2 },
  { year: "2019-20", perCapita: 11.2, total: 628.2,  mainShare: 43.1 },
  { year: "2020-21", perCapita: 8.6,  total: 489.1,  mainShare: 60.0 },
  { year: "2021-22", perCapita: 8.8,  total: 497.1,  mainShare: 39.7 },
  { year: "2022-23", perCapita: 7.7,  total: 434.0,  mainShare: 36.8 },
  { year: "2023-24", perCapita: 7.1,  total: 407.4,  mainShare: 38.1 },
  { year: "2024-25", perCapita: 7.6,  total: 437.0,  mainShare: 37.5 },
];

// Single-use plastic bags by main retailer, millions
const retailerData = [
  { year: "2016-17", Tesco: 637.2, Morrisons: 191.5, Asda: 165.8, "Co-op": 125.9, "M&S": 92.5, Waitrose: 62.8, "Sainsbury's": 51.8 },
  { year: "2017-18", Tesco: 332.7, Morrisons: 183.3, Asda: 193.0, "Co-op": 120.6, "M&S": 92.3, Waitrose: 62.7, "Sainsbury's": 53.9 },
  { year: "2018-19", Tesco: 121.7, Morrisons: 65.1,  Asda: 106.9, "Co-op": 112.6, "M&S": 55.5, Waitrose: 50.3, "Sainsbury's": 53.5 },
  { year: "2019-20", Tesco: 42.1,  Morrisons: 55.4,  Asda: 20.1,  "Co-op": 106.6, "M&S": 12.8, Waitrose: 9.2,  "Sainsbury's": 24.4 },
  { year: "2020-21", Tesco: 11.9,  Morrisons: 94.9,  Asda: 64.7,  "Co-op": 95.5,  "M&S": 0.5,  Waitrose: 26.1, "Sainsbury's": 0.0  },
  { year: "2021-22", Tesco: 1.4,   Morrisons: 59.6,  Asda: 5.7,   "Co-op": 104.4, "M&S": 0.8,  Waitrose: 22.4, "Sainsbury's": 3.1  },
  { year: "2022-23", Tesco: 0.0,   Morrisons: 57.2,  Asda: 0.1,   "Co-op": 96.6,  "M&S": 0.0,  Waitrose: 0.0,  "Sainsbury's": 5.9  },
  { year: "2023-24", Tesco: 0.0,   Morrisons: 53.3,  Asda: 0.1,   "Co-op": 93.0,  "M&S": 0.0,  Waitrose: 0.0,  "Sainsbury's": 8.8  },
  { year: "2024-25", Tesco: 0.0,   Morrisons: 58.3,  Asda: 0.0,   "Co-op": 94.3,  "M&S": 0.0,  Waitrose: 0.0,  "Sainsbury's": 11.3 },
];

// Pre/post 10p increase (May 2021)
const prePost10p = yearlyData.slice(3); // 2019-20 onwards

// Colours — desaturated, work in dark and light modes
const retailerColours: Record<string, string> = {
  Tesco:        "#5000ca",
  "Co-op":      "#e07a5f",
  Morrisons:    "#81b29a",
  Asda:         "#f2cc8f",
  "M&S":        "#a3a8b8",
  Waitrose:     "#3d5a80",
  "Sainsbury's": "#b56576",
};

const axisStyle = { fill: "currentColor", fontSize: 12, opacity: 0.7 };
const gridColour = "rgba(255,255,255,0.08)";
const tooltipStyle = {
  backgroundColor: "#1a1f26",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "4px",
  fontSize: "0.9rem",
  color: "#fff",
};

function PlasticBagAnalysis() {
  return (
    <div className="analysis-container" id="plastic-bag-analysis">
      <div className="analysis-content">

        <header className="analysis-header">
          <p className="analysis-eyebrow">Case study · Causal &amp; statistical analysis</p>
          <h1>Did the plastic bag charge actually work?</h1>
          <p className="analysis-byline">
            Khalifa Banji · Analysis of Defra single-use plastic carrier bags data, 2016&#8211;2025
          </p>
        </header>

        <p className="lead">
          In October 2015, England introduced a 5p charge on single-use plastic carrier bags
          at large retailers. In May 2021, it doubled to 10p and extended to all retailers.
          The headline result is well-known: a ~95% drop at the major supermarkets within
          the first year, and per-capita usage down more than 80% across the next decade.
        </p>

        <p>
          That's true. It's also the boring version of the story. The data Defra has been
          publishing every year since hides three things more interesting than the headline.
        </p>

        {/* ===== Section 1 ===== */}
        <h2>The headline answer</h2>
        <p>
          Per-capita single-use plastic bag sales in England, across all retailers reporting to Defra:
        </p>

        <figure className="chart-figure">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={yearlyData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke={gridColour} vertical={false} />
              <XAxis dataKey="year" tick={axisStyle} stroke="rgba(255,255,255,0.2)" />
              <YAxis tick={axisStyle} stroke="rgba(255,255,255,0.2)"
                     label={{ value: "Bags per person", angle: -90, position: "insideLeft", style: { fill: "currentColor", fontSize: 12, opacity: 0.7 } }}/>
              <Tooltip contentStyle={tooltipStyle}
                       formatter={(v: number) => [`${v} bags`, "Per person"]}/>
              <Area type="monotone" dataKey="perCapita" stroke="#5000ca" fill="#5000ca" fillOpacity={0.25} strokeWidth={2}/>
            </AreaChart>
          </ResponsiveContainer>
          <figcaption>
            Single-use plastic bags issued per person of the population in England.
            Source: Defra; ONS population estimates.
          </figcaption>
        </figure>

        <p>
          From 38 bags per person in 2016-17 to 7-8 by 2020-21. An 81% drop. The charge
          worked, in the narrowest sense of "fewer single-use plastic bags were sold."
        </p>
        <p>
          But two things in this chart deserve a second look. Almost all of the drop happens
          between 2016-17 and 2019-20. The line then goes flat from 2020 onwards &mdash;
          and ticks back <em>up</em> in the most recent year.
        </p>

        {/* ===== Section 2 ===== */}
        <h2>The 10p increase did almost nothing</h2>
        <p>
          In May 2021 the charge doubled from 5p to 10p and was extended to all retailers
          (previously only those with 250+ employees). If price elasticity were doing the
          work, you'd expect another visible step down.
        </p>

        <figure className="chart-figure">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={prePost10p} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid stroke={gridColour} vertical={false} />
              <XAxis dataKey="year" tick={axisStyle} stroke="rgba(255,255,255,0.2)"/>
              <YAxis tick={axisStyle} stroke="rgba(255,255,255,0.2)" domain={[0, 12]}
                     label={{ value: "Bags per person", angle: -90, position: "insideLeft", style: { fill: "currentColor", fontSize: 12, opacity: 0.7 } }}/>
              <Tooltip contentStyle={tooltipStyle}
                       formatter={(v: number) => [`${v} bags`, "Per person"]}/>
              <ReferenceArea x1="2021-22" x2="2024-25" fill="#5000ca" fillOpacity={0.06}
                             label={{ value: "10p era", position: "insideTop", style: { fill: "currentColor", fontSize: 11, opacity: 0.6 } }}/>
              <ReferenceLine x="2020-21" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3"
                             label={{ value: "May 2021: charge doubled", position: "insideTopRight", style: { fill: "currentColor", fontSize: 11, opacity: 0.7 } }}/>
              <Line type="monotone" dataKey="perCapita" stroke="#5000ca" strokeWidth={2} dot={{ r: 4, fill: "#5000ca" }}/>
            </LineChart>
          </ResponsiveContainer>
          <figcaption>
            Per-capita bags around the 10p increase. The doubling in May 2021 produced no
            visible step-change.
          </figcaption>
        </figure>

        <p>
          Per-capita bags went from 8.6 in the year before the increase, to 8.8, then 7.7,
          then 7.1 &mdash; and then back to 7.6 in 2024-25. The 10p landed in a market where
          the price-sensitive customers were already gone. The remaining demand at this
          scale is essentially price-inelastic.
        </p>
        <p>
          The pattern is informative regardless of one's view on the policy. The first 5p
          did the heavy lifting; doubling it added little. Whatever a policymaker wanted from
          a further price increase, the data suggests they didn't get it.
        </p>

        {/* ===== Section 3 ===== */}
        <h2>The category has fundamentally shifted</h2>
        <p>
          The seven "main retailers" Defra tracks are Asda, M&amp;S, Morrisons, Sainsbury's,
          Tesco, Waitrose and the Co-op. In 2016-17 these seven accounted for 63% of all
          single-use plastic bags reported in England. By 2024-25, three of them
          &mdash; Tesco, M&amp;S, and Waitrose &mdash; sell zero, having exited the category
          entirely. Their share of total reported bags is down to 38%.
        </p>

        <figure className="chart-figure">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={retailerData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke={gridColour} vertical={false} />
              <XAxis dataKey="year" tick={axisStyle} stroke="rgba(255,255,255,0.2)"/>
              <YAxis tick={axisStyle} stroke="rgba(255,255,255,0.2)"
                     label={{ value: "Millions of bags", angle: -90, position: "insideLeft", style: { fill: "currentColor", fontSize: 12, opacity: 0.7 } }}/>
              <Tooltip contentStyle={tooltipStyle}
                       formatter={(v: number) => [`${v}m bags`, ""]}/>
              <Legend wrapperStyle={{ fontSize: "0.85rem", paddingTop: "10px" }}/>
              <Bar dataKey="Tesco"        stackId="a" fill={retailerColours.Tesco}/>
              <Bar dataKey="Morrisons"    stackId="a" fill={retailerColours.Morrisons}/>
              <Bar dataKey="Asda"         stackId="a" fill={retailerColours.Asda}/>
              <Bar dataKey="Co-op"        stackId="a" fill={retailerColours["Co-op"]}/>
              <Bar dataKey="M&S"          stackId="a" fill={retailerColours["M&S"]}/>
              <Bar dataKey="Waitrose"     stackId="a" fill={retailerColours.Waitrose}/>
              <Bar dataKey="Sainsbury's"  stackId="a" fill={retailerColours["Sainsbury's"]}/>
            </BarChart>
          </ResponsiveContainer>
          <figcaption>
            Single-use plastic bags issued by the seven "main retailers" tracked by Defra,
            2016-17 to 2024-25. Tesco, M&amp;S and Waitrose exit the category entirely from 2022-23.
          </figcaption>
        </figure>

        <p>
          One retailer in the group is a clear outlier &mdash; single-use bag sales barely moved
          over a decade where every other major supermarket fell by 99%+ or stopped entirely.
          The metadata explains why: that retailer's figures were repeatedly revised upward
          to incorporate single-use compostable plastic bags that other retailers don't
          include in their returns. The comparison isn't like-for-like.
        </p>
        <p>
          That's the analytical point worth keeping. When one entity in a dataset diverges
          this dramatically from its peers, the explanation is almost always definitional,
          not behavioural. A naive ranking of "which supermarket is best for plastic" would
          draw exactly the wrong conclusion here.
        </p>
        <p>
          The broader shift matters more. Plastic bag sales have moved away from large
          supermarkets and toward smaller and mid-size retailers &mdash; clothing, hardware,
          convenience &mdash; where the policy lever is weaker and the public attention isn't.
          That's where the remaining 437 million bags a year are coming from.
        </p>

        {/* ===== Section 4 ===== */}
        <h2>What this dataset cannot tell us</h2>
        <p>
          The most important question &mdash; <em>did people just switch to bags-for-life
          and bin liners?</em> &mdash; cannot be answered from this data. That itself is a finding.
        </p>
        <p>
          Defra collects bag-for-life numbers on a <strong>voluntary</strong> basis, and it
          shows. Aldi reported 106 million bags-for-life in 2019-20, then disappeared from
          bag-for-life reporting in subsequent years. Tesco &mdash; for years the largest
          single-use bag retailer &mdash; has never reported a bag-for-life figure, in any year
          of this dataset. Waitrose reported 28 million in 2021-22, then exited the dataset
          entirely from 2022-23 because they stopped selling single-use plastic bags
          (Defra's collection scope is conditional on selling single-use bags, so retailers
          who quit the category vanish from the bag-for-life figures too).
        </p>
        <p>
          Total reported bag-for-life sales in this dataset go from 132 million in 2019-20
          to <em>zero</em> in 2024-25. That is plainly not a real behavioural collapse. It is
          a reporting artefact, driven by which large retailers volunteered numbers in which
          years.
        </p>
        <p>
          A serious answer to the displacement question would need different data: WRAP's
          consumer surveys, retailer disclosures, or product-level scanner data. The Defra
          dataset measures the policy's compliance instrument, not its environmental
          outcome. Some research &mdash; including the Environment Agency's 2011 lifecycle
          assessment &mdash; suggests bags-for-life can be more polluting per unit than the
          single-use bags they replace, depending on reuse rates. If displacement was
          substantial, the environmental win is much smaller than the bag-count drop
          implies. The honest answer is that we don't know, and the public data isn't
          designed to tell us.
        </p>

        {/* ===== Section 5 ===== */}
        <h2>So, did it work?</h2>
        <p>
          Yes, at its narrowest objective: sharply reducing single-use plastic bag sales at
          the retailers in scope. The 81% per-capita drop is real and it is durable.
        </p>
        <p>
          The bigger claims need more care. The 2021 doubling appears to have done little
          on its own &mdash; the policy's effect was nearly fully cashed in by 2020. And the
          question that actually matters environmentally &mdash; whether total plastic-bag
          consumption fell, rather than just shifted into a different reporting category
          &mdash; is one this dataset is structurally incapable of answering. Anyone telling
          you the charge "saved X tonnes of plastic" is reaching beyond what the public data
          supports.
        </p>
        <p>
          The 2024-25 uptick (the first increase in the series) is probably noise, but it's
          worth watching. A flat-then-rising pattern is consistent with a policy that has
          fully cashed in its initial effect, where any further reduction would need to come
          from a different instrument than price.
        </p>

        {/* ===== Section 6 ===== */}
        <h2>What I'd want to know to be more sure</h2>
        <ul className="analysis-list">
          <li>Bag-for-life sales by retailer with mandatory reporting &mdash; to settle the displacement question.</li>
          <li>Total plastic-by-weight from carrier bags (single-use + bags-for-life), since the environmental question is about plastic mass, not bag count.</li>
          <li>Equivalent data from Wales and Scotland, which introduced charges earlier and at different rates &mdash; natural counterfactuals.</li>
          <li>Consumer survey data on bag-bringing behaviour &mdash; to separate "stopped using bags" from "switched to a different bag type."</li>
        </ul>

        <hr className="analysis-rule"/>

        <footer className="analysis-footer">
          <p>
            <strong>Data:</strong> Defra, <em>Single-use plastic carrier bags charge data
            for England, 2016-17 to 2024-25</em> (published 31 July 2025). Population
            figures from ONS mid-year estimates for England. Open Government Licence 3.0.
          </p>
          <p>
            <strong>Code:</strong> Analysis notebook and aggregated CSVs available
            on <a href="https://github.com/Thepamilerin" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default PlasticBagAnalysis;
