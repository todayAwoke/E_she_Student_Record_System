import { HiOutlineCog, HiOutlineCube } from 'react-icons/hi'
export const DASHBORD_SIDER_LINKS = [
   
    {
        key: 'dashboard',
        label: "Dashboard",
        path: '/',
        icon: <HiOutlineCog />
    },
    {
        key: 'institutions',
        label: "Institutions",
        path: '/instituions',
        icon: <HiOutlineCog />
    },
    {
        key: 'studentrecord',
        label: "Student Record",
        path: '/studentRecord',
        icon: <HiOutlineCog />
    },
    {
        key: 'enrollment',
        label: "Enrollment",
        path: '/enrollment',
        icon: <HiOutlineCog />
    },
    {
        key: 'student',
        label: "Student",
        path: '/student',
        icon:<HiOutlineCube/>
      
    },
    {
        key:'form',
        label:'Submit Form',
        path :'/form',
        icon:<HiOutlineCube/>
    }
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS=[
    {
        key:'setting',
        label:"Setting",
        path:'/setting',
        icon: <HiOutlineCog />
    }
]