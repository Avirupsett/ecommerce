import React from "react";
import PageRoute from './routes/PageRoute';
import PageNavbar from "./components/PageNavbar";
import UserAxios from "./Axios/UserAxios";
import DashMain from './pages/Dashboard/Main';
// import DashboardRoutes from './pages/Dashboard/DashboardRoutes';


function App() {
  const { getToken } = UserAxios();
 
  if (!getToken()) {
    return (
      <>
        <PageNavbar />
        <PageRoute/>
      </>
    );
  }

  return(
    <>
      <DashMain/>
     
    </>
  )

}

export default App;
