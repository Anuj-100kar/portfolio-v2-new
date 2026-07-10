import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import ProjectDetails from "./sections/Projects/ProjectDetails";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <LoadingScreen />

  }
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Project Details Page */}
          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}