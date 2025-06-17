import { useState } from 'react';
import App from './Pages/App';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router';

function Index() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route Index path='/' element={<App isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        <Route path='/login' element={<Signin onSignIn={() => setIsSignedIn(true)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;