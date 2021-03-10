import { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllJobsForEmployee } from './services/getEmployees'

import Jobs from './screens/Jobs/Jobs'
import AvailableJobs from './screens/AvailableJobs/AvailableJobs'
import CreatePosts from './screens/CreatePosts/CreatePosts'
import CreateJobForm from './screens/CreateJobForm/CreateJobForm'

import Layout from './share/layout/Layout'
// import Login from './screens/Login';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
// import Register from './screens/Register';
import MainContainer from './containers/MainContainer';

function App() {

  // GET ALL FOODS
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const fetchJobs = async () => {
      const jobsList = await getAllJobsForEmployee();
      setJobs(jobsList);
    }
    fetchJobs();
  }, [])



  console.log(jobs)

  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   const handleVerify = async () => {
  //     const currentUser = await verifyUser();
  //     setCurrentUser(currentUser)
  //   }
  //   handleVerify();
  // }, [])

  // const handleLogin = async (formData) => {
  //   try {
  //     const currentUser = await loginUser(formData);
  //     setCurrentUser(currentUser);
  //     setError(null);
  //     history.push('/');
  //   } catch (e) {
  //     setError("invalid login credentials");
  //   }
  // }

  // const handleRegister = async (formData) => {
  //   try {
  //     const currentUser = await registerUser(formData);
  //     setCurrentUser(currentUser);
  //     history.push('/');
  //   } catch (e) {
  //     setError("invalid sign up info")
  //   }
  // }

  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem('authToken');
  //   removeToken();
  // }

  return (
    <Layout
    // currentUser={currentUser}
    // handleLogout={handleLogout}
    >
      <Switch>
        {/* <Route path='/login'>
          <Login
            handleLogin={handleLogin}
            error={error}
          />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route> */}
        <Route path="/post-job">
          <CreateJobForm />
        </Route>

        <Route path="/create-posts">
          <CreatePosts />
        </Route>

        <Route path="/available-jobs">
          <AvailableJobs jobs={jobs} />
        </Route>

        <Route path='/jobs'>
          <Jobs />
        </Route>

        <Route path='/'>
          <MainContainer currentUser={currentUser} />
        </Route>

      </Switch>

    </Layout>
  );
}

export default App;
