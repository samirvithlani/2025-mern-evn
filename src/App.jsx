import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Footer } from "./components/Footer";
import { MapDemo } from "./components/MapDemo";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { Employee } from "./components/Employee";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Students } from "./components/Students";
import { MyButton } from "./components/MyButton";
import { Route, Routes } from "react-router-dom";
import { Navabar } from "./components/Navabar";
import { TeamList } from "./components/ipl/TeamList";
import { Players } from "./components/ipl/Players";
import { IPL } from "./components/ipl/IPL";
import { Error404 } from "./components/Error404";
import { TeamDetail } from "./components/ipl/TeamDetail";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { FindBomb } from "./components/FindBomb";
import { FormDemo1 } from "./components/FormDemo1";
import { FormDemo2 } from "./components/FormDemo2";
import { FormDemo3 } from "./components/FormDemo3";
import { FormDemo4 } from "./components/FormDemo4";
import { FormDemo5 } from "./components/FormDemo5";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { UseEffectDemo2 } from "./components/UseEffectDemo2";
import { UseEffectDemo3 } from "./components/UseEffectDemo3";
import { ApiDemo1 } from "./components/ApiDemo1";
import { ApiDemo2 } from "./components/ApiDemo2";
import { ApiDemo3 } from "./components/ApiDemo3";
import { ApiDemo4 } from "./components/ApiDemo4";
import { ApiDemob1 } from "./components/ApiDemob1";
import { UpdateUser } from "./components/UpdateUser";
import { ToastContainer, Zoom } from "react-toastify";
import { ApiDemob2 } from "./components/ApiDemob2";
import { DisplayProduct } from "./components/DisplayProduct";
import { AddManyProducts } from "./components/AddManyProducts";
import { Compnay } from "./components/Company/Compnay";
import { ThemeContext } from "./ThemeContext";
import { ProductComponent } from "./components/ProductComponent";
import { BankComponent } from "./components/BankComponent";
import { Notifications } from "./components/Notifications";
import { NotificationList } from "./components/NotificationList";
import { Login } from "./Login";
import ProtectedRoutes from "./hooks/ProtecteRoutes";
import { SearchInput } from "./components/SearchInput";
import { ButtonDemo } from "./mui/ButtonDemo";

function App() {
  const appFun = () => {
    alert("app function..");
  };
  var title = "React-js";
  var address = {
    city: "Ahmedabad",
    state: "Gujarat",
  };

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };
  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };
  const [isDark, setisDark] = useState(false)
  return (
    <div style={isDark ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{isDark,lightTheme,darkTheme,setisDark}}>
        <Navabar></Navabar>

        <Routes>

          <Route element = {<ProtectedRoutes/>}>

          <Route path="/" element={<IPL />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/usestatedemo" element={<UseStateDemo />}></Route>
          <Route path="/teams" element={<TeamList />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/usememo" element={<UseMemoDemo />}></Route>
          {/* :id wild card char */}
          <Route path="/teamdetail/:id" element={<TeamDetail />}></Route>
          <Route path="/findbomb" element={<FindBomb />}></Route>
          <Route path="/formdemo1" element={<FormDemo1 />}></Route>
          <Route path="/formdemo2" element={<FormDemo2 />}></Route>
          <Route path="/formdemo3" element={<FormDemo3 />}></Route>
          <Route path="/formdemo4" element={<FormDemo4 />}></Route>
          <Route path="/formdemo5" element={<FormDemo5 />}></Route>
          <Route path="/useeffectdemo" element={<UseEffectDemo3 />}></Route>
          <Route path="/apidemo1" element={<ApiDemo2 />}></Route>
          <Route path="/apidemo3" element={<ApiDemo4 />}></Route>
          <Route path="/apidemob1" element={<ApiDemob2 />}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
          <Route path="/products" element={<DisplayProduct />}></Route>
          <Route path="/addproducts" element={<AddManyProducts />}></Route>
          <Route path="/compnay" element={<Compnay />}></Route>
          <Route path="/product" element = {<ProductComponent/>}></Route>
          <Route path="/bank" element = {<BankComponent/>}></Route>
          <Route path="/notifications" element = {<Notifications/>}></Route>
          <Route path="/notificationList" element = {<NotificationList/>}></Route>
          <Route path="/searchinput" element  ={<SearchInput/>}></Route>
          </Route>


          <Route path="/login" element = {<Login/>}></Route>
          <Route path="/muibutton" element = {<ButtonDemo/>}></Route>
          {/* <Route path='/*' element ={<h1>404</h1>}></Route> */}
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </ThemeContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}

export default App;
