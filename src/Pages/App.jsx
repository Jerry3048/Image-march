import { useState } from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Imagelink from "../components/Imagelink";
import Facerecognition from "../components/Facerecognition";
import Rank from "../components/Rank";
import Design from "../components/Design.jsx";

import  { useNavigate } from 'react-router';

function App({ isSignedIn = false, setIsSignedIn = () => {} }) {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  if (!isSignedIn) {
    navigate("/login");
  }

  const handleImageSubmit = (url) => setImageUrl(url);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-fuchsia-600 to-blue-500">
      <div className="absolute inset-0 z-0">
        <Design />
      </div>
      <div className="relative z-10">
        <Nav onLogout={() => setIsSignedIn(false)} />
        <Logo />
        <Rank />
        <Imagelink onSubmit={handleImageSubmit} />
        <Facerecognition imageUrl={imageUrl} />

      </div>
    </div>
  );
}

export default App;