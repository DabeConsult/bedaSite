import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import AppDevServices from "./pages/AppDevServices";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import { useContext } from "react";
import ProjectDetails from "./pages/ProjectDetails";
import DataContext from "./reducers";
import BlogDetails from "./pages/BlogDetails";
import LandingPage from "./pages/LandingPage";
import HealthPage from "./pages/HealthPage";
import FarmingPage from "./pages/FarmingPage";

function App() {
  const {data, loading} = useContext(DataContext);

  return (
    !loading && (
      <Routes>
        <Route>
          <Route index element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="farming" element={<FarmingPage />} />
          <Route path="services" element={<Services />} />
          <Route path="app/:appID" element={<AppDevServices />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectsDet/:projectID" element={<ProjectDetails />} />
          <Route path="blogDet/:blogID" element={<BlogDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          {/* <Route path="api/newsletter" element={<Newsletter />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    )

    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route index element={<Services />} />
    //     {/* <Route path="/services" element={<Services />} /> */}
    //     <Route path="app" element={<AppServices />} />
    //   </Route>
    //   <Route path="*" element={<ErrorPage />} />
    // </Routes>
  );
}

export default App;
