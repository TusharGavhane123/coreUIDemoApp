/* eslint-disable no-console */
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { CToast, CToastHeader, CToastBody, CToaster, CFormSelect, CFormLabel } from '@coreui/react'
import { cilFlagAlt } from '@coreui/icons';

import './AddUser1.css'

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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios';

const options = ["SelectRole", "Admin", "User"];


const AddUser1 = () => {
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
  const [selected, setSelected] = useState(options[0]);


  // useEffect =() =>{
  //   if (fname.value == 0 || fname.value == null) {
  //     setError(true)
  //   }
  //   if (lname.value == 0 || lname.value == null) {
  //     setError(true)
  //   }
  //   if (mob.length < 10 && (isMobEntered)) {
  //     setError(true)
  //   }
  //   if (mail.value == 0 || mail.value == null) {
  //     setError(true)
  //   }
  //   if ((selected !== "Admin")  && (selected !== "User") &&(selected === "Select Role")) {
  //     setError(true)
  //   }
  //   if (password.value === 0 || password.value === null) {
  //     setError(true)
  //   }
  //   if ((confPassword.length === password.length) && !(confPassword === password) && (isPassEntered)) {
  //     setError(true)
  //   }

  //   console.log(confPassword.length)
  //   console.log(password.length)
  //   console.log(password)
  //   console.log(confPassword)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fname)
    console.log(lname)
    console.log(mail)
    console.log(mob)
    // console.log(role)
    console.log(selected)
    console.log(country)
    console.log(password)
    console.log(confPassword)


    if (fname.value == 0 || fname.value == null) {
      setError(true)
    }
    if (lname.value == 0 || lname.value == null) {
      setError(true)
    }
    if (mob.length < 10 && (isMobEntered)) {
      setError(true)
    }
    if (mail.value == 0 || mail.value == null) {
      setError(true)
    }
    if ((selected !== "Admin")  && (selected !== "User") &&(selected === "Select Role")) {
      setError(true)
    }
    if (password.value === 0 || password.value === null) {
      setError(true)
    }
    if (!(confPassword.length === password.length && confPassword === password) && (isPassEntered)) {
      setError(true)
    }

    console.log("in role ", error);
    console.log("in role ", selected);

    console.log(confPassword.length)
      console.log(password.length)
      console.log(password)
      console.log(confPassword)

      
    // var s = document.getElementsByName('org_id')[0];
    // //s.addEventListener("click", changeOrg);

    // function changeOrg() {
    //   var value = setRole(s.options[s.selectedIndex].value);
    //   // console.log(value);
    // }

    // changeOrg();

    if ( !error && fname && lname && mob && mail && selected && country && password && confPassword ) {
      
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
    setShowing(true);
  }



  const addUser = () => {
    if (fname && lname && mob && mail && selected && country && confPassword) {
      // toast('User Added Succesfully!!!', {
      //   position: "top-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    
      // toast("Wow so easy!");
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
 
            <div style={{ display: (showing ? 'block' : 'none') }}>
                  <CToaster style={{ marginTop: '-16px', marginLeft:'500px'}}>
                    <CToast autohide={false} visible={true}>

                      <CToastBody style={{ color: 'green', fontSize: '16px', fontFamily: 'revert' }} className='fw-light'><b><center>User has been added successfully !</center> </b></CToastBody>
                    </CToast>

                  </CToaster>
                </div>

              <CCardBody className="p-5">

              

                <form onSubmit={(e) => handleSubmit(e)} >


                  <h1 style={{ fontFamily: 'monospace' , fontSize :"25px" }}><center>Add User</center></h1>
                  <p className="text-medium-emphasis"></p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Enter  Name" onChange={(e) => setFname(e.target.value)} id="name" name="name" />
                  </CInputGroup>
                  {
                    (error) && fname.length <= 0 ?
                      <h6 className='errorMsg'>Please Enter the First Name</h6> : ""
                  }

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Enter lastName" autoComplete="lastName" onChange={(e) => setLname(e.target.value)} />
                  </CInputGroup>
                  {
                    (error) && lname.length <= 0 ?
                      <h6 className='errorMsg'>Please Enter the Last Name</h6> : ""
                  }

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Enter Email" autoComplete="email" onChange={(e) => setMail(e.target.value)} type="email" />
                  </CInputGroup>
                  {
                    (error) && mail.length <= 0 ?
                      <h6 className='errorMsg'>Please Enter the Mail</h6> : ""
                  }


                  <CInputGroup className="mb-3">
                    <CInputGroupText></CInputGroupText>
                    <CFormInput placeholder="Enter Mobile Number" autoComplete="Mobile" onChange={(e) => setMob(e.target.value)} onMouseLeave={() => setIsMobEntered(true)} maxLength={10} pattern="\d{10}"/>
                  </CInputGroup>
                  {
                    (error) && (isMobEntered) && mob.length < 10 ?
                      <h6 className='errorMsg'>Incomplete Mob no</h6> : ""
                  }

                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput placeholder="Enter Role" autoComplete="role" onChange={(e) => setRole(e.target.value)} />
                    &nbsp; &nbsp;
                    <CInputGroupText><CIcon icon={cilFlagAlt}/></CInputGroupText>
                    <CFormInput placeholder="Country" autoComplete="country" onChange={(e) => setCountry(e.target.value)} required />
                    </CInputGroup> */}

                  <CInputGroup className="mb-3">
                    <CRow className="g-3">
                      <CCol xs>
                        <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup" >
                          Country
                        </CFormLabel>
                        <CInputGroup>
                          <CInputGroupText>
                            <CIcon icon={cilFlagAlt} />
                          </CInputGroupText>
                          <CFormInput placeholder="Country" autoComplete="country" onChange={(e) => setCountry(e.target.value)} required />
                        </CInputGroup>
                      </CCol>
                      <CCol xs>
                        {/* <CFormSelect aria-label="Default select example" name="org_id">
                          <option value="" >Select Your Role</option>
                          <option value="Admin" onClick={()=>changeOrg()}>Admin</option>
                          <option value="User" onClick={()=>changeOrg()}>User</option>
                        </CFormSelect> */}
{/* 
                        <CFormSelect aria-label="Default select example">
                          value={selected}
                          onChange={() => setSelected(value)}
                          {options.map((value) => (
                            <option value={value}>
                              {value}
                            </option>
                          ))}
                        </CFormSelect> */}


                        <CFormSelect aria-label="Default select example" name="org_id" value={selected} onChange={(e) => setSelected(e.target.value)}>
                          {options.map((value) => (
                            <option value={value} key={value}>
                              {value}
                            </option>
                          ))}
                        </CFormSelect>
                        {
                          (error) && (selected !== "Admin")  && (selected !== "User") ? <h6 className='errorMsg'>Please Select the Role</h6> : ""
                        }

                      </CCol>
                    </CRow>
                  </CInputGroup>

                  {/* {
                    (error) && role.length <= 0 ?
                      <h6 className='errorMsg'>Please Mension the your role</h6> : ""
                  } */}

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)} />

                  </CInputGroup>
                  {
                    (error) && password.length <= 0 ?
                      <h6 className='errorMsg'>Please Enter the password</h6> : ""
                  }
                  {
                    (error) && password.length <= 5 ?
                      <h6 className='errorMsg'>Password Must Be More than 5 Character</h6> : ""
                  }
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="confirm password"
                      autoComplete="new-password"
                      onChange={(e) => setConfPassword(e.target.value)}
                      //onMouseEnter={() => setIsPassEntered(true)}
                    />
                  </CInputGroup>
                  {
                    (error) && (confPassword.length === password.length) && !(confPassword === password)  ? <h6 className='errorMsg'> Password Not Matching </h6> : "" // 
                  }
                   {
                    (error) && confPassword.length <= 5 ?
                      <h6 className='errorMsg'>Password Must Be More than 5 Character</h6> : ""
                  }
                  <div className="d-grid">
                    <button className='btn btn-primary form-control' onDoubleClick={() => addUser()}>Add User</button>

                  </div>
                </form>

              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AddUser1
