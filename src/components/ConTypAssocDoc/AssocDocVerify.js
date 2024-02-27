import React from "react";
import { Form } from "react-bootstrap";
import AssocDocCSS from "./ConTypAssocDoc.module.css";
import { Row, Col } from "react-bootstrap";

const AssocDocVerify = ({ data }) => {
  /*  alert("Test = " + JSON.stringify(data));
  console.log(JSON.stringify(data)); */
  return (
    <Row className={AssocDocCSS.verifyalign}>
      <Col lg={1}></Col>
      <Col lg={9}>
        <Form className={`mt-3 ${AssocDocCSS.verifyFormAlign}`}>
          <Form.Group as={Row} controlId="formContractTypeName">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Contract Type Name
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.ContractTypeName}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formDescription">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Description
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.Description}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          {/* Add more Form.Group for other fields in a similar manner */}

          <Form.Group as={Row} controlId="formAggrConstraint">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Constraint
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.Constraint}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formAllowDocumentAssembly">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              AllowDocumentAssembly
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.AllowDocumentAssembly}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formAllowDocumentUpload">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Allow Document Upload
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.AllowDocumentUpload}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEnableApprovalWorkflow">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Enable Approval Work flow
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.EnableApprovalWorkflow}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formShowFileDropZone">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Show File Drop Zone
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.ShowFileDropZone}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTwoColumnAttributeLayout">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Two Column Attribute Layout
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.TwoColumnAttributeLayout}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEnableBulkProcessing">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Enable Bulk Processing
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.EnableBulkProcessing}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formSelectedAttributes">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Selected Attributes
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.SelectedAttributes.join(", ")}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTeamMembers">
            <Form.Label
              column
              lg={5}
              sm={2}
              className={AssocDocCSS.formLabAlign}
            >
              Team Members
            </Form.Label>
            <Col lg={7} sm={10}>
              <Form.Control
                as="textarea"
                plaintext
                readOnly
                defaultValue={data.TeamMembers.join("\n")}
                style={{
                  whiteSpace: "pre-line",
                  width: "80%",
                  height: "150%",
                }}
                className={AssocDocCSS.formctrlAlign}
              />
            </Col>
          </Form.Group>
        </Form>
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
};

export default AssocDocVerify;
