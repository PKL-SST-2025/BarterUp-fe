

import './App.css'

// src/App.tsx

import { Router, Route} from "@solidjs/router";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersonalDetail from "./pages/PersonalDetail";
import UploadProfile from "./pages/UploadProfile";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup/personal" component={PersonalDetail} />
        <Route path="/signup/upload" component={UploadProfile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
    </Router>
  );
}

