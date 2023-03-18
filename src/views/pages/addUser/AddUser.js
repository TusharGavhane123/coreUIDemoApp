import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CToast, CToastHeader, CToastBody, CToaster, CFormSelect, CFormLabel } from '@coreui/react'
import axios from 'axios'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
  } from '@coreui/react'

function AddUser() {
    const [validated, setValidated] = useState(false);

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mob, setMob] = useState("");
    const [mail, setMail] = useState("");
    //const [role, setRole] = useState(options[0]);
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("")
    const [showing, setShowing] = useState(false)
    const [error, setError] = useState(false);
    const [isMobEntered, setIsMobEntered] = useState(false);
    const [isPassEntered, setIsPassEntered] = useState(false);
    const [selected, setSelected] = useState();
    const [match,setMatch] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("selected option->", selected)
        const form = event.currentTarget;
        if (password !== confPassword) {
            setValidated(false);
            alert("Password not matched");
        } else {
            if (form.checkValidity() === true) {
                event.preventDefault();
                event.stopPropagation();
                setShowing(true); 
                const data = {
                    "fName": fname,
                    "lName": lname,
                    "mail": mail,
                    "mobile": mob,
                    "role": selected,
                    "country": country,
                    "pass": password,
                    "confPass": confPassword
                  }
                  axios.post("http://localhost:3004/users", data)
                  .then(() => { console.log("User added") })
                  .catch(() => { console.log("Error") })
                  
                 
                 
            }
            setMatch(true);
            setValidated(true);
        }

    };



    return (
        <div className="bg-light min-vh-100  d-flex flex-row align-items-center" >
      <CContainer className="justify-content-center" >
        <CRow className="justify-content-center" >
          {/* <CCol md={9} lg={7} xl={6} > */}
             
            <CCard className="mx-5" style={{paddingRight : "-10px", marginLeft : "10rem" , marginTop:"-1rem"}}  >
 
          
            <div style={{ display: (showing ? 'block' : 'none') }}>
                  <CToaster style={{ marginTop: '2rem' , marginLeft:"47rem"}}>
                    <CToast autohide={false} visible={true}>

                      <CToastBody style={{ color: 'green', fontSize: '16px', fontFamily: 'revert' }} className='fw-light'><b><center>User has been added successfully !</center> </b></CToastBody>
                    </CToast>

                  </CToaster>
                </div> 

                
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
    
            <Row className="mb-1">
            <h1 style={{ fontFamily: 'monospace' , fontSize :"25px" , marginTop:"3rem"}}><center>Add User</center></h1>
            <CInputGroup className="mb-1">
                <Form.Group as={Col} md="4" controlId="validationCustom01"   style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control
                        
                        required
                        type="text"
                        placeholder="First name"
                      
                        onChange={(e) => setFname(e.target.value)}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    <Form.Control.Feedback type="invalid">Please choose a first name.</Form.Control.Feedback>
                </Form.Group>
            </CInputGroup> 
            <CInputGroup className="mb-1">
                <Form.Group as={Col} md="4" controlId="validationCustom02"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                       
                        onChange={(e) => setLname(e.target.value)}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    <Form.Control.Feedback type="invalid">Please choose a first name.</Form.Control.Feedback>
                </Form.Group>
                </CInputGroup>
                <CInputGroup className="mb-1"> 
                <Form.Group as={Col} md="4" controlId="validationCustomUsername"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                </CInputGroup>
            </Row>
            <Row className="mb-1">
            <CInputGroup className="mb-3"> 
                <Form.Group as={Col} md="2" controlId="validationCustom03"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} required />
                    
                </Form.Group>
                &nbsp; &nbsp;
                <Form.Group as={Col} controlId="validationCustom04"  style={{ marginRight : "24rem", marginLeft : "36rem" ,marginTop:"-4rem" }}>
                    <Form.Label></Form.Label>
                    <CFormSelect aria-label="Default select example" onChange={(e) => setSelected(e.target.value)} defaultValue="select" style={{paddingRight:"-5rem"}} >
                        <option value="select" disabled>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </CFormSelect>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Country.
                    </Form.Control.Feedback>
                    
                </Form.Group>
                </CInputGroup>
             
                <CInputGroup className="mb-1"> 
                <Form.Group as={Col} md="4" controlId="validationCustom04"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control type='tel'
                        placeholder="mobile"
                        onMouseLeave={() => setIsMobEntered(true)} maxLength={10} pattern="\d{10}"
                        required 
                        onChange={(e) => setMob(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid mobile number.
                    </Form.Control.Feedback>
                </Form.Group>
                </CInputGroup>
            </Row>
            <Row>
     
                <CInputGroup className="mb-1">
               <Form.Group as={Col} md="4" controlId="validationCustom04"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control type='password'
                        placeholder="Set Password"
                        onChange={(e) => setPassword(e.target.value)} minLength={5}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid mobile number.
                    </Form.Control.Feedback>
                </Form.Group>
                </CInputGroup>
                <CInputGroup className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04"  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                    <Form.Label></Form.Label>
                    <Form.Control type='password'
                        placeholder="Confirm Password"
                        onChange={(e) => setConfPassword(e.target.value)} minLength={5}
                        required />
                    <Form.Control.Feedback>
                        
                    </Form.Control.Feedback>
                </Form.Group>
                </CInputGroup>

            </Row>
            
            {/* <Form.Group className="mb-1 "  style={{paddingRight : "-10px", marginLeft : "23rem"}}>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group> */}
            <Button type="submit" style={{ marginLeft : "31rem"}}>Add User</Button>
        </Form>

      

           </CCard>
          {/* </CCol> */}
        </CRow>
      </CContainer>
    </div>
    );
}

export default AddUser;