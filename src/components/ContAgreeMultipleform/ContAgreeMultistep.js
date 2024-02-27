import React, { useRef, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import AgreeMultiCSS from "./AgreeMultistep.module.css";
import DualList from "../DualBox/DualList.js";
import AggreementDtl from "../ConTypAgr/AggreementDtl.js";
import Breadcrumb from "../Breadcrumb/Breadcrumb.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { createValidationSchema } from "../ValidationSchema.js"; //******** */
import * as yup from "yup"; //****   */
import AgreeTeam from "../ConTypAgr/AgreeTeam.js";
import ContTypAgreeAddAssoc from "../ConTypAgr/ContTypAgreeAddAssoc.js";
import AgreeAttr from "../ConTypAgr/AgreeAttr.js";

const ContAgreeMultistep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  //***********/
  const [isValidated, setIsValidated] = useState(false);

  //******************/
  const childFormRef = useRef(null);

  const [formData, setFormData] = useState({
    step0Data: {
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
    },
    step1Data: {
      AvailAttr: [],
      SelAttr: [],
      AttrForm: [],
    },
    step2Data: [],
    step3Data: {
      AvailAttr: [],
      SelAttr: [],
    },
    step4Data: { UserDtl: [] },
    step5Data: [],
  });

  //**************** */
  const validationSchema = yup.object().shape({
    ContractTypeName: createValidationSchema("text", "ContractTypeName"),
    Description: createValidationSchema("text", "Description"),
    // Add validation for other fields as needed
  });

  //**************** */
  const validateForm = (formValues, schema) => {
    schema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        setIsValidated(true);
        // console.log('Form submitted successfully');
      })
      .catch((validationErrors) => {
        setIsValidated(false);
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        childFormRef.current.setErrors(errors);
      });
  };

  function handleMSFormChange(stepId, name, value) {
    setFormData((prevData) => ({
      ...prevData,
      [`step${stepId}Data`]: {
        ...prevData[`step${stepId}Data`],
        [name]: value,
      },
    }));
  }

  const handleNext = () => {
    /*if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }*/
    try {
      childFormRef.current.handleFormSubmit();
    } catch (errors) {
      /* alert(errors) */
    }
    if (currentStep < 5) {
      if (currentStep === 0) {
        if (isValidated) {
          setCurrentStep(currentStep + 1);
        }
      } else {
        setCurrentStep(currentStep + 1);
      }
      setIsValidated(false);
    }
  };

  const handlePrevious = () => {
    setIsValidated(false); //**** */
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    alert(JSON.stringify(formData));
  };

  const getColumnContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AggreementDtl
            ref={childFormRef}
            data={formData.step0Data}
            onChange={(name, value) =>
              handleMSFormChange(currentStep, name, value)
            }
            validateForm={validateForm}
            validationSchema={validationSchema}
            fieldValidation={createValidationSchema}
          />
        );
      case 1:
        return (
          <AgreeAttr
            data={formData.step1Data}
            onChange={(name, value) =>
              handleMSFormChange(currentStep, name, value)
            }
          />
        );
      case 2:
        return <ContTypAgreeAddAssoc />;
      case 3:
        return (
          <DualList
            data={formData.step3Data}
            onChange={(name, value) =>
              handleMSFormChange(currentStep, name, value)
            }
          />
        );
      case 4:
        return (
          <AgreeTeam
            data={formData.step4Data}
            onChange={(name, value) =>
              handleMSFormChange(currentStep, name, value)
            }
          />
        );
      case 5:
        return <h6>Verify</h6>;
      default:
        return null;
    }
  };
  const [currentPath, setCurrentPath] = useState(
    "Configure / Contracttype / Aggrement"
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <Breadcrumb currentPath={currentPath} />
          </Col>
        </Row>
      </Container>
      <Container fluid className={AgreeMultiCSS.MultiBg}>
        <Row className=" p-1">
          <Col xs={6} md={4} lg={2}>
            <div
              className={` ${AgreeMultiCSS.ContAgreeMultisteptab} ${
                currentStep === 0
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              }`}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Details</h6>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div
              className={` ${AgreeMultiCSS.ContAgreeMultisteptab} ${
                currentStep === 1
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              }`}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Attributes</h6>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div
              className={`mt-md-0 mt-4 p-1 ${
                AgreeMultiCSS.ContAgreeMultisteptab
              } ${
                currentStep === 2
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              }`}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Association</h6>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div
              className={`mt-lg-0 mt-4 p-1 ${
                AgreeMultiCSS.ContAgreeMultisteptab
              } ${
                currentStep === 3
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              }`}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Display Preference</h6>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div
              className={`mt-lg-0 mt-4 p-1 ${
                AgreeMultiCSS.ContAgreeMultisteptab
              } ${
                currentStep === 4
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              } `}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Team</h6>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <div
              className={`mt-lg-0 mt-4 p-1 ${
                AgreeMultiCSS.ContAgreeMultisteptab
              } ${
                currentStep === 5
                  ? "bg-success border border-dark text-white rounded "
                  : "bg-white border border-dark text-dark rounded"
              }`}
            >
              <h6 className={AgreeMultiCSS.Tabname}>Verify</h6>
            </div>
          </Col>
          {getColumnContent()}
        </Row>
        <Row className="p-5">
          <Col lg={3}></Col>
          <Col xs={4} md={4} lg={2}>
            {currentStep > 0 && (
              <div
                className={AgreeMultiCSS.movingButton}
                onClick={handlePrevious}
              >
                <p className={AgreeMultiCSS.btnNext}>Previous</p>
                <div className={AgreeMultiCSS.btnNextBg}>
                  <FaArrowLeft className={AgreeMultiCSS.btnNextArrow} />
                </div>
              </div>
            )}
          </Col>
          <Col xs={4} md={4} lg={2}>
            {currentStep < 5 && (
              <div className={AgreeMultiCSS.movingButton} onClick={handleNext}>
                <p className={AgreeMultiCSS.btnNext}>Next</p>
                <div className={AgreeMultiCSS.btnNextBg}>
                  <FaArrowRight className={AgreeMultiCSS.btnNextArrow} />
                </div>
              </div>
            )}
          </Col>
          <Col xs={4} md={4} lg={2}>
            {currentStep === 5 && (
              <Button
                onClick={handleSubmit}
                className="bg-dark border border-dark text-white  p-2 m-1"
              >
                Submit
              </Button>
            )}
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default ContAgreeMultistep;
