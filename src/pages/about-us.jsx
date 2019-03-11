// @flow

import * as React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Title, ChevronRight } from '../layouts/utils';
import { team, type AuthorProps } from '../layouts/team';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`About us`}
      description={i18n.t`Meet the team behind Ledgy that went out to build a genuinely great product. Learn more about the people who trust in us.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>About us</Trans>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

const Founder = withI18n()(
  ({
    name,
    role,
    description,
    img,
    twitter,
    linkedIn,
    mail
  }: {|
    ...AuthorProps,
    img: Object
  |}) => (
    <div className="col-12 col-md-6 team-1">
      {img && <Img {...img} className="mx-auto" alt={name} />}
      <h6>{name}</h6>
      <small>{role}</small>
      <p>{description}</p>
      <div className="social social-boxed social-rounded social-gray">
        <a className="social-mail" href={`mailto:${mail}`}>
          <FontAwesomeIcon icon={faEnvelope} title="Email" />
        </a>
        <a className="social-twitter" href={twitter}>
          <FontAwesomeIcon icon={faTwitter} title="Twitter" />
        </a>
        <a className="social-linkedin" href={linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
        </a>
      </div>
    </div>
  )
);

const Investor = ({
  name,
  description,
  img
}: {|
  name: string,
  description: string,
  img: Object
|}) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <p>{description}</p>
  </div>
);

const IndexPage = (props: Props) => {
  const { data, i18n } = props;
  return (
    <div>
      <Header {...props} />
      <main className="main-content">
        <section className="section py-150 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2>
                  <Trans>Our mission</Trans>
                </h2>
                <p className="lead">
                  <Trans>
                    We want to empower entrepreneurs. They should be able to focus on their
                    business, not on bureaucratic paperwork. That’s why we want to establish a new,
                    state-of-the-art tool to manage and exchange securities in private companies.
                    Our goal is to make shares management a breeze for both companies and
                    shareholders.
                  </Trans>
                </p>
              </div>
              <div className="col-12 col-lg-6 p-50 align-self-center" data-aos="fade-left">
                <Img {...data.mission} className="shadow-3" alt={i18n.t`Space elevator`} />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Team</Trans>
              </h2>
            </header>

            <div className="row gap-y2">
              <Founder {...team.timo} img={data.timo} />
              <Founder {...team.yoko} img={data.yoko} />
              <Founder {...team.ben} img={data.ben} />
              <Founder {...team.oriol} img={data.oriol} />
            </div>
          </div>
        </section>

        <section className="section bg-ledgy text-white">
          <div className="container">
            <header className="section-header mb-0  px-md-6">
              <h2>
                <Trans>We’re hiring!</Trans>
              </h2>
              <p>
                <Trans>
                  Do you feel working for Google is boring because they don’t grow by 1,000× during
                  the next four years? Building a product is fantastic, but how about creating a
                  whole team around it? Are you a web developer that eats bugs for breakfast?
                  Fascinated by cutting-edge technology like React, blockchain or space elevators?
                  <br />
                  <br />
                  <Link href to={`${props.prefix}/jobs/`}>
                    Learn more
                    <ChevronRight />
                  </Link>
                </Trans>
              </p>
            </header>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Backed by</Trans>
              </h2>
            </header>

            <div className="row gap-y justify-content-center">
              <Investor
                name="btov Partners"
                description={i18n.t`One of Europe's oldest and largest early-stage VC funds`}
                img={data.btov}
              />
              <Investor
                name="Creathor Ventures"
                description={i18n.t`Backing the creators of our future`}
                img={data.creathor}
              />
              <Investor
                name="VI Partners"
                description={i18n.t`Healthcare & Technology Venture Capital since 2001`}
                img={data.vipartners}
              />
              <Investor
                name="Dr. Paul E. Sevinç"
                description={i18n.t`Entrepreneur, Technologist, Founder of Doodle.com`}
                img={data.paul}
              />
              <Investor
                name="Daniel Gutenberg"
                description={i18n.t`One of the most active Swiss early-stage angel investors`}
                img={data.daniel}
              />
              <Investor
                name="Luis Cabiedes"
                description={i18n.t`Specialized in investments in early-stage technology startups`}
                img={data.luis}
              />
              <Investor
                name="Myke Näf"
                description={i18n.t`Entrepreneur, Business Angel, Founder of Doodle.com`}
                img={data.myke}
              />
              <Investor
                name="Cyrill Osterwalder"
                description={i18n.t`Digital Entrepreneur and Investor. Security, Crypto & Privacy Expert`}
                img={data.cyrill}
              />
              <Investor
                name="Luzius Meisser"
                description={i18n.t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
                img={data.luzius}
              />
              <Investor
                name="Adrian Bührer"
                description={i18n.t`Investor & Consultant (Farmy.ch, Flatfox.ch), Founder of Students.ch`}
                img={data.adrian}
              />
              <Investor
                name="Elena Walder-Schiavone"
                description={i18n.t`M&A and Private Equity Lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
                img={data.elena}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...TeamFragment

    mission: imageSharp(fluid: { originalName: { regex: "/mission/" } }) {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }

    btov: imageSharp(fluid: { originalName: { regex: "/btov.png/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    creathor: imageSharp(fluid: { originalName: { regex: "/creathor.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    vipartners: imageSharp(fluid: { originalName: { regex: "/vipartners.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    daniel: imageSharp(fluid: { originalName: { regex: "/daniel.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luis: imageSharp(fluid: { originalName: { regex: "/luis.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    cyrill: imageSharp(fluid: { originalName: { regex: "/cyrill.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }

    myke: imageSharp(fluid: { originalName: { regex: "/myke.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    paul: imageSharp(fluid: { originalName: { regex: "/paul.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luzius: imageSharp(fluid: { originalName: { regex: "/luzius.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    adrian: imageSharp(fluid: { originalName: { regex: "/adrian.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    elena: imageSharp(fluid: { originalName: { regex: "/elena.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
