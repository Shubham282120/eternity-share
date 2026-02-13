import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import About from "./pages/about";
import Services from "./pages/services";
import Events from "./pages/event";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Pricing from "./pages/pricing";
import WeddingPlanning from "./pages/weddingplanning";
import BabyShower from "./pages/babyshower";
import CorporateEvents from "./pages/corporateevents";
import BirthdayDecoration from "./pages/birthdaydecoration";
import SurpriseDecoration from "./pages/surprisedecoration";
import EventDetails from './pages/EventDetails';  // ← Fixed: Added 's'

import { MasterLayout } from "./components/MasterLayout";
// import Eventdetail from "./pages/eventdetail";

function App() {
  const isLoaded = useRef();
  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    const librArrayPath = [
      'jquery.min.js', 'bootstrap.min.js', 'fancybox.min.js',
      'swiper.min.js', 'datepicker.min.js', 'smooth-scrollbar.js',
      'overscroll.js', 'TweenMax.min.js', 'scripts.js'
    ];

    const loadScriptsSequentially = async (paths) => {
      for (const path of paths) {
        const fullPath = `/assets/js/${path}`;
        if (document.querySelector(`script[src="${fullPath}"]`)) continue;

        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = fullPath;
          script.async = false;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }
    };

    loadScriptsSequentially(librArrayPath)
      .then(() => console.log("All scripts loaded in order"))
      .catch(err => console.error("Script load failed", err));
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/eventdetail" element={<Eventdetail />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/weddingplanning" element={<WeddingPlanning />} />
          <Route path="/babyshower" element={<BabyShower />} />
          <Route path="/corporateevents" element={<CorporateEvents />} />
          <Route path="/birthdaydecoration" element={<BirthdayDecoration />} />
          <Route path="/surprisedecoration" element={<SurpriseDecoration />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;