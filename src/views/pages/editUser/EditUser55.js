// /* eslint-disable no-console */
// import React from 'react'
// import { useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import { CToast, CToastHeader, CToastBody, CToaster, CFormSelect, CFormLabel } from '@coreui/react'
// import { cilFlagAlt } from '@coreui/icons';
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './EditUser.css'

// import {
//     CButton,
//     CCard,
//     CCardBody,
//     CCol,
//     CContainer,
//     CForm,
//     CFormInput,
//     CInputGroup,
//     CInputGroupText,
//     CRow,
// } from '@coreui/react'



// const options = ["SelectRole", "Admin", "User"];


// const EditUser = () => {
//     const [fname, setFname] = useState('')
//     const [lname, setLname] = useState('')
//     const [mob, setMob] = useState("");
//     const [mail, setMail] = useState("");
//     //const [role, setRole] = useState(options[0]);
//     const [country, setCountry] = useState("");
//     const [password, setPassword] = useState("");
//     const [confPassword, setConfPassword] = useState("")
//     const [showing, setShowing] = useState(false)
//     const [error, setError] = useState(false);
//     const [isMobEntered, setIsMobEntered] = useState(false);
//     const [isPassEntered, setIsPassEntered] = useState(false);
//     const [selected, setSelected] = useState(options[0]);
//     const [user, setUser] = useState({
//         name: ""
//     });
//     //const [user, setUser] = useState("");

//     //const [isReadonly, setIsReadonly] = useState(false);

//     //const {id} = useParams(); 

//     // const editUrl  = `http://localhost:3004/users/${id}`;
//     // const updateUrl = `http://localhost:3004/users/${id}`

//     const editUrl = "http://localhost:3004/users";
//     const updateUrl = "http://localhost:3004/users"

//     // useEffect(() => {
//     //     axios.get(editUrl)
//     //         .then((response) => {
//     //             console.log(" ")
//     //             const userData = response.data[0]
//     //             console.log(`Resetting fname`)
//     //             setFname(userData.fName);
//                 // console.log(response.data[0].lName)
//                 // setLname(userData.lName);
//                 // console.log(response.data[0].mail)
//                 // setMail(userData.mail);
//                 // console.log(response.data[0].mobile)
//                 // setMob(userData.mobile)
//                 // console.log(response.data[0].country)
//                 // setCountry(userData.country);
//                 // console.log(response.data[0].role)
//                 // setSelected(userData.selected)
//                 // console.log(response.data[0].pass)
//                 // setPassword(userData.pass)
//                 // console.log(response.data[0].confPass)
//                 // setConfPassword(userData.confPass)
//                 // console.log(response.data[0].id)



//                 //  const change = document.getElementById('name');
//                 // // const fNameChange = document.getElementById('name')
//                 //    change.addEventListener('mousemove', (e) =>{
//                 //     //    fNameChange.removeAttribute('readonly')
//                 //       setFname(e.target.value)
//                 //    })

//                 // (data[0].fName);
//          //   })

//    // })

 

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     await axios.put(`http://localhost:8080/user/${id}`, user);
// //     navigate("/");
// //   };



//     //    const handleChange =(e) =>{
//     //     setFname(e.target.value)
//     // }



//     //  change.removeAttribute('readonly');

  

//     //    const resetUser= () =>{
//     //     setFname("") 
//     //   }

//     //    const setTheUser = (e)=>{
//     //     setUser(e.target.value) 
//     //    }


//     //console.log("user1 --> ", user1)
//     const handleSubmit = (e) => {
//         //e.preventDefault()
//         // console.log(fname)
//         // console.log(lname)
//         // console.log(mail)
//         // console.log(mob)
//         // // console.log(role)
//         // console.log(selected)
//         // console.log(country)
//         // console.log(password)
//         // console.log(confPassword)




//         if (fname.value == 0 || fname.value == null) {
//             setError(true)
//         }
//         if (lname.value == 0 || lname.value == null) {
//             setError(true)
//         }
//         if (mob.length < 10 && (isMobEntered)) {
//             setError(true)
//         }
//         if (mail.value == 0 || mail.value == null) {
//             setError(true)
//         }
//         if ((selected !== "Admin") && (selected !== "User") && (selected === "Select Role")) {
//             setError(true)
//         }
//         if (password.value === 0 || password.value === null) {
//             setError(true)
//         }
//         if (!(confPassword.length === password.length && confPassword === password) && (isPassEntered)) {
//             setError(true)
//         }

//         console.log("in role ", error);
//         console.log("in role ", selected);

//         // useEffect = () =>{
//         //    axios.put(updateUrl,{
//         //     "fName": fname,
//         //     "lName": lname,
//         //     "mail": mail,
//         //     "mobile": mob,
//         //     "role": selected,
//         //     "country": country,
//         //     "pass": password,
//         //     "confPass": confPassword
//         //    }).then(response =>{
//         //        console.log(response.data[0].fName);
//         //    }) 

//         // }



//         //   const data = {
//         //     "fName": fname,
//         //     "lName": lname,
//         //     "mail": mail,
//         //     "mobile": mob,
//         //     "role": selected,
//         //     "country": country,
//         //     "pass": password,
//         //     "confPass": confPassword
//         //   }



//         //   axios.get("http://localhost:3004/users", data)
//         //     .then(() => { console.log("User added") })
//         //     .catch(() => { console.log("Error") })


//         setShowing(true);

       
//         const { name } = user;

      

    
        
       



//     }

//     const loadUser = async () => {
//         const result = await axios.get("http://localhost:3004/users");
//         setUser(result.data);
//       };

//     const onInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
        
//     };
//     useEffect(() => {
//         loadUser();
//       }, []);

//     const addUser = () => {
//         // if (fname && lname && mob && mail && selected && country && confPassword) {


//         // }
//     }
//     return (
//         <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//             <CContainer>
//                 <CRow className="justify-content-center">
//                     <CCol md={9} lg={7} xl={6}>
//                         <CCard className="mx-4">

//                             <div style={{ display: (showing ? 'block' : 'none') }}>
//                                 <CToaster style={{ marginTop: '-16px', marginLeft: '500px' }}>
//                                     <CToast autohide={false} visible={true}>

//                                         <CToastBody style={{ color: 'green', fontSize: '16px', fontFamily: 'revert' }} className='fw-light'><b><center>User has been Edited successfully !</center> </b></CToastBody>
//                                     </CToast>

//                                 </CToaster>
//                             </div>

//                             <CCardBody className="p-5">



//                                 <form onSubmit={(e) => handleSubmit(e)} >


//                                     <h1 style={{ fontFamily: 'monospace', fontSize: "25px" }}><center>Edit User</center></h1>
//                                     <p className="text-medium-emphasis"></p>

//                                     {/* <CInputGroup className="mb-3">
//                                         <CInputGroupText>
//                                             <CIcon icon={cilUser} />
//                                         </CInputGroupText>
//                                         <CFormInput placeholder="Enter FirstName" id="name" name="name" value={fname} onMouseMove={() =>{setFname("")}} onChange={(e)=>setUser(e.target.value)} />
//                                     </CInputGroup> */}

//                                     <input
//                                         type={"text"}
//                                         className="form-control"
//                                         placeholder="Enter your name"
//                                         name="name"
//                                         value={name}
//                                         onChange={(e) => onInputChange(e)}
//                                     />

//                                     {
//                                         (error) && fname.length <= 0 ?
//                                             <h6 className='errorMsg'>Please Enter the First Name</h6> : ""
//                                     }

//                                     <CInputGroup className="mb-3">
//                                         <CInputGroupText>
//                                             <CIcon icon={cilUser} />
//                                         </CInputGroupText>
//                                         <CFormInput placeholder="Enter lastName" autoComplete="lastName" onChange={(e) => setLname(e.target.value)} value={lname} />
//                                     </CInputGroup>
//                                     {
//                                         (error) && lname.length <= 0 ?
//                                             <h6 className='errorMsg'>Please Enter the Last Name</h6> : ""
//                                     }

//                                     <CInputGroup className="mb-3">
//                                         <CInputGroupText>@</CInputGroupText>
//                                         <CFormInput placeholder="Enter Email" autoComplete="email" onChange={(e) => setMail(e.target.value)} type="email" value={mail} />
//                                     </CInputGroup>
//                                     {
//                                         (error) && mail.length <= 0 ?
//                                             <h6 className='errorMsg'>Please Enter the Mail</h6> : ""
//                                     }


//                                     <CInputGroup className="mb-3">
//                                         <CInputGroupText></CInputGroupText>
//                                         <CFormInput placeholder="Enter Mobile Number" autoComplete="Mobile" onChange={(e) => setMob(e.target.value)} onMouseLeave={() => setIsMobEntered(true)} maxLength={10} value={mob} />
//                                     </CInputGroup>
//                                     {
//                                         (error) && (isMobEntered) && mob.length < 10 ?
//                                             <h6 className='errorMsg'>Incomplete Mob no</h6> : ""
//                                     }

//                                     {/* <CInputGroup className="mb-3">
//                     <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
//                     <CFormInput placeholder="Enter Role" autoComplete="role" onChange={(e) => setRole(e.target.value)} />
//                     &nbsp; &nbsp;
//                     <CInputGroupText><CIcon icon={cilFlagAlt}/></CInputGroupText>
//                     <CFormInput placeholder="Country" autoComplete="country" onChange={(e) => setCountry(e.target.value)} required />
//                     </CInputGroup> */}

//                                     <CInputGroup className="mb-3">
//                                         <CRow className="g-3">
//                                             <CCol xs>
//                                                 <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup" >
//                                                     Country
//                                                 </CFormLabel>
//                                                 <CInputGroup>
//                                                     <CInputGroupText>
//                                                         <CIcon icon={cilFlagAlt} />
//                                                     </CInputGroupText>
//                                                     <CFormInput placeholder="Country" autoComplete="country" onChange={(e) => setCountry(e.target.value)} required value={country} />
//                                                 </CInputGroup>
//                                             </CCol>
//                                             <CCol xs>
//                                                 {/* <CFormSelect aria-label="Default select example" name="org_id">
//                           <option value="" >Select Your Role</option>
//                           <option value="Admin" onClick={()=>changeOrg()}>Admin</option>
//                           <option value="User" onClick={()=>changeOrg()}>User</option>
//                         </CFormSelect> */}
//                                                 {/* 
//                         <CFormSelect aria-label="Default select example">
//                           value={selected}
//                           onChange={() => setSelected(value)}
//                           {options.map((value) => (
//                             <option value={value}>
//                               {value}
//                             </option>
//                           ))}
//                         </CFormSelect> */}


//                                                 <CFormSelect aria-label="Default select example" name="org_id" value={selected} onChange={(e) => setSelected(e.target.value)} >
//                                                     {options.map((value) => (
//                                                         <option value={value} key={value}>
//                                                             {value}
//                                                         </option>
//                                                     ))}
//                                                 </CFormSelect>
//                                                 {
//                                                     (error) && (selected !== "Admin") && (selected !== "User") ? <h6 className='errorMsg'>Please Select the Role</h6> : ""
//                                                 }

//                                             </CCol>
//                                         </CRow>
//                                     </CInputGroup>

//                                     {/* {
//                     (error) && role.length <= 0 ?
//                       <h6 className='errorMsg'>Please Mension the your role</h6> : ""
//                   } */}

//                                     <CInputGroup className="mb-3">
//                                         <CInputGroupText>
//                                             <CIcon icon={cilLockLocked} />
//                                         </CInputGroupText>
//                                         <CFormInput
//                                             type="password"
//                                             placeholder="Password"
//                                             autoComplete="new-password"
//                                             onChange={(e) => setPassword(e.target.value)} value={password} />

//                                     </CInputGroup>
//                                     {
//                                         (error) && password.length <= 0 ?
//                                             <h6 className='errorMsg'>Please Enter the password</h6> : ""
//                                     }
//                                     {
//                                         (error) && password.length <= 5 ?
//                                             <h6 className='errorMsg'>Password Must Be More than 5 Character</h6> : ""
//                                     }
//                                     <CInputGroup className="mb-3">
//                                         <CInputGroupText>
//                                             <CIcon icon={cilLockLocked} />
//                                         </CInputGroupText>
//                                         <CFormInput
//                                             type="password"
//                                             placeholder="confirm password"
//                                             autoComplete="new-password"
//                                             onChange={(e) => setConfPassword(e.target.value)}
//                                             onMouseEnter={() => setIsPassEntered(true)}
//                                             value={confPassword} />
//                                     </CInputGroup>
//                                     {
//                                         (error) && !(confPassword.length === password.length) && !(confPassword === password) && (isPassEntered) ? <h6 className='errorMsg'> Password Not Matching </h6> : "" // 
//                                     }
//                                     <div className="d-grid">
//                                         <button className='btn btn-primary form-control' onDoubleClick={() => addUser()}>Add User</button>

//                                     </div>
//                                 </form>

//                             </CCardBody>

//                         </CCard>
//                     </CCol>
//                 </CRow>
//             </CContainer>
//         </div>
//     )
// }

// export default EditUser;
