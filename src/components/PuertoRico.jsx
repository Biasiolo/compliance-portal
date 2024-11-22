import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Countries.scss';

const PuertoRico = () => {
  return (
    <Container className="country-container">
      <Row>
        <Col>
          <h1>Puerto Rico</h1>
          <h2>Compliance and Anti-Money Laundering in Puerto Rico</h2>

          <h3>General Context</h3>
          <p>
            Puerto Rico, as an unincorporated territory of the United States, follows federal U.S. legislation for 
            anti-money laundering (AML) and counter-terrorism financing (CFT). Financial institutions and other obligated 
            entities in Puerto Rico are subject to the same laws and regulations applicable in the United States, in addition 
            to local regulations that complement this legal framework.
          </p>

          <h3>Main Laws (Federal)</h3>

          <h4>Bank Secrecy Act (BSA)</h4>
          <ul>
            <li>Requires financial institutions to maintain detailed records of financial transactions and report suspicious activities and cash transactions exceeding $10,000.</li>
            <li>Mandates the implementation of specific compliance programs for AML/CFT.</li>
          </ul>

          <h4>USA PATRIOT Act (2001)</h4>
          <ul>
            <li>Expands BSA requirements by obligating financial institutions to conduct more rigorous customer verifications (KYC).</li>
            <li>Includes measures against terrorism financing, such as the blocking of assets of individuals or entities on sanctions lists.</li>
          </ul>

          <h4>Anti-Money Laundering Act (2020)</h4>
          <ul>
            <li>Modernizes and updates the BSA, including provisions for greater transparency regarding beneficial ownership of corporate entities.</li>
            <li>Introduces stricter penalties for non-compliance.</li>
          </ul>

          <h4>Puerto Rico International Financial Center Regulatory Act (Law 273/2012)</h4>
          <ul>
            <li>Regulates the operation of international financial institutions in Puerto Rico, requiring compliance with AML/CFT standards aligned with the BSA and PATRIOT Act.</li>
          </ul>

          <h3>Regulatory Bodies and Oversight</h3>

          <h4>Office of the Commissioner of Financial Institutions (OCIF)</h4>
          <ul>
            <li>Regulates local financial institutions in Puerto Rico.</li>
            <li>Requires banks, insurers, and other financial entities to implement AML/CFT policies, including transaction monitoring and mandatory reporting.</li>
            <li>Ensures compliance of local financial institutions with the BSA and other federal laws.</li>
          </ul>

          <h4>Financial Crimes Enforcement Network (FinCEN)</h4>
          <ul>
            <li>U.S. federal agency that receives financial transaction reports and suspicious activity reports from institutions in Puerto Rico.</li>
            <li>Mandates the submission of Suspicious Activity Reports (SARs) and Cash Transaction Reports (CTRs).</li>
          </ul>

          <h4>Federal Reserve System and FDIC</h4>
          <ul>
            <li>Regulates and supervises commercial banks operating in Puerto Rico.</li>
            <li>Imposes compliance requirements and periodic audits.</li>
          </ul>

          <h4>Puerto Rico Department of Treasury (Departamento de Hacienda)</h4>
          <ul>
            <li>Monitors local financial movements and applies complementary regulations for cash operations and taxes.</li>
          </ul>

          <h3>Government Mechanisms</h3>

          <h4>Suspicious Activity Reports (SARs)</h4>
          <ul>
            <li>Must be submitted to FinCEN by financial institutions whenever suspicious transactions are identified.</li>
          </ul>

          <h4>Cash Transaction Reports (CTRs)</h4>
          <ul>
            <li>Cash transactions exceeding $10,000 must be reported to FinCEN.</li>
          </ul>

          <h4>Identification of Beneficial Owners</h4>
          <ul>
            <li>Financial institutions are required to identify and verify the beneficial owners of all accounts and operations.</li>
          </ul>

          <h4>Monitoring of International Financial Institutions</h4>
          <ul>
            <li>International financial institutions headquartered in Puerto Rico, as regulated by Law 273/2012, must maintain robust compliance programs aligned with BSA regulations.</li>
          </ul>

          <h4>Compliance with International Sanctions</h4>
          <ul>
            <li>Puerto Rico fully adopts U.S. Treasury Department sanctions, including OFAC (Office of Foreign Assets Control) lists.</li>
          </ul>

          <h3>Requirements, Duties, and Obligations of Acquirers and Issuers in Puerto Rico</h3>
          <ul>
            <li>Ensure compliance with the Bank Secrecy Act (BSA), USA PATRIOT Act, and local AML/CFT regulations.</li>
            <li>Implement "Know Your Customer" (KYC) procedures to identify and verify customers, ensuring risk-based classification.</li>
            <li>Monitor transactions in real-time to detect suspicious patterns and report them to FinCEN via SARs.</li>
            <li>Adopt advanced systems to ensure compliance with reporting thresholds and maintain transparency in financial operations.</li>
            <li>Submit regular reports and declarations to OCIF, FinCEN, and other relevant authorities.</li>
            <li>Provide periodic AML/CFT training to employees, emphasizing both federal and local regulations.</li>
            <li>Maintain detailed records of final beneficiaries for all accounts and transactions.</li>
            <li>Ensure full compliance with OFAC sanctions and U.S. Treasury regulations.</li>
          </ul>

          <h3>Penalties for Non-Compliance</h3>
          <ul>
            <li>Federal fines exceeding millions of dollars for violations of the BSA or USA PATRIOT Act.</li>
            <li>Revocation of operating licenses for institutions failing to comply with local or federal regulations.</li>
            <li>Criminal liability for managers and employees involved in negligence or facilitation of illicit activities.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PuertoRico;
