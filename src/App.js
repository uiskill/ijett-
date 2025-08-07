import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import CreateIssue from './components/CreateIsuue';
import PaperList from './components/PaperList';
import IssuePapers from './components/IssuePapers ';
import IssueList from './pages/IssueList';
import SubmitPaper from './components/SubmitPaper';
import PrivateRoute from './components/PrivateRoute';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import FounderEditors from './pages/FounderEditors';
import EditorCheif from './pages/EditorCheif';
import Editor from './pages/Editor';
import ReviewBoard from './pages/ReviewBoard';
import Contact from './pages/Contact';
import Download from './pages/Download';
import ListIssue from './components/ListIssue';
import EditIssue from './components/EditIssue';
import EditPaper from './components/EditPaper';
import Adduser from './components/Adduser';
import UserList from './components/Userlist';
import EditUser from './components/EditUser';





function App() {
  return (
    <div className="App">





      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder-editor" element={<FounderEditors />} />
          <Route path="/editor-chif" element={<EditorCheif />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/review-boaed" element={<ReviewBoard />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/issue-list" element={<IssueList />} />
          <Route path="/issue/:id" element={<IssuePapers />} />
          <Route path="/issue/:id/papers" element={<IssuePapers />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />



          <Route
            path="/create-issue"
            element={
              <PrivateRoute>
                <CreateIssue />
              </PrivateRoute>
            }
          />
          <Route
            path="/view-paper"
            element={
              <PrivateRoute>
                <PaperList />
              </PrivateRoute>
            }
          />

          <Route
            path="/list-issue"
            element={
              <PrivateRoute>
                <ListIssue />
              </PrivateRoute>
            }
          />

          <Route
            path="/list-user"
            element={
              <PrivateRoute>
                <UserList />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-user"
            element={
              <PrivateRoute>
                <Adduser />
              </PrivateRoute>
            }
          />

            <Route
            path="/edit-user/:id"
            element={
              <PrivateRoute>
               <EditUser/>
              </PrivateRoute>
            }
          />




          <Route
            path="edit-issue/:id"
            element={
              <PrivateRoute>
                <EditIssue />
              </PrivateRoute>
            }
          />

          <Route
            path="edit-paper/:id"
            element={
              <PrivateRoute>
                <EditPaper />
              </PrivateRoute>
            }
          />






          <Route
            path="/submit-paper"
            element={
              <PrivateRoute>
                <SubmitPaper />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>












    </div>
  );
}

export default App;
