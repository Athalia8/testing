import Layout from "../components/layouts/Layout";
import Category from "../components/layouts/frontpage/Catagory";
import Gameselection from "../components/layouts/frontpage/Gameselection";
import Slidevent from "../components/layouts/frontpage/Slidevent";
import About from "../components/layouts/frontpage/About";

export default function LandingPage() {
  return (
    <Layout title="Landing Page" className="container-flex frame mainframe">
      <Slidevent></Slidevent>
      <Category></Category>
      <Gameselection></Gameselection>
      <About></About>
    </Layout>
  )
}
