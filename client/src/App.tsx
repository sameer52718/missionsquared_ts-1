
import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"


// Client Partials
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


// Admin Partials
import AdminNav from "./components/AdminNav"
import AdminSidebar from "./components/AdminSidebar"


// Client VIEWS
import Assessment from "./pages/website/Assessment"
import AssessmentReport from "./pages/website/AssessmentReport"


// Admin VIEWS0
import AdminList from "./pages/adminportal/AdminList"
import WorkStyleGraph from "./pages/adminportal/WorkStyleGraph"
import Dashboard from "./pages/adminportal/Dashboard"

const Client: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

const Admin: React.FC = () => {
  return (
    <React.Fragment>
      <AdminNav />
      <section className="flex w-full portal overflow-y-scroll">
      <AdminSidebar />
      <Outlet />
      </section>
    </React.Fragment>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Assessment/>}/>
          <Route path='/report' element={<AssessmentReport />} />
        </Route>
        <Route path="/" element={<Admin/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessments" element={<AdminList />} />
          <Route path="/folders" element={<Dashboard />} />
          <Route path="/feedback" element={<Dashboard />} />
          <Route path="/targets" element={<Dashboard />} />
          <Route path='/admin-list' element={<AdminList />} />
          <Route path='/work-styles/:id' element={<WorkStyleGraph />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
