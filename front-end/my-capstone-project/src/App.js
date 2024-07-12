import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import City from "./pages/City";
import Transfer from "./pages/Transfer";
import AddCity from "./pages/AddCity"
import Contacts from "./pages/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Footer from "./components/footer/Footer";
import './app.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/città'element={<City />} />
          <Route path='/collegamenti'element={<Transfer />} />
          <Route path='/AggiungiCittà'element={<AddCity/>}/>
          <Route path='/contatti'element={<Contacts />} />
          <Route path='/register'element={<Register />} />
          <Route path='/login'element={<Login />} />
          <Route path='/profile'element={<Profile />} />
          <Route path='*'element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
