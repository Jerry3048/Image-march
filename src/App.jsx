import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./components/Signin.jsx";
import Nav from "./components/Nav.jsx";
import Logo from "./components/Logo.jsx";
import Imagelink from "./components/Imagelink.jsx";
import Facerecognition from "./components/Facerecognition.jsx";
import Rank from "./components/Rank.jsx";
import Design from "./components/Design.jsx";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleImageSubmit = (url) => {
    setImageUrl(url);
  };

  return (
    <div className="relative min-h-screen h-screen overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white">
      <div className="absolute inset-0 z-0">
        <Design />
      </div>
      <div className="relative z-10 ">
        {isSignedIn && <Nav  onLogout={() => setIsSignedIn(false)} />}
        <Logo />
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? (
                <Navigate to="/home" />
              ) : (
                <Signin onSignIn={() => setIsSignedIn(true)} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isSignedIn ? (
                <div>
                  <Rank />
                  <Imagelink onSubmit={handleImageSubmit} />
                  <Facerecognition imageUrl={imageUrl} />
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;