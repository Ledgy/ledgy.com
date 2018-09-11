// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';

export default () => (
  <div className="row gap-y">
    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <li><Trans>Funding Round Modeling</Trans></li>
          <li><Trans>Full Transaction History</Trans></li>
          <li><Trans>Consistency Checks</Trans></li>
          <li><Trans>Transaction Filters</Trans></li>
          <li><Trans>Convertible Loans</Trans></li>
          <li><Trans>Stock Split</Trans></li>
          <li><Trans>Unlimited Share Classes</Trans></li>
          <li><Trans>Numbered Shares</Trans></li>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <li><Trans>Employee Options</Trans></li>
          <li><Trans>Phantom Programs</Trans></li>
          <li><Trans>Approved Capital Pools</Trans></li>
          <li><Trans>Vesting Schedules</Trans></li>
          <li><Trans>Fully-diluted View</Trans></li>
          <li><Trans>Multiple Administrators</Trans></li>
          <li><Trans>Read-only Access</Trans></li>
          <li><Trans>Investor Portfolio</Trans></li>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <li><Trans>Secure Document Storage</Trans></li>
          <li><Trans>Attach Documents to Transactions</Trans></li>
          <li><Trans>Spreadsheet Import</Trans></li>
          <li><Trans>Customizable PDF Reports</Trans></li>
          <li><Trans>CSV Export</Trans></li>
          <li><Trans>Send Holding Confirmations</Trans></li>
          <li><Trans>Two-Factor Authentication</Trans></li>
          <li><Trans>Audit Trails</Trans></li>
        </ul>
      </div>
    </div>
  </div>
);
