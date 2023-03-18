import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      // {
      //   component: CNavItem,
      //   name: 'AddUser1',
      //   to: '/adduser1',
      // },
      {
        component: CNavItem,
        name: 'AddUser',
        to: '/adduser',
      },
      // {
      //   component: CNavItem,
      //   name: 'EditUser',
      //   to: '/edituser',
      // },
      {
        component: CNavItem,
        name: 'EditUser',
        to: '/edituser',
      },
      // {
      //   component: CNavItem,
      //   name: 'AddUserValidation',
      //   to: '/adduservalidation',
      // },
    ],
  },
]

export default _nav
