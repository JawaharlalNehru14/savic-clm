import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { FaRegQuestionCircle } from "react-icons/fa";
import AddAssocCSS from "./ConTypAgree.module.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const AddAssociationForm = ({
  saveAssociation,
  onCancel,
  deleteAssociation,
  formData: initialFormData,
  isEditMode,
}) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      AssociationName: "",
      AssociatedContractType: "",
      RelationType: "",
      AllowInheritance: false,
      AllowMultipleInstance: false,
      IsMandatory: false,
      DefinedByRule: false,
      AllowTwoWayLinkage: false,
      AllowPeerCreationWizard: false,
      UseCustomNomenclature: false,
      InlineAssociation: false,
      CopyAssociationDuringAmendment: false,
    }
  );
  // const [contractTypes, setContractTypes] = useState([]);

  // useEffect(() => {
  //   // Fetch contract types from the database using Axios
  //   const fetchContractTypes = async () => {
  //     try {
  //       const response = await axios.get("/api/contract-types"); // Replace with your actual API endpoint
  //       setContractTypes(response.data);
  //     } catch (error) {
  //       console.error("Error fetching contract types:", error);
  //     }
  //   };

  //   fetchContractTypes();
  // }, []);

  useEffect(() => {
    if (initialFormData !== null) {
      setFormData(initialFormData);
    }
  }, [initialFormData]);

  const handleSave = () => {
    saveAssociation(formData);
    console.log("Saved Successfully", formData);
  };

  // const handleCancel = () => {
  //   alert("Canceled Successfully")
  //   console.log("Canceled Successfully");
  // };
  const handleCancel = () => {
    const clearedFormData = Object.keys(formData).reduce((acc, key) => {
      if (typeof formData[key] === "boolean") {
        acc[key] = false;
      } else {
        acc[key] = "";
      }
      return acc;
    }, {});

    setFormData(clearedFormData);
    console.log("Cleared");
  };

  const handleDelete = () => {
    deleteAssociation(); // Call the deleteAssociation function
    // Additional logic if needed
    console.log("Deleted Successfully");
  };
  const handleUpdate = () => {
    alert("Updated Successfully");
    console.log("Updated Successfully");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Col lg={12}>
      <h5 className="fw-lighter mt-5">Association</h5>

      <Form className={`mt-4 ${AddAssocCSS.form1}`}>
        <Form.Group as={Row} className="mb-3" controlId="formAssociationName">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="4"
            md="5"
            xs="5"
          >
            ASSOCIATION NAME
          </Form.Label>
          <Col lg="1" md="1" xs="1">
            <Form.Label className={AddAssocCSS.addAssoFont}> ICM </Form.Label>
          </Col>

          <Col lg="7" md="6" xs="6">
            <Form.Control
              type=""
              placeholder=""
              name="AssociationName"
              // value={formData.AssociationName}
              // onChange={handleChange}
              value={formData.AssociationName}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formAssociatedContractType"
        >
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            ASSOCIATED CONTRACT TYPE
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <Form.Control
              as="select"
              name="AssociatedContractType"
              className="form-select"
              value={formData.AssociatedContractType}
              onChange={handleInputChange}
            >
              <option value="">Select Contract Type</option>
              <option value="Marketing">Marketing</option>
              <option value="Procurement">Procurement</option>
              <option value="Business">Business</option>
              <option value="Employment">Employment</option>
              <option value="Services">Services</option>
              {/* <option value="">Select Contract Type</option>
          {contractTypes.map((contractType) => (
            <option key={contractType.id} value={contractType.name}>
              {contractType.name}
            </option> */}
            </Form.Control>
          </Col>
        </Form.Group>
        <hr></hr>

        <Form.Group as={Row} className="mb-3" controlId="formRelationType">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            RELATION TYPE
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <Form.Control
              as="select"
              name="RelationType"
              className="form-select"
              value={formData.RelationType}
              onChange={handleInputChange}
            >
              <option value="">Select Relation Type</option>
              <option value="Parent">Parent</option>
              <option value="Child">Child</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAllowInhertiance">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            ALLOW INHERTIANCE
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              onstyle="success"
              offstyle="danger"
              id="AllowInheritanceSwitch"
              name="AllowInheritance"
              checked={formData.AllowInheritance}
              onChange={(value) =>
                handleToggleChange(value, "AllowInheritance")
              }
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formAllowMultipleInstance"
        >
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            ALLOW MULTIPLE INSTANCE <FaRegQuestionCircle />
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="AllowMultipleInstanceSwitch"
              name="AllowMultipleInstance"
              checked={formData.AllowMultipleInstance}
              onChange={(value) =>
                handleToggleChange(value, "AllowMultipleInstance")
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formIsMandatory">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            IS MANDATORY <FaRegQuestionCircle />
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="IsMandatorySwitch"
              name="IsMandatory"
              checked={formData.IsMandatory}
              onChange={(value) => handleToggleChange(value, "IsMandatory")}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDefinedByRule">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            DEFINED BY RULE
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="DefinedByRuleSwitch"
              name="DefinedByRule"
              checked={formData.DefinedByRule}
              onChange={(value) => handleToggleChange(value, "DefinedByRule")}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formAllowTwoWayLinkage"
        >
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            ALLOW TWO-WAY LINKAGE
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="AllowTwoWayLinkageSwitch"
              name="AllowTwoWayLinkage"
              checked={formData.AllowTwoWayLinkage}
              onChange={(value) =>
                handleToggleChange(value, "AllowTwoWayLinkage")
              }
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formAllowPeerCreationWizard"
        >
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            ALLOW PEER CREATION WIZARD <FaRegQuestionCircle />
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="AllowPeerCreationWizardSwitch"
              name="AllowPeerCreationWizard"
              checked={formData.AllowPeerCreationWizard}
              onChange={(value) =>
                handleToggleChange(value, "AllowPeerCreationWizard")
              }
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formUseCustomNomenclature"
        >
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            USE CUSTOM NOMENCLATURE <FaRegQuestionCircle />
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              // checked={false}
              onstyle="success"
              offstyle="danger"
              id="UseCustomNomenclatureSwitch"
              name="UseCustomNomenclature"
              checked={formData.UseCustomNomenclature}
              onChange={(value) =>
                handleToggleChange(value, "UseCustomNomenclature")
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formInlineAssociation">
          <Form.Label
            className={AddAssocCSS.addAssoFont}
            column
            lg="5"
            md="6"
            xs="6"
          >
            INLINE ASSOCIATION
          </Form.Label>
          <Col lg="7" md="6" xs="6">
            <BootstrapSwitchButton
              //  checked={false}
              onstyle="success"
              offstyle="danger"
              id="InlineAssociationSwitch"
              name="InlineAssociation"
              checked={formData.InlineAssociation}
              onChange={(value) =>
                handleToggleChange(value, "InlineAssociation")
              }
            />
          </Col>
        </Form.Group>

        {isEditMode ? (
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formCopyAssociationDuringAmendment"
          >
            <Form.Label
              className={AddAssocCSS.addAssoFont}
              column
              lg="5"
              md="6"
              xs="6"
            >
              COPY ASSOCIATION DURING AMENDMENT <FaRegQuestionCircle />
            </Form.Label>
            <Col lg="7" md="6" xs="6">
              <BootstrapSwitchButton
                //  checked={false}
                onstyle="success"
                offstyle="danger"
                id="CopyAssociationDuringAmendmentSwitch"
                name="CopyAssociationDuringAmendment"
                checked={formData.CopyAssociationDuringAmendment}
                onChange={(value) =>
                  handleToggleChange(value, "CopyAssociationDuringAmendment")
                }
              />
            </Col>
            <br />
            <br />
            <>
              <Col xs={4} md={2} lg={2} className=" ">
                <Button variant="success" onClick={handleUpdate}>
                  Update
                </Button>
              </Col>

              <Col xs={4} md={2} lg={2} className=" ">
                <Button variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </Col>
            </>
          </Form.Group>
        ) : (
          <Form.Group as={Row} className="mb-3">
            <>
              <Col xs={4} md={2} lg={2} className=" ">
                <Button variant="success" onClick={handleSave}>
                  Save
                </Button>
              </Col>

              <Col xs={4} md={2} lg={2} className=" ">
                <Button variant="danger" onClick={handleCancel}>
                  Clear
                </Button>
              </Col>
            </>
          </Form.Group>
        )}
      </Form>
    </Col>
  );
};

export default AddAssociationForm;
