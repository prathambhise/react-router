import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
// import About from "./pages/about/About";
import NavBar from "./components/NavBar";
import PageStack1 from "./pages/pagestack/pagestack1/PageStack1";
import PageStack2 from "./pages/pagestack/pagestack2/PageStack2";
import PageStack3 from "./pages/pagestack/pagestack3/PageStack3";
import NoMatch from "./pages/nomatch/NoMatch";
import NestedPages from "./pages/nestedpages/NestedPages";
import PageInside1 from "./pages/nestedpages/insidepages/InsidePage1";
import PageInside2 from "./pages/nestedpages/insidepages/InsidePage2";
import Users from "./pages/droute/users/Users";
import UserDetails from "./pages/droute/userdetails/UserDetails";
import AdminDetails from "./pages/droute/userdetails/AdminDetails";
import React from "react";
// import { lazy, Suspense } from "react";
const LazyAbout = React.lazy(()=> import('./pages/about/About'))

function App() {
  return (
    <>
      <NavBar />
      <div className="body-container-main">
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="about" element={<LazyAbout />} /> */}
          <Route path="about" element={
            <React.Suspense fallback = 'Loading...'><LazyAbout /></React.Suspense>
            } />
          <Route path="pagestack1" element={<PageStack1 />} />
          <Route path="pagestack2" element={<PageStack2 />} />
          <Route path="pagestack3" element={<PageStack3 />} />
          <Route path="nestedpages" element={<NestedPages />}>
            <Route path="page-inside-1" element={<PageInside1 />} />
            <Route path="page-inside-2" element={<PageInside2 />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="users/admin" element={<AdminDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
