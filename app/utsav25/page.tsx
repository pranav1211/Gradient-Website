'use client';
import { useEffect } from "react";

const RedirectOnLoad: React.FC = () => {
  useEffect(() => {
    // Redirect to an external URL on component load
    window.location.href = "https://gradient-x-utsav25-special-page.vercel.app/";
  }, []);

  return null; // No UI needed since this component just redirects
};

export default RedirectOnLoad;
