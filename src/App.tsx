import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Article, Contact, Home, Portfolio, Resume } from "./pages";
import { useState, useEffect } from "react";
import { Navbar, SplashScreen } from "./components";
import classes from "./App.module.css";
const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  //splash screen mechanism
  useEffect(() => {
    let timeOutId: number;
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    } else {
      timeOutId = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 7000);
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
        {showSplash ? (
          <SplashScreen />
        ) : (
          <main className={classes.main_cont}>
            <div className={classes.nav_cont}>
              <Navbar />
            </div>
            <div className={classes.route_cont}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/article" element={<Article />} />
              </Routes>
            </div>
          </main>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
