import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import ListJobs from './ListJobs'
import App from './App'
import JobApplyScreen from './JobApplyScreen'
import JobApplyFillFormScreen from './JobApplyFillFormScreen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/jobs' element={<ListJobs></ListJobs>}></Route>
        <Route path='/job-apply/:job_id' element={<JobApplyScreen></JobApplyScreen>}></Route>
        <Route path="/fill-form" element={<JobApplyFillFormScreen></JobApplyFillFormScreen>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
