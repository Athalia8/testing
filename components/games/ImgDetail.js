import { useEffect, useState } from "react";

const ImgDetail = ({ detailGame }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(detailGame);
  }, [detailGame]);

  return (
    <div>
      <img className="img-fluid mt-5" src={data.thumbnail} alt={data.name} />
    </div>
  );
};

export default ImgDetail;
