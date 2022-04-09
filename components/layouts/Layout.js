import Head from "next/head";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <NavbarComponent />
      <div className="mt-5">{props.children}</div>
      <Footer />
    </div>
  );
}
