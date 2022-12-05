
import './App.css';  
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import BoxerActions from './Components/BoxerActions';
import RegActions from './Components/RegActions';
import Register from './Components/Register';
// import ValidatedLoginForm from './Components/ValidateLoginForm';

 
function App() {  
  return (  
      <div>
       <Routes>
       <Route path='/Login' element={<BoxerActions className='App-header'/>} />
       <Route path='/' element={<Login/>} />
       <Route path='/Register' element={<RegActions className='App-header'/>} />
       <Route path='/' element={<Register/>} />
       {/* <h1>Validated Login Form</h1>
      <ValidatedLoginForm /> */}

       </Routes>
      </div>
  );
}  
  
export default App;  