import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import AllStaff from "./components/AllStaff";
import CreateStaff from "./components/CreateStaff";
import Department from "./components/Department";
import LeaveApplication from "./components/LeaveApplication";
import ListApplication from "./components/ListApplication";
import ListCandidate from "./components/ListCandidate";
import ListMyApplication from "./components/ListMyApplication";
import MyContract from './components/MyContract'
import MyDepartment from "./components/MyDepartment";
import MyLeaveApplication from "./components/MyLeaveApplication";
import MyOT from "./components/MyOT";
import MySalary from "./components/MySalary";
import SalaryStaff from './components/SalaryStaff'
import StaffContract from "./components/StaffContract";
import StaffOT from './components/StaffOT';
import MyLayout from "./components/MyLayout";

import Homepage from "./components/Homepage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>
  },
  {
    path: '/dashboard',
    element: <MyLayout><Dashboard></Dashboard></MyLayout>
  },
  {
    path: '/allstaff',
    element: <MyLayout><AllStaff></AllStaff></MyLayout>
  },
  {
    path: '/createstaff',
    element: <MyLayout><CreateStaff></CreateStaff></MyLayout>
  },
  {
    path: '/department',
    element: <MyLayout><Department></Department></MyLayout>
  },
  {
    path: '/leaveapplication',
    element: <MyLayout><LeaveApplication></LeaveApplication></MyLayout>
  },
  {
    path: '/listapplication',
    element: <MyLayout><ListApplication></ListApplication></MyLayout>
  },
  {
    path: '/listcandidate',
    element: <MyLayout><ListCandidate></ListCandidate></MyLayout>
  },
  {
    path: '/listmyapplication',
    element: <MyLayout><ListMyApplication></ListMyApplication></MyLayout>
  },
  {
    path: '/mycontract',
    element: <MyLayout><MyContract></MyContract></MyLayout>
  },
  {
    path: '/mydepartment',
    element: <MyLayout><MyDepartment></MyDepartment></MyLayout>
  },
  {
    path: '/myleaveapplication',
    element: <MyLayout><MyLeaveApplication></MyLeaveApplication></MyLayout>
  },
  {
    path: '/myot',
    element: <MyLayout><MyOT></MyOT></MyLayout>
  },
  {
    path: '/mysalary',
    element: <MyLayout><MySalary></MySalary></MyLayout>
  },
  {
    path: '/salarystaff',
    element: <MyLayout><SalaryStaff></SalaryStaff></MyLayout>
  },
  {
    path: '/staffcontract',
    element: <MyLayout><StaffContract></StaffContract></MyLayout>
  },
  {
    path: '/staffot',
    element: <MyLayout><StaffOT></StaffOT></MyLayout>
  },
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
