import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
