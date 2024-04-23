import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './Components/login'
import Registration from './Components/Registration'
import Who from './Components/RU'
import Forgot from './Components/forgo';
import Verify from './Components/verify';
import Passsword from './Components/password';
import Ok from './Components/ok'




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Registration/>}/>
      <Route path='/Id' element={<Who/>}/>
      <Route path='/FP' element={<Forgot/>}/>
      <Route path='/code' element={<Verify/>}/>
      <Route path='/password' element={<Passsword/>}/>
      <Route path='/ok' element={<Ok/>}/>


      </Routes>

    </div>
  );
}

export default App;
