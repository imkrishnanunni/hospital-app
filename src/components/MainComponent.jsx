import React, { useContext } from 'react'
import { MyContext } from './MyContext';
// import DoctorsList from './DoctorsList';

import Home from './Home';
import DepartmentPage from './DepartmentPage';
function MainComponent() {
    const {hospital ,setHospital}=useContext(MyContext);

  return (
    <>
    {(hospital == "") && <Home/> }

    {(hospital != "") && <DepartmentPage/>}
    
    </>
  );
};

export default MainComponent;
