import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Countries.scss';

const Colombia = () => {
  return (
    <Container className="country-container" style={{ marginLeft: '260px', padding: '20px' }}>
      <Row>
        <Col>
          <h1>Colombia</h1>
          <h2>Compliance and Anti-Money Laundering in Colombia</h2>

          <h3>Main Laws</h3>

          <h4>Law nº 1908/2018 (Anti-Corruption Law)</h4>
          <ul>
            <li>Defines measures to combat criminal organizations and money laundering.</li>
            <li>Establishes requirements for monitoring financial and commercial activities that could be used for money laundering.</li>
          </ul>

          <h4>Law nº 1121/2006 (Law Against Terrorism Financing)</h4>
          <ul>
            <li>Strengthens the fight against terrorism financing, complementing money laundering regulations.</li>
            <li>Requires financial institutions to apply rigorous controls to identify and report suspicious transactions.</li>
          </ul>

          <h4>Colombian Penal Code (Articles 323 and 345)</h4>
          <ul>
            <li>Criminalizes money laundering and establishes sanctions for related financial crimes.</li>
            <li>Provides severe penalties for individuals or entities involved in asset laundering.</li>
          </ul>

          <h4>Decree nº 663/1993 (Organic Statute of the Financial System)</h4>
          <ul>
            <li>Regulates financial system entities and establishes compliance obligations for anti-money laundering and counter-terrorism financing (AML/CFT).</li>
          </ul>

          <h3>Regulatory and Supervisory Bodies</h3>

          <h4>Financial Information and Analysis Unit (UIAF)</h4>
          <ul>
            <li>Central body responsible for receiving and analyzing Suspicious Activity Reports (SARs) from obligated institutions.</li>
            <li>Coordinates international cooperation on money laundering and terrorism financing.</li>
            <li>Issues specific guidelines for economic sectors regarding AML/CFT.</li>
          </ul>

          <h4>Financial Superintendency of Colombia (SFC)</h4>
          <ul>
            <li>Regulates and supervises banks, insurers, and other financial entities.</li>
            <li>Requires financial institutions to implement Risk Management Systems for Money Laundering and Terrorism Financing (SARLAFT).</li>
          </ul>

          <h4>National Directorate of Taxes and Customs (DIAN)</h4>
          <ul>
            <li>Monitors movements of goods and money, including international transactions.</li>
            <li>Requires mandatory declarations for international transfers above established limits.</li>
          </ul>

          <h3>Specific Rules</h3>

          <h4>External Circular nº 029/2014 (SFC)</h4>
          <ul>
            <li>Sets guidelines for the Risk Management System for Money Laundering and Terrorism Financing (SARLAFT).</li>
            <li>Mandates that regulated entities adopt "Know Your Customer" (KYC) policies and procedures to monitor transactions.</li>
          </ul>

          <h4>Decree nº 1074/2015 (Unified Decree of the Commerce Sector)</h4>
          <ul>
            <li>Regulates economic activities vulnerable to money laundering, such as real estate, jewelry, and casinos.</li>
            <li>Obligates these entities to report suspicious transactions to UIAF.</li>
          </ul>

          <h4>Resolution nº 060/2015 (DIAN)</h4>
          <ul>
            <li>Mandates the declaration of cash movements and international transfers above USD 10,000.</li>
          </ul>

          <h3>Requirements, Duties, and Obligations of Acquirers and Issuers in Colombia</h3>
          <ul>
            <li>Ensure compliance with anti-money laundering (AML) and counter-terrorism financing (CFT) regulations, including SARLAFT requirements.</li>
            <li>Implement "Know Your Customer" (KYC) procedures to identify and verify customers, ensuring proper risk classification (low, medium, high).</li>
            <li>Monitor transactions in real-time to identify suspicious patterns and report them to the Financial Information and Analysis Unit (UIAF).</li>
            <li>Adopt robust systems to track high-risk operations and ensure compliance with reporting thresholds.</li>
            <li>Submit mandatory reports, including Suspicious Activity Reports (SARs), to regulatory authorities such as UIAF and SFC.</li>
            <li>Provide AML/CFT training to employees, emphasizing Colombian regulations and sector-specific guidelines.</li>
            <li>Maintain detailed records of final beneficiaries and ensure transparency in financial operations.</li>
            <li>Comply with international transfer reporting requirements for transactions exceeding USD 10,000.</li>
          </ul>

          <h3>Government Mechanisms</h3>

          <h4>Suspicious Activity Reports (SARs)</h4>
          <ul>
            <li>Obligated entities must report financial activities deemed suspicious to UIAF.</li>
          </ul>

          <h4>Cash Transaction Reports</h4>
          <ul>
            <li>Movements exceeding 10 million Colombian pesos must be reported.</li>
          </ul>

          <h4>Final Beneficiary Identification</h4>
          <ul>
            <li>Financial institutions are required to identify and verify the final beneficiaries of accounts and operations.</li>
          </ul>

          <h4>International Value Transfers</h4>
          <ul>
            <li>Transactions exceeding USD 10,000 must be reported to DIAN.</li>
          </ul>

          <h4>Risk Classification and Monitoring</h4>
          <ul>
            <li>Financial institutions must conduct continuous risk analyses of clients and operations, implementing reinforced measures for high-risk profiles.</li>
          </ul>

          <h3>International Agreements</h3>
          <ul>
            <li>Colombia is a member of GAFILAT (Financial Action Task Force of Latin America) and adheres to FATF's 40 Recommendations.</li>
            <li>Participates in regional and international initiatives for financial information exchange and combating organized crime.</li>
          </ul>

          <h3>Penalties for Non-Compliance</h3>
          <ul>
            <li>Administrative fines imposed by SFC, potentially reaching millions of pesos.</li>
            <li>Revocation of operating licenses for financial or commercial entities in cases of recurrence.</li>
            <li>Criminal liability for administrators and managers for negligence or facilitation of financial crimes.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Colombia;
