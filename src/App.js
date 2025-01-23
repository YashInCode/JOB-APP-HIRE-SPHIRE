import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import CreateAccount from './User/signup';
import Login from './User/login';
import Home from './home';
import TopHeader from './header';



function App ()  {

  return (
    <HashRouter>
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<CreateAccount />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
