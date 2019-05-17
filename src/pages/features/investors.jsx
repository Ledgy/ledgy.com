// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { faFolderOpen, faFilePdf, faHistory, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { FeatureLinks, FeatureList, TopPageFeatureCard } from '../../components/Feature';
import { Title, Hr } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Investor Relations & Portfolio`}
      section={i18n.t`Features`}
      description={i18n.t`As a startup, be professional towards your investors, track KPIs, write recurring reports. As an investor, this is the simplest and most time-efficient way to manage your portfolio.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Investor Relations & Portfolio</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden">
        <div className="container text-left">
          <div className="row pb-7">
            <TopPageFeatureCard
              header={<Trans>Recurring reports</Trans>}
              body={<Trans>including KPIs and generated in a click</Trans>}
              icon={faFilePdf}
              href="#reports"
            />
            <TopPageFeatureCard
              header={<Trans>KPIs</Trans>}
              body={<Trans>your key performance data for your reports</Trans>}
              icon={faChartLine}
              href="#kpis"
            />
            <TopPageFeatureCard
              header={<Trans>Professional portfolio</Trans>}
              body={<Trans>to stay up to date with all your investments</Trans>}
              icon={faFolderOpen}
              href="#professional"
            />
            <TopPageFeatureCard
              header={<Trans>Portfolio history</Trans>}
              body={<Trans>to keep track of all that’s happened</Trans>}
              icon={faHistory}
              href="#portfolioHistory"
            />
          </div>

          <div className="row gap-y">
            <div className="col-md-11 mx-auto mb-7" data-aos="fade-up">
              <Img {...props.data.kpiChart} alt={i18n.t`KPI chart`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section overflow-hidden pb-0 pt-2" id="reports">
        <div className="container text-left">
          <Hr />
          <FeatureList
            textSize="5"
            header={<Trans>Recurring Reports</Trans>}
            features={[
              <Trans>
                Successful companies share regular updates with their stakeholders, holding
                themselves accountable
              </Trans>,
              <Trans>Style your reports to your needs with the rich-text editor</Trans>,
              <Trans>Attach your KPIs and any documents</Trans>,
              <Trans>
                Publish your reports once done, which will share them with your selected
                stakeholders
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.reportExample} alt={i18n.t`Report`} />}
          />
        </div>
      </section>

      <section className="section overflow-hidden pb-0 pt-2" id="kpis">
        <div className="container text-left">
          <Hr />
          <FeatureList
            textSize="5"
            header={<Trans>Key Performance Indicators</Trans>}
            features={[
              <Trans>Every company has KPIs, and investors love seeing them in real-time</Trans>,
              <Trans>Just copy-paste expected and actual values and customize the plots</Trans>,
              <Trans>Share them with individual stakeholders or with stakeholder groups</Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.kpiChart} alt={i18n.t`Kpi chart`} />}
            imgFirst
          />
        </div>
      </section>

      <section className="section overflow-hidden pb-0 pt-2" id="professional">
        <div className="container text-left">
          <Hr />
          <FeatureList
            textSize="5"
            header={<Trans>Professional portfolio</Trans>}
            features={[
              <Trans>Always up-to-date portfolio, curated by your startups</Trans>,
              <Trans>Keep an eye on your investments, their value and multiple</Trans>,
              <Trans>Weekly email notifications if the startups publish new information</Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.dashboardShares} alt={i18n.t`Investor portfolio`} />}
          />
        </div>
      </section>

      <section className="section overflow-hidden pb-0 pt-2" id="portfolioHistory">
        <div className="container text-left">
          <Hr />
          <FeatureList
            textSize="4"
            header={<Trans>Portfolio history</Trans>}
            features={[
              <Trans>Comprehensive transaction history</Trans>,
              <Trans>Legal documents associated with the transactions at your fingertips</Trans>
            ]}
            imgSize="8"
            img={<Img {...props.data.dashboardHistory} alt={i18n.t`Portfolio history`} />}
            imgFirst
          />
        </div>
      </section>

      <section className="section overflow-hidden pt-2">
        <div className="container text-left">
          <Hr />
          <FeatureList
            textSize="5"
            header={<Trans>Complete your portfolio</Trans>}
            features={[
              <Trans>
                Add an investment, if a company is not using Ledgy yet to complete your portfolio
              </Trans>,
              <Trans>
                Invite the founder or CFO to claim the company and keep the information up-to-date
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.addInvestment} alt={i18n.t`Add portfolio investment`} />}
          />

          <FeatureLinks {...props} i18n={i18n} page="investors" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    dashboardShares: imageSharp(fluid: { originalName: { regex: "/dashboard-shares.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dashboardHistory: imageSharp(fluid: { originalName: { regex: "/dashboard-history.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    addInvestment: imageSharp(fluid: { originalName: { regex: "/add-investment.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    kpiChart: imageSharp(fluid: { originalName: { regex: "/kpi-chart.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    reportExample: imageSharp(fluid: { originalName: { regex: "/report-example.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
