import Head from "next/head";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>
        <title>{props.title}</title>
      </Head>
      <NavbarComponent />
      <div className="mt-2">{props.children}</div>
      <Footer />
    </div>
  );
}
