import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import NavBar from './pages/navBar';
import Home from './pages/home';
import OrdersComponent from './pages/Orders';``
import Register from './pages/Register';
import Logout from './components/Logout';

import Kidnapped from './components/Kidnapped';
import Users from './pages/Users';


function App() {
	return (
		<BrowserRouter>
			<>
				<NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/orders" element={<OrdersComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/users" element={<Users/>}/>
          <Route path={'*'} element={<h1>404 Not Found</h1>} />
        </Routes>
        <Kidnapped/>
      </>
    </BrowserRouter>
  );
}

export default App;
