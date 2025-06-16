import { useState } from "react";
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
    <Nav />
    <Logo />

        {!isSignedIn ? (
          <Signin onSignIn={() => setIsSignedIn(true)} />
        ) : (
          <div>
            <Rank />
            <Imagelink onSubmit={handleImageSubmit} />
            <Facerecognition imageUrl={imageUrl} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;