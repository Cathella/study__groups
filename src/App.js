import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TeacherLogin from './pages/teachers/Login';
import TeacherSignup from './pages/teachers/Signup';
import StudentLogin from './pages/students/Login';
import StudentSignup from './pages/students/Signup';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Address from "./pages/Address";
import TeacherDashboard from './pages/teachers/Dashboard';
import StudentDashboard from './pages/students/Dashboard';
import NewGroup from './pages/teachers/NewGroup';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teachers/login" element={<TeacherLogin />} />
          <Route path="teachers/signup" element={<TeacherSignup />} />
          <Route path="teachers/dashboard" element={<TeacherDashboard />} />
          <Route path="students/dashboard" element={<StudentDashboard />} />
          <Route path="/complete-my-profile" element={<Profile />} />
          <Route path="/my-address" element={<Address />} />
          <Route path="/my-contact" element={<Contact />} />
          <Route path="teachers/newgroup" element={<NewGroup />} />
          <Route path="students/signup" element={<StudentSignup />} />
          <Route path="students/login" element={<StudentLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
