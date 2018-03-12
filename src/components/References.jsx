// @flow

import React from 'react';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';

const Partner = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px' }} className="my-2">
    <Img {...img} alt={name} style={{ overflow: 'visible', margin: 0 }} />
  </div>
);

const References = ({ data }: Props) => (
  <section className="section" id="testimonials">
    <header className="section-header mb-40">
      <small><Trans>Testimonials</Trans></small>
      <p className="lead">
        <Trans>
          Switzerland’s best companies manage their cap table with Ledgy.
        </Trans>
      </p>
    </header>

    <div className="partner mx-auto" style={{ maxWidth: '800px' }}>
      <Partner img={data.testingtime} name="TestingTime" />
      <Partner img={data.quitt} name="quitt.ch" />
      <Partner img={data.cryptofund} name="CryptoFund" />
      <Partner img={data.frontify} name="Frontify" />
      <Partner img={data.sherpany} name="Sherpany" />
      <Partner img={data.apiax} name="Apiax" />
      <Partner img={data.allthings} name="Allthings Technologies" />
      <Partner img={data.farmy} name="Farmy" />
    </div>

  </section>
);

export default References;
