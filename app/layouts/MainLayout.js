"use client";

import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";
import Footer from "./includes/Footer";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", function () {
      let res = localStorage.getItem("isLoading");
      res === "false" ? setIsLoading(false) : setIsLoading(true);
    });
  }, []);

  return (
    <>
      <div
        id="MainLayout"
        className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div>
          {isLoading ? <Loading /> : null}
          <TopMenu />
          <MainHeader />
        </div>

        <div>{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
