import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Countries.scss';

const Argentina = () => {
  return (
    <Container className="country-container" style={{ marginLeft: '260px', padding: '20px' }}>
      <Row>
        <Col>
          <h1>Argentina</h1>
          <h2>Compliance and Anti-Money Laundering in Argentina</h2>

          <h3>Main Laws</h3>

          <h4>Law nº 25.246/2000</h4>
          <ul>
            <li>Establishes the foundations for the prevention and suppression of money laundering and terrorism financing in Argentina.</li>
            <li>Creates the Financial Information Unit (UIF) as the central body for combating suspicious activities.</li>
            <li>Defines obligated entities required to report suspicious operations, including banks, insurers, real estate companies, casinos, and others.</li>
          </ul>

          <h4>Law nº 26.683/2011</h4>
          <ul>
            <li>Amends and expands Law nº 25.246 to include terrorism financing as a crime.</li>
            <li>Imposes stricter rules for identifying final beneficiaries and monitoring financial transactions.</li>
          </ul>

          <h3>Rules of the Central Bank of the Republic of Argentina (BCRA)</h3>

          <h4>Communication "A" 6301 (2017)</h4>
          <ul>
            <li>Sets guidelines on money laundering and terrorism financing prevention for regulated entities, such as:</li>
            <ul>
              <li>Implementation of internal compliance programs (AML/CFT).</li>
              <li>Continuous monitoring of clients and transactions.</li>
              <li>Mandatory reporting of suspicious operations to UIF.</li>
            </ul>
          </ul>

          <h4>Communication "A" 6679 (2019)</h4>
          <ul>
            <li>Introduces parameters for risk assessment of clients and alignment with FATF/GAFI recommendations.</li>
            <li>Requires the use of technology to identify and monitor suspicious patterns.</li>
          </ul>

          <h3>Other Regulatory Bodies and Mechanisms</h3>

          <h4>Financial Information Unit (UIF)</h4>
          <ul>
            <li>Central body responsible for receiving, analyzing, and processing information on suspicious financial activities.</li>
            <li>Establishes specific rules and guidelines for obligated sectors.</li>
            <li>Works in cooperation with international financial intelligence agencies.</li>
          </ul>

          <h4>National Securities Commission (CNV)</h4>
          <ul>
            <li>Regulates and supervises the capital market, requiring AML/CFT policies from regulated entities.</li>
            <li>Main regulations:</li>
            <ul>
              <li>UIF Resolution nº 30/2017, which regulates money laundering prevention in the financial and capital markets.</li>
            </ul>
          </ul>

          <h4>Federal Administration of Public Revenues (AFIP)</h4>
          <ul>
            <li>Oversees high-value financial transactions and requires mandatory declarations for cross-border transactions.</li>
          </ul>

          <h3>Government Mechanisms</h3>

          <h4>Suspicious Activity Reports (SAR)</h4>
          <ul>
            <li>Obligated entities must report transactions deemed suspicious to UIF based on objective or subjective criteria.</li>
          </ul>

          <h4>Final Beneficiary Identification</h4>
          <ul>
            <li>Financial institutions must identify the final beneficiaries of accounts and transactions to prevent the use of opaque structures.</li>
          </ul>

          <h4>Cash Operations Monitoring</h4>
          <ul>
            <li>Cash transactions above ARS 300,000 (or equivalent in other currencies) must be declared to authorities.</li>
          </ul>

          <h4>International Value Transfers</h4>
          <ul>
            <li>Transactions above ARS 10,000 must be reported to UIF, including detailed information about senders and recipients.</li>
          </ul>

          <h4>International Agreements</h4>
          <ul>
            <li>Argentina is a member of FATF/GAFI and adheres to its 40 recommendations.</li>
            <li>Participates in legal and financial cooperation treaties with several countries.</li>
          </ul>

          <h3>Requirements, Duties, and Obligations of Acquirers and Issuers</h3>
          <ul>
            <li>Ensure compliance with anti-money laundering (AML) and counter-terrorism financing (CFT) regulations in their operations.</li>
            <li>Implement robust "Know Your Customer" (KYC) procedures to identify and verify clients.</li>
            <li>Monitor transactions in real-time to detect suspicious activities and report them to UIF.</li>
            <li>Adopt technology to track high-risk transactions and maintain compliance with reporting standards.</li>
            <li>Provide periodic training for employees on AML/CFT policies and obligations.</li>
            <li>Submit regular reports and declarations to regulatory authorities to ensure operational transparency.</li>
          </ul>

          <h3>Penalties for Non-Compliance</h3>
          <ul>
            <li>Administrative fines that can reach millions of pesos depending on severity and recurrence.</li>
            <li>Revocation of operating licenses for financial institutions.</li>
            <li>Criminal liability for directors, administrators, and employees involved.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Argentina;
