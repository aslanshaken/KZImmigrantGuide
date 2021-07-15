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
import HouseWantedEdit from './screens/HouseWantedEdit/HouseWantedEdit';
import JobDescription from './screens/JobDescription/JobDescription'
import JobsByEmployee from './screens/JobsByEmployee/JobsByEmployee';
import JobByEmployeeDescription from './screens/JobByEmployeeDescription/JobByEmployeeDescription';
import HousesForRent from './screens/HousesForRent/HousesForRent';
import HousesWanted from './screens/HousesWanted/HousesWanted';
import HouseForRentDescription from './screens/HouseForRentDescription/HouseForRentDescription';
import HouseWantedDescription from './screens/HouseWantedDescription/HouseWantedDescription';

function App() {

  const [currentUser, setCurrentUser] = useState(null); // set a current user
  const [error, setError] = useState(null);
  const history = useHistory();

  // API lists valuable
  const [jobs, setJobs] = useState([])
  const [jobsByEmployee, setJobsByEmployee] = useState([])
  const [housesForRent, setHousesForRent] = useState([])
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
    const fetchHousesForRent = async () => {
      const houseForRentList = await getAllHousesForRent();
      setHousesForRent(houseForRentList)
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
    fetchHousesForRent();
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

  console.log(houseWanted)

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>

      <Switch>

        <Route path="/house-wanted/edit/:id">
          <HouseWantedEdit currentUser={currentUser} houseWanted={houseWanted} setHouseWanted={setHouseWanted} />
        </Route>

        <Route path="/house-for-rent/:id">
          <HouseForRentDescription housesForRent={housesForRent}/>
        </Route>

        <Route path="/house/edit/:id">
          <HouseForRentEdit currentUser={currentUser} housesForRent={housesForRent} setHousesForRent={setHousesForRent} />
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

        <Route path='/job-by-employee/:id'>
          <JobByEmployeeDescription jobsByEmployee={jobsByEmployee} />
        </Route>

        <Route path='/job/:id'>
          <JobDescription jobs={jobs} />
        </Route>

        <Route path='/house-wanted/:id'>
          <HouseWantedDescription houseWanted={houseWanted} />
        </Route>

        <Route path='/account'>
          <Account currentUser={currentUser} />
        </Route>

        <Route path='/houses-for-rent'>
          <HousesForRent housesForRent={housesForRent} />
        </Route>

        <Route path='/houses-for-rent-by-employee'>
          <HousesWanted houseWanted={houseWanted} />
        </Route>

        <Route path='/account-edit'>
          <AccountEdit currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path='/jobs-by-employee'>
          <JobsByEmployee jobsByEmployee={jobsByEmployee} />
        </Route>

        <Route path='/account-listings'>
          <AccountListings
            currentUser={currentUser}
            jobs={jobs}
            jobsByEmployee={jobsByEmployee}
            housesForRent={housesForRent}
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

        <Route path='/jobs'>
          <Jobs jobs={jobs} />
        </Route>

        <Route path='/'>
          <MainContainer currentUser={currentUser} />
        </Route>

      </Switch>

    </Layout>
  );
}

export default App;
