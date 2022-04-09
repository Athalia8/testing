import Image from "next/image";
import img from "../../public/img.png";

const Cardimage = () => {
  return (
    <div className="container">
      <Image
        alt="Card image cap"
        src={img}
        width={750}
        height={500}
      />
    </div>
  );
};

export default Cardimage;
