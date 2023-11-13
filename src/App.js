
import './App.css';
import Formation from './components/Formation';

import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
function App() {
  return (
    <>
    {/* <Navbar/>
      kkk
      <DepartmentList/>
<DoctorsList/>
<Footer/> */}

<BrowserRouter>
<Routes>
  <Route path='/' element={<Formation/>}>
    <Route index element={<MainComponent/>}/>
  </Route>

</Routes>
</BrowserRouter>

    </>
  );
}

export default App;