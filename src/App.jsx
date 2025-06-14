import { useState } from "react";
import Signin from "./components/Signin";
import Nav from "./components/Nav";
import Logo from "./components/logo";
import Imagelink from "./components/Imagelink";
import Facerecognition from "./components/Facerecognition";
import Rank from "./components/Rank";
import Design from "./components/Design";

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