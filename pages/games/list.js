import Head from "next/head";
import DetailList from "../../components/list/DetailList";
import Content from "../../components/list/Content";
import styles from "../../styles/Home.module.css";
import NavbarComponent from "../../components/layouts/NavbarComponent";
import Footer from "../../components/layouts/Footer";

export default function List() {
  return (
    <div className={styles.container}>
      <Head>
        <title>List Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent></NavbarComponent>
      <Content></Content>
      <DetailList></DetailList>
      <Footer></Footer>
    </div>
  );
}
