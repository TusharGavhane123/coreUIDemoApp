import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const AddUserValidation = React.lazy(() => import('./views/pages/AddUserValidation'))
const AddUser1 = React.lazy(() => import('./views/pages/addUser/AddUser1'))
const AddUser = React.lazy(() => import('./views/pages/addUser/AddUser'))
const EditUser = React.lazy(() => import('./views/pages/editUser/EditUser'))
// const EditUser1 = React.lazy(() => import('./views/pages/editUser/EditUser1'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/adduser1" name="AddUser Page" element={<AddUser1 />} />
            <Route exact path="/adduser" name="AddUser Page" element={<AddUser />} />
             <Route exact path="/edituser" name="EditUser Page" element={<EditUser />} /> 
            {/* <Route exact path="/edituser1" name="EditUser Page1" element={<EditUser1 />} /> */}
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path='/adduservalidation' name="validation" element={<AddUserValidation />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
