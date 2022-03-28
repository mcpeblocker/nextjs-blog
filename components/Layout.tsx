import { FC } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import SEO from './common/SEO';
import { ISEO } from "./common/seo.interface";

interface Props {
  seo?: ISEO
}

const Layout: FC<Props> = ({ children, seo }) => {
  return (
    <div className="container">
        <SEO {...seo }/>
        <Navbar />
        {children}
        <Footer />
    </div>
  );
};

export default Layout;
