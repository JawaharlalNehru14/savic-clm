import React, { useEffect, useRef, useState } from "react";
import Switch from "react-switch";
import { FaRegQuestionCircle } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import AgreeDocCSS from "./ConTypAgree.module.css";
import { Row, Col } from "react-bootstrap";

//**** const Aggreement = (props) => {****/
const AggreementDtl = React.forwardRef((props, ref) => {
  const refValue = useRef();
  const [errors, setErrors] = useState({}); //**** */

  const SwitchStyle = {
    onColor: "#008000",
    offColor: "#FF0000",
    onHandleColor: "#FFFFFF",
    offHandleColor: "#FFFFFF",
    handleDiameter: 20,
    uncheckedIcon: false,
    checkedIcon: false,
  };

  const [formData, setFormData] = useState({
    ContractTypeName: "",
    ContractTypeid: "",
    Description: "",
    Category: "",
    AllowThirdPartyPaper: false,
    QRCode: false,
    AllowCopywithAssociations: false,
    TwoColumnAttributeLayout: false,
    EnableCollabration: false,
    EnableAutoSupersede: false,
    ExpandDropdownonMouseHover: false,
  });

  useEffect(() => {
    setFormData(props.data);
    return () => {};
  }, [formData]);

  //*********** */
  const handleFormSubmit = (e) => {
    props.validateForm(formData, props.validationSchema);
  };

  // ******Forward the ref to the parent component*******/
  React.useImperativeHandle(ref, () => ({
    handleFormSubmit,
    setErrors,
  }));
  //*************************** */
  const handleBlur = async (fieldName) => {
    try {
      await props
        .fieldValidation("text", fieldName)
        .validate({ [fieldName]: formData[fieldName] }, { abortEarly: false });
      // Clear the error message for the field on successful validation
      setErrors({
        ...errors,
        [fieldName]: null,
      });
    } catch (error) {
      // Set the error message for the field on validation failure

      setErrors({
        ...errors,
        [fieldName]: "",
      });
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    refValue.current = formData;
    props.onChange(name, value);
  };

  const handleToggleChange = (value, object, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    refValue.current = formData;
    props.onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Row className="mt-lg-4 mt-2 mt-md-3 ">
        <Col lg={1} className=" "></Col>
        <Col md={4} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Contract Type Name </h4>
        </Col>

        <Col md={8} lg={4} className=" mb-2 mb-lg-0">
          <FloatingLabel
            controlId="floatingInput"
            // label="Please enter Contract type name"
            className="mb-lg-2 mb-1"
          >
            <Form.Control
              type="text" // Add type attribute as 'text'
              placeholder="contracttypename" // Add placeholder
              name="ContractTypeName" // Add a name attribute
              value={formData.ContractTypeName}
              onChange={handleInputChange}
              isInvalid={!!errors.ContractTypeName} // ********/
              onBlur={() => handleBlur("ContractTypeName")} // ********/
            />
            {/******* */}
            <Form.Control.Feedback type="invalid">
              {errors.ContractTypeName}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
        <Col lg={4} className=" "></Col>
      </Row>

      {/*<Row>
        <Col lg={1} className=" "></Col>
        <Col md={4} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Contract Type Code </h4>
        </Col>

        <Col md={8} lg={4} className=" mb-2 mb-lg-0 ">
          <>
            <FloatingLabel
              controlId="floatingInput"
              //label="Auto Generated"
              className="mb-3"
            >
              <Form.Control
                type="text" // Add type attribute as 'text'
                placeholder="ContractTypeid" // Add placeholder
                name="ContractTypeid" // Add a name attribute
                value={formData.ContractTypeid}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </>
        </Col>

        <Col lg={4} className=" "></Col>
  </Row>*/}

      <Row>
        <Col lg={1} className=" "></Col>
        <Col md={4} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Description </h4>
        </Col>

        <Col md={8} lg={4} className=" mb-2 mb-lg-0">
          <>
            <FloatingLabel
              controlId="floatingInput"
              //label="Please enter Contract type description"
              className="mb-3"
            >
              <Form.Control
                type="" // Add type attribute as 'text'
                placeholder="Description" // Add placeholder
                name="Description" // Add a name attribute
                value={formData.Description}
                onChange={handleInputChange}
                isInvalid={!!errors.Description}
                onBlur={() => handleBlur("Description")}
                as="textarea"
                style={{ height: "80px" }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.Description}
              </Form.Control.Feedback>
            </FloatingLabel>
          </>
        </Col>

        <Col lg={4} className=" "></Col>
      </Row>

      <Row>
        <Col lg={1} className=" "></Col>
        <Col md={4} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Category </h4>
        </Col>

        <Col md={8} lg={4} className="  mb-2 mb-lg-0">
          <FloatingLabel>
            <Form.Select
              type="text" // Add type attribute as 'text'
              //placeholder="Category" // Add placeholder
              name="Category" // Add a name attribute
              value={formData.Category}
              onChange={handleInputChange}
            >
              <option value="1">Default</option>
              <option value="2">Master Data Field </option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className="">
          <h4 className={AgreeDocCSS.AgreeFont}> Allow Third Party Paper </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="AllowThirdPartyPaper"
              name="AllowThirdPartyPaper"
              onChange={(value) =>
                handleToggleChange(value, formData, "AllowThirdPartyPaper")
              }
              checked={formData.AllowThirdPartyPaper}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.AllowThirdPartyPaper ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Allow Clause Assembly </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="AllowClauseAssembly"
              name="AllowClauseAssembly"
              onChange={(value) =>
                handleToggleChange(value, formData, "AllowClauseAssembly")
              }
              checked={formData.AllowClauseAssembly}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.AllowClauseAssembly ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> QR Code </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="QRCode"
              name="QRCode"
              onChange={(value) =>
                handleToggleChange(value, formData, "QRCode")
              }
              checked={formData.QRCode}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.QRCode ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}>
            {" "}
            Allow Copy With Associations{" "}
          </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="AllowCopywithAssociations"
              name="AllowCopywithAssociations"
              onChange={(value) =>
                handleToggleChange(value, formData, "AllowCopywithAssociations")
              }
              checked={formData.AllowCopywithAssociations}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.AllowCopywithAssociations ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}>
            {" "}
            Two Column Attribute Layout{" "}
          </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="TwoColumnAttributeLayout"
              name="TwoColumnAttributeLayout"
              onChange={(value) =>
                handleToggleChange(value, formData, "TwoColumnAttributeLayout")
              }
              checked={formData.TwoColumnAttributeLayout}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.TwoColumnAttributeLayout ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Enable Collboration </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="EnableCollabration"
              name="EnableCollabration"
              onChange={(value) =>
                handleToggleChange(value, formData, "EnableCollabration")
              }
              checked={formData.EnableCollabration}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.EnableCollabration ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}> Enable Auto Supersede </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="EnableAutoSupersede"
              name="EnableAutoSupersede"
              onChange={(value) =>
                handleToggleChange(value, formData, "EnableAutoSupersede")
              }
              checked={formData.EnableAutoSupersede}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.EnableAutoSupersede ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>

      <Row className="my-2">
        <Col lg={1} className=" "></Col>
        <Col xs={6} md={6} lg={3} className=" ">
          <h4 className={AgreeDocCSS.AgreeFont}>
            {" "}
            Expand Drop-down on Mouse Hover{" "}
          </h4>
        </Col>

        <Col xs={6} md={6} lg={4} className=" ">
          <div className={AgreeDocCSS.column}>
            <Switch
              className={AgreeDocCSS.toggle}
              id="ExpandDropdownonMouseHover"
              name="ExpandDropdownonMouseHover"
              onChange={(value) =>
                handleToggleChange(
                  value,
                  formData,
                  "ExpandDropdownonMouseHover"
                )
              }
              checked={formData.ExpandDropdownonMouseHover}
              {...SwitchStyle}
            />
            <div className={AgreeDocCSS.onoff}>
              {formData.ExpandDropdownonMouseHover ? "ON" : "OFF"}
            </div>
            <div className={AgreeDocCSS.question}>
              <FaRegQuestionCircle />
            </div>
          </div>
        </Col>

        <Col xs={0} md={0} lg={4} className=" "></Col>
      </Row>
    </>
  );
});
export default AggreementDtl;
