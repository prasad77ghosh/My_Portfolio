import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Article, Contact, Home, Portfolio, Resume } from "./pages";
import { useState, useEffect } from "react";
import { SplashScreen } from "./components";
const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    let timeOutId: number;
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    } else {
      timeOutId = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 6000);
    }
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, [showSplash]);

  return (
    <>
      <BrowserRouter>
        <main className="main-cont">
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={showSplash ? <SplashScreen /> : <Home />}
            />
            {/* <Route path="/" element={<SplashScreen />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
