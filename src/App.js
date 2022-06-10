import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TeacherLogin from './pages/teachers/Login';
import TeacherSignup from './pages/teachers/Signup';
import TeacherProfile from './pages/teachers/Profile';
import TeacherDashboard from './pages/teachers/Dashboard';
import NewGroup from './pages/teachers/NewGroup';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teachers/login" element={<TeacherLogin />} />
        <Route path="teachers/signup" element={<TeacherSignup />} />
        <Route path="teachers/dashboard" element={<TeacherDashboard />} />
        <Route path="teachers/profile" element={<TeacherProfile />} />
        <Route path="teachers/newgroup" element={<NewGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
