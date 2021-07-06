// Essentials
import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Security
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

// Get the lists from API
import { getAllJobsForEmployee } from './services/getEmployees'
import { getAllPostsByEmployee } from './services/postByEmployees'
import { getAllHousesForRent } from './services/postHouses'
import { getAllHousesWanted } from './services/postHousesWanted'
import { getAllCommunities } from './services/communities'
import { getAllBlogs } from './services/blogs'

// Forward addresses
import Jobs from './screens/Jobs/Jobs'
import AvailableJobs from './screens/AvailableJobs/AvailableJobs'
import CreatePosts from './screens/CreatePosts/CreatePosts'
import CreateJobForm from './screens/CreateJobForm/CreateJobForm'
import Layout from './share/layout/Layout'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register';
import MainContainer from './containers/MainContainer';
import Account from './screens/Account/Account';
import JobEdit from './screens/JobEdit/JobEdit';
import ForgetPassword from './screens/ForgetPassword/ForgetPassword'
import ResetPassword from './screens/ResetPassword/ResetPassword'
import AccountEdit from './screens/AccountEdit/AccountEdit.jsx'
import AccountListings from './screens/AccountListings/AccountListings'
import JobByEmployeeEdit from './screens/JobByEmployeeEdit/JobByEmployeeEdit'
import BlogEdit from './screens/BlogEdit/BlogEdit'
import CommunityEdit from './screens/CommunityEdit/CommunityEdit'
import HouseForRentEdit from './screens/HouseForRentEdit/HouseForRentEdit';

function App() {

  const [currentUser, setCurrentUser] = useState(null); // set a current user
  const [error, setError] = useState(null);
  const history = useHistory();

  // API lists valuable
  const [jobs, setJobs] = useState([])
  const [jobsByEmployee, setJobsByEmployee] = useState([])
  const [houseForRent, setHouseForRent] = useState([])
  const [houseWanted, setHouseWanted] = useState([])
  const [communities, setCommunities] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsList = await getAllJobsForEmployee();
      setJobs(jobsList)
    }
    const fetchJobsByEmployee = async () => {
      const jobsByEmployeeList = await getAllPostsByEmployee();
      setJobsByEmployee(jobsByEmployeeList)
    }
    const fetchHouseForRent = async () => {
      const houseForRentList = await getAllHousesForRent();
      setHouseForRent(houseForRentList)
    }
    const fetchHouseWanted = async () => {
      const houseWantedList = await getAllHousesWanted();
      setHouseWanted(houseWantedList)
    }
    const fetchCommunities = async () => {
      const communitiesList = await getAllCommunities();
      setCommunities(communitiesList)
    }
    const fetchBlogs = async () => {
      const blogsList = await getAllBlogs();
      setBlogs(blogsList)
    }

    fetchJobs();
    fetchJobsByEmployee();
    fetchHouseForRent();
    fetchHouseWanted();
    fetchCommunities();
    fetchBlogs();
  }, [])


  // Security 
  useEffect(() => {

    // VERIFY
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser)
    }

    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push('/');
      history.go(0)
    } catch (e) {
      setError("invalid login credentials");
    }
  }

  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push('/');
    } catch (e) {
      setError("invalid sign up info")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }
  
  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>

      <Switch>

        <Route path="/house/edit/:id">
          <HouseForRentEdit currentUser={currentUser} houseForRent={houseForRent} setHouseForRent={setHouseForRent} />
        </Route>

        <Route path="/community/edit/:id">
          <CommunityEdit currentUser={currentUser} communities={communities} setCommunities={setCommunities} />
        </Route>

        <Route path="/blog/edit/:id">
          <BlogEdit currentUser={currentUser} blogs={blogs} setBlogs={setBlogs} />
        </Route>

        <Route path="/job-by-employee/edit/:id">
          <JobByEmployeeEdit currentUser={currentUser} jobsByEmployee={jobsByEmployee} setJobsByEmployee={setJobsByEmployee} />
        </Route>

        <Route path="/job/edit/:id">
          <JobEdit currentUser={currentUser} jobs={jobs} setJobs={setJobs} />
        </Route>

        <Route path='/account'>
          <Account currentUser={currentUser} />
        </Route>

        <Route path='/account-edit'>
          <AccountEdit currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path='/account-listings'>
          <AccountListings
            currentUser={currentUser}
            jobs={jobs}
            jobsByEmployee={jobsByEmployee}
            houseForRent={houseForRent}
            houseWanted={houseWanted}
            communities={communities}
            blogs={blogs}
          />
        </Route>

        <Route path='/login'>
          <Login handleLogin={handleLogin} error={error} />
        </Route>

        <Route path='/forgotpassword'>
          <ForgetPassword />
        </Route>

        <Route path='/resetpassword'>
          <ResetPassword />
        </Route>

        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>

        <Route path="/post-job">
          <CreateJobForm />
        </Route>

        <Route path="/create-posts">
          <CreatePosts />
        </Route>

        <Route path="/available-jobs">
          <AvailableJobs />
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
