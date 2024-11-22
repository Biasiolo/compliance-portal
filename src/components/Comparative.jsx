import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import '../styles/Countries.scss';

const Comparative = () => {
  const comparisonData = [
    {
      mechanism: "AML/CFT Compliance Programs",
      brazil: "Mandatory, aligned with BCB regulations (Circular nº 3.978/2020).",
      argentina: "Mandatory, regulated by UIF and CNV (e.g., Resolution 30/2017).",
      mexico: "Required by LFPIORPI, supervised by UIF and CNBV.",
      colombia: "Required via SARLAFT, enforced by SFC.",
      puertoRico: "Aligned with BSA, overseen by OCIF and FinCEN."
    },
    {
      mechanism: "Know Your Customer (KYC)",
      brazil: "Mandatory for customer profiling and risk assessment.",
      argentina: "Mandatory for customer risk classification.",
      mexico: "Strictly enforced with enhanced due diligence for high-risk clients.",
      colombia: "Required as part of SARLAFT for customer risk management.",
      puertoRico: "Aligned with USA PATRIOT Act for client verification."
    },
    {
      mechanism: "Suspicious Activity Reports (SARs)",
      brazil: "Reported to UIF (former COAF) for suspicious transactions.",
      argentina: "Reported to UIF for subjective or objective suspicious activities.",
      mexico: "Submitted to UIF for all suspicious financial transactions.",
      colombia: "Mandatory submission to UIAF for flagged activities.",
      puertoRico: "Filed with FinCEN for any suspected illicit operations."
    },
    {
      mechanism: "Cash Transaction Reports (CTRs)",
      brazil: "Required for transactions above BRL 50,000.",
      argentina: "Required for transactions above ARS 300,000.",
      mexico: "Mandatory for transactions exceeding MXN 500,000.",
      colombia: "Mandatory for cash operations above 10 million pesos.",
      puertoRico: "Mandatory for cash transactions exceeding $10,000."
    },
    {
      mechanism: "Final Beneficiary Identification",
      brazil: "Mandatory to identify and verify beneficiaries.",
      argentina: "Required to prevent opaque structures.",
      mexico: "Enforced under LFPIORPI and UIF regulations.",
      colombia: "Integral part of SARLAFT processes.",
      puertoRico: "Mandatory under AML Act and FinCEN guidelines."
    },
    {
      mechanism: "Sanctions for Non-Compliance",
      brazil: "Fines up to BRL 20 million and criminal liability.",
      argentina: "High fines and license revocation for repeated violations.",
      mexico: "Federal fines and suspension of operating licenses.",
      colombia: "Significant fines and cancellation of licenses for repeated offenses.",
      puertoRico: "Federal fines exceeding millions and criminal liability."
    }
  ];

  return (
    <Container className="country-container mt-5 align-items-center">
      <Row>
        <Col>
          <h1>Comparative Analysis</h1>
          <h2>Comparing AML/CFT Mechanisms Across Countries</h2>
          <Table striped bordered hover responsive className="mt-4">
            <thead>
              <tr>
                <th>Mechanism</th>
                <th>Brazil</th>
                <th>Argentina</th>
                <th>Mexico</th>
                <th>Colombia</th>
                <th>Puerto Rico</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} >
                  <td className='mec'>{item.mechanism}</td>
                  <td>{item.brazil}</td>
                  <td>{item.argentina}</td>
                  <td>{item.mexico}</td>
                  <td>{item.colombia}</td>
                  <td>{item.puertoRico}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Comparative;
