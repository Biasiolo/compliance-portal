import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Countries.scss';

const Brazil = () => {
  return (
    <Container className="country-container" >
      <Row>
        <Col>
          <h1>Brazil</h1>
          <h2>Compliance and Anti-Money Laundering in Brazil</h2>
          
          <h3>Main Laws</h3>
          
          <h4>Law nº 9.613/1998</h4>
          <ul>
            <li>Establishes the crimes of money laundering or concealment of assets, rights, and values.</li>
            <li>Creates the Financial Activities Control Council (COAF), now known as the Financial Intelligence Unit (UIF), as the body responsible for monitoring suspicious activities.</li>
            <li>Requires designated individuals and entities (such as financial institutions, insurers, and brokers) to report suspicious operations.</li>
          </ul>

          <h4>Law nº 12.683/2012</h4>
          <ul>
            <li>Expands the range of predicate offenses for money laundering, making the legislation more comprehensive.</li>
            <li>Establishes administrative sanctions, such as fines and suspension of activities.</li>
          </ul>

          <h4>Law nº 13.260/2016 (Anti-Terrorism Law)</h4>
          <ul>
            <li>Regulates the crime of financing terrorism, directly related to combating money laundering.</li>
          </ul>

          <h3>Rules of the Central Bank of Brazil (BCB)</h3>

          <h4>Circular nº 3.978/2020</h4>
          <ul>
            <li>Sets policies, procedures, and internal controls for preventing money laundering and terrorism financing (PLD/FT) in regulated institutions.</li>
            <li>Requires financial institutions to implement robust compliance programs, including:</li>
            <ul>
              <li>Risk profile analysis of clients (KYC - Know Your Customer).</li>
              <li>Continuous monitoring of operations.</li>
              <li>Reporting suspicious transactions to COAF.</li>
            </ul>
          </ul>

          <h4>Resolution nº 4.595/2017</h4>
          <ul>
            <li>Defines governance criteria related to money laundering prevention, requiring staff training and periodic audits.</li>
          </ul>

          <h3>Other Regulatory Bodies and Mechanisms</h3>

          <h4>Financial Intelligence Unit (UIF)</h4>
          <ul>
            <li>Responsible for receiving, analyzing, and identifying suspicious occurrences of illicit activities reported by obligated entities.</li>
            <li>Collaborates with international financial intelligence units and FATF/GAFI.</li>
          </ul>

          <h4>Securities and Exchange Commission (CVM)</h4>
          <ul>
            <li>Requires companies in the capital market to have specific PLD/FT policies.</li>
            <li>Relevant regulations:</li>
            <ul>
              <li>Instruction CVM nº 617/2019, which regulates money laundering prevention in the securities market.</li>
            </ul>
          </ul>

          <h4>Brazilian Federal Revenue Service (RFB)</h4>
          <ul>
            <li>Oversees financial transactions and high-value goods, such as jewelry and artworks.</li>
            <li>Requires the declaration of financial operations in the Financial Movement Information System (SISCOMEX and SISCOAF).</li>
          </ul>

          <h3>Requirements, Duties, and Obligations of Acquirers and Issuers</h3>
          <ul>
            <li>Ensure compliance with anti-money laundering (AML) and counter-terrorism financing (CFT) regulations in their operations.</li>
            <li>Maintain effective "Know Your Customer" (KYC) processes to identify and verify merchants and customers.</li>
            <li>Monitor transactions in real-time to detect suspicious activities and flag them to relevant authorities, such as COAF.</li>
            <li>Implement robust systems to track high-risk operations and ensure compliance with applicable thresholds and reporting standards.</li>
            <li>Provide regular training for employees on AML/CFT policies and procedures.</li>
            <li>Submit regular reports and declarations to regulatory bodies, ensuring full transparency in financial operations.</li>
          </ul>

          <h3>Government Mechanisms</h3>

          <h4>Declaration of Relevant Operations</h4>
          <ul>
            <li>Financial transactions above BRL 50,000 must be reported to COAF.</li>
            <li>International transfers exceeding BRL 10,000 also require declaration.</li>
          </ul>

          <h4>Customer and Beneficiary Identification</h4>
          <ul>
            <li>Financial institutions must identify and register the final beneficiary in their operations to avoid opaque structures that may hide the true owners.</li>
          </ul>

          <h4>International Agreements</h4>
          <ul>
            <li>Brazil is a member of FATF/GAFI and follows its recommendations.</li>
            <li>Participates in cooperation treaties on money laundering with several countries.</li>
          </ul>

          <h3>Penalties for Non-Compliance</h3>
          <ul>
            <li>Fines of up to 20% of annual gross revenue, limited to BRL 20 million.</li>
            <li>Suspension or interdiction of activities.</li>
            <li>Criminal liability for managers and administrators.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Brazil;
