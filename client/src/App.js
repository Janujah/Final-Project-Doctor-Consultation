import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './Components/login'
import Registration from './Components/Registration'
import DocRegistration from './Components/Registration'
import TechRegistration from './Components/Registration'
import Who from './Components/RU'
import Forgot from './Components/forgo';
import Verify from './Components/verify';
import Passsword from './Components/password';
import Ok from './Components/ok';
import LandingPage from './pages/landing-page';
import OS from './pages/About'
import Doc from './pages/Doctor'
import Equi from './pages/Equipment'
import CU from './pages/contactus'







function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user/signup' element={<Registration/>}/>
      <Route path='/signup' element={<Who/>}/>
      <Route path='/FP' element={<Forgot/>}/>
      <Route path='/code' element={<Verify/>}/>
      <Route path='/password' element={<Passsword/>}/>
      <Route path='/ok' element={<Ok/>}/>
      <Route path='/Doctor/signup' element={<DocRegistration/>}/>
      <Route path='/Technician/signup' element={<TechRegistration/>}/>
      <Route path='/ourservices' element={<OS/>}/>
      <Route path='/our-services/doctors' element={<Doc/>}/>
      <Route path='/our-services/equipments' element={<Equi/>}/>
      <Route path='/contactus' element={<CU/>}/>
      <Route path='/' element={<LandingPage/>}/>




      </Routes>

    </div>
  );
}

export default App;
