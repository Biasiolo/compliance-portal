import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Countries.scss';

const Mexico = () => {
  return (
    <Container className="country-container">
      <Row>
        <Col>
          <h1>Mexico</h1>
          <h2>Compliance and Anti-Money Laundering in Mexico</h2>

          <h3>Main Laws</h3>

          <h4>Federal Law for the Prevention and Identification of Operations with Illicit Resources (LFPIORPI)</h4>
          <ul>
            <li>Enacted in 2012, it is the main anti-money laundering legislation.</li>
            <li>Requires individuals and legal entities to report relevant and suspicious financial activities to the Financial Intelligence Unit (UIF).</li>
            <li>Regulates vulnerable activities, such as real estate transactions, trading of precious metals, gambling, and international transfers.</li>
          </ul>

          <h4>Federal Penal Code</h4>
          <ul>
            <li>Defines and penalizes crimes related to money laundering.</li>
            <li>Establishes sanctions for activities linked to organized crime and terrorism financing.</li>
          </ul>

          <h4>Credit Institutions Law</h4>
          <ul>
            <li>Regulates the activities of financial institutions and establishes norms for customer identification (KYC) and monitoring of suspicious operations.</li>
          </ul>

          <h3>Rules of the Bank of Mexico (Banxico)</h3>

          <h4>Circular 3/2012</h4>
          <ul>
            <li>Requires financial institutions to adopt measures to prevent and detect operations with illicit resources.</li>
            <li>Mandates reporting of significant transactions exceeding MXN 500,000.</li>
          </ul>

          <h4>Rules for Financial Entities</h4>
          <ul>
            <li>Establishes criteria for implementing policies to prevent money laundering and terrorism financing (AML/CFT).</li>
            <li>Includes risk classification of clients and reinforced measures for high-risk clients.</li>
          </ul>

          <h3>Other Regulatory Bodies and Mechanisms</h3>

          <h4>Financial Intelligence Unit (UIF)</h4>
          <ul>
            <li>Centralized body for combating money laundering and terrorism financing.</li>
            <li>Receives, analyzes, and investigates reports of suspicious activities sent by obligated entities.</li>
            <li>Collaborates with international organizations like FATF/GAFI.</li>
          </ul>

          <h4>National Banking and Securities Commission (CNBV)</h4>
          <ul>
            <li>Supervises financial institutions to ensure compliance with AML/CFT regulations.</li>
            <li>Requires periodic audits and detailed reports on financial operations.</li>
          </ul>

          <h4>Tax Administration Service (SAT)</h4>
          <ul>
            <li>Oversees economic activities considered vulnerable.</li>
            <li>Requires the declaration of cash transactions and international transfers above established limits.</li>
          </ul>

          <h3>Requirements, Duties, and Obligations of Acquirers and Issuers in Mexico</h3>
          <ul>
            <li>Ensure compliance with the Federal Law for the Prevention and Identification of Operations with Illicit Resources (LFPIORPI) and other AML/CFT regulations.</li>
            <li>Implement "Know Your Customer" (KYC) protocols to identify and verify customers and merchants, including risk classification (high, medium, low).</li>
            <li>Monitor transactions in real-time, focusing on activities exceeding MXN 500,000 or deemed suspicious under subjective criteria.</li>
            <li>Use technology and systems to detect and prevent operations involving illicit resources.</li>
            <li>Report all suspicious activities (SARs) and relevant transactions to the Unidad de Inteligencia Financiera (UIF), regardless of the amount involved.</li>
            <li>Conduct periodic audits and submit reports to the Comisión Nacional Bancaria y de Valores (CNBV) and other authorities.</li>
            <li>Provide AML/CFT training to employees, emphasizing compliance with Mexican regulations.</li>
            <li>Maintain detailed records of final beneficiaries and ensure transparency in financial operations.</li>
          </ul>

          <h3>Penalties for Non-Compliance</h3>
          <ul>
            <li>Administrative fines applied by SAT or CNBV, which can reach millions of pesos.</li>
            <li>Suspension or cancellation of operating licenses for financial institutions.</li>
            <li>Criminal liability for administrators, directors, and employees who facilitated or neglected illicit practices.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Mexico;
