import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cilFlagAlt } from '@coreui/icons';
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import './EditUser.css'
import { CToast, CToastHeader, CToastBody, CToaster, CFormSelect, CFormLabel } from '@coreui/react'
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

const options = ["Select Role", "Admin", "User"];

export default function EditUser() {
    let navigate = useNavigate();

    //const { id } = useParams();
    const [selected, setSelected] = useState(options[0]);
    const [error, setError] = useState(false);
    const [isMobEntered, setIsMobEntered] = useState(false);
    const [isPassEntered, setIsPassEntered] = useState(false);
    const [showing, setShowing] = useState(false);
    //const [change, setChange] = useState(false);
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        mail: "",
        mobile: "",
        role: "",
        country: "",
        pass: "",
        confPass: ""
    });


    const { fName, lName, mail, mobile, role, country, pass, confPass } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        //setChange(true);
    };

    useEffect(() => {
        loadUser();
       document.title="Edit User Page"
    }, []);

  

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if ( user.fName && user.lName && user.mobile && user.mail && user.role && user.country && user.confPass && user.pass && user.role != "Select Role" ) {
                 
            await axios.put("http://localhost:3004/users/17", user);
               setShowing(true);
        // navigate("/");
        }
        console.log(user.fName)
        console.log(user.mobile)
        console.log(user.mobile.length)
        
           
       
     

        console.log(error)
    };

    const loadUser = () => {
        axios.get("http://localhost:3004/users/17")
            .then((response) => {
                // console.log(response.data[0].fName)
                // console.log(response.data[0])
                // const userData =  response.data
                // setUser(userData);
                // console.log(user);
                // console.log(user[0].fName);
                console.log(response.data.fName);
                console.log(response.data);
                setUser(response.data);
                console.log(user);
            })

            if ((user.fName.length == 0) && (user.fName == null)  ) {
                console.log(user.fName)
                console.log(error)
                setError(true)
            }
            if ((user.lName.value == 0) && (user.lName.value == null) ) {
                console.log(error)
                setError(true)
            }
            if ((user.mobile.length < 10) || (user.mobile.value == null )  ) {
              console.log(error)
                setError(true)
            }
            if ((user.mail.value == 0) && (user.mail.value == null)) {
                console.log(error)
                setError(true)
            }
            if ((user.role !== "Admin") && (user.role !== "User") && (user.role === "Select Role")) {
                console.log(error)
                setError(true)
            }
            if ((user.pass.value === 0) && (user.pass.value === null)  ) {
                console.log(error)
                setError(true)
            }
            if ((user.confPass.length === user.pass.length && user.confPass !== user.pass) && (isPassEntered) ) {
                console.log(error)
                setError(true)
            }

    };

    return (
        <div className="container">
            <div className="row">
            <div style={{ display: (showing ? 'block' : 'none') }}>
                  <CToaster style={{ marginTop: '2rem' , marginLeft:"47rem"}}>
                    <CToast autohide={false} visible={true}>

                      <CToastBody style={{ color: 'green', fontSize: '16px', fontFamily: 'revert' }} className='fw-light'><b><center>User has been Updated successfully !</center> </b></CToastBody>
                    </CToast>

                  </CToaster>
                </div> 
                <div className="col-md-5 offset-md-3 border rounded p-4 pt-3 mt-2 shadow">
                    <h2 className="text-center">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-1">
                            <label htmlFor="FisrtName" className="form-label">
                                {/* FisrtName */}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter First name"
                                name="fName"
                                value={fName}
                                onChange={(e) => onInputChange(e)}
                            />
                            {
                                (error) && user.fName.length <= 0 ?
                                    <h6 className='errorMsg'>Please Enter the First Name</h6> : ""
                            }
                        </div>

                        <div className="mb-1">
                            <label htmlFor="LastName" className="form-label">
                                {/* LastName */}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter last name"
                                name="lName"
                                value={lName}
                                onChange={(e) => onInputChange(e)}
                            />
                            {
                                (error) && user.lName.length <= 0 ?
                                    <h6 className='errorMsg'>Please Enter the Last Name</h6> : ""
                            }
                        </div>
                        <div className="mb-1">
                            <label htmlFor="Mail" className="form-label">
                                {/* Mail */}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Mail"
                                name="mail"
                                value={mail}
                                onChange={(e) => onInputChange(e)}
                            />
                            {
                                (error) && user.mail.length <= 0 ?
                                    <h6 className='errorMsg'>Please Enter the Mail</h6> : ""
                            }
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Mobile" className="form-label">
                                {/* Mobile */}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Mobile"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => onInputChange(e)}
                               // onMouseLeave={() => setIsMobEntered(true)}
                                maxLength={10}
                            />
                            {
                                (error) && user.mobile.length < 10 ?
                                    <h6 className='errorMsg'>Incomplete Mob no</h6> : ""
                            }
                        </div>

                        <CInputGroup className="mb-1">
                            <CRow className="g-3">
                                <CCol xs>
                                    <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup" >
                                        {/* Country */}
                                    </CFormLabel>
                                    <CInputGroup>
                                        <CInputGroupText>
                                            <CIcon icon={cilFlagAlt} />
                                        </CInputGroupText>
                                        <CFormInput placeholder="Enter Country" autoComplete="country" onChange={(e) => onInputChange(e)} name="country" value={country} required />
                                    </CInputGroup>
                                </CCol>
                                <CCol xs>

                                    <CFormSelect aria-label="Default select example" name="role" value={role} onChange={(e) => onInputChange(e)} >
                                        {options.map((value) => (
                                            <option value={value} key={value}>
                                                {value}
                                            </option>
                                        ))}
                                        {
                                            (error) && (user.role !== "Admin") && (user.role !== "User") ? <h6 className='errorMsg'>Please Select the Role</h6> : ""
                                        }
                                    </CFormSelect>


                                </CCol>
                            </CRow>
                        </CInputGroup>

                        <div className="mb-1">
                            <label htmlFor="Password" className="form-label">
                                {/* Password */}
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Set Password"
                                name="pass"
                                value={pass}
                                onChange={(e) => onInputChange(e)}
                            />
                            {
                                (error) && user.pass.length <= 0 ?
                                    <h6 className='errorMsg'>Please Enter the password</h6> : ""
                            }
                            {
                                (error) && user.pass.length <= 5 ?
                                    <h6 className='errorMsg'>Password Must Be More than 5 Character</h6> : ""
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="ConfirmPassword" className="form-label">
                                {/* ConfirmPassword */}
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confPass"
                                value={confPass}
                                onChange={(e) => onInputChange(e)}
                                onMouseEnter={() => setIsPassEntered(true)}
                            />
                            {
                                (error) && (user.confPass.length === user.pass.length) && (user.confPass !== user.pass) && (isPassEntered) ? <h6 className='errorMsg'> Password Not Matching </h6> : "" // 
                            }
                        </div>

                        <center>
                            <button type="submit" className="btn btn-primary" style={{ paddingLeft: "8rem" }}>
                                <span style={{ marginLeft: "-110px" }}>   Save </span>
                            </button>
                            <Link className="btn btn-danger mx-2" to="/" style={{ paddingRight: "3rem" }}>
                                <span style={{ marginLeft: "35px" }}>    Cancel   </span>
                            </Link>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}