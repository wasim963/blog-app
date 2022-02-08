import './App.scss';
import { Route, Routes } from 'react-router-dom';


import { Home } from './components/pages/home/Home';
import { Login } from './components/pages/login/Login';
import { Register } from './components/pages/register/Register';
import { Settings } from './components/pages/settings/Settings';
import { Single } from './components/pages/single/Single';
import { Write } from './components/pages/write/Write';
import { Topbar } from './components/topbar/Topbar';
import { NoMatch } from './components/pages/noMatch/NoMatch';

function App() {

  const user = false

  return (
    <div className="App">
      <Topbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='write' element={ <Write /> } />
          <Route path='setting' element={ <Settings /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
          <Route path='posts/:postId' element={ <Single /> } />
          <Route path='*' element={ <NoMatch /> } />
      </Routes>
    </div>
  );
}

export default App;
