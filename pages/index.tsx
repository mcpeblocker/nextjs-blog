import type { NextPage } from "next";
import Header from "../components/home/Header";
import Recommendations from "../components/home/Recommendations";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Recommendations />
    </Layout>
  );
};

export default Home;
