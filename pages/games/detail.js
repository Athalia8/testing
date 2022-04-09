import Game from "../../components/gamedetail/Game";
import NavbarComponent from "../../components/layouts/NavbarComponent";
import Footer from "../../components/layouts/Footer";

export default function GameDetail() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Game />
      <Footer></Footer>
    </div>
  );
}
