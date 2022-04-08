import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const ImgDetail = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const { gid } = router.query;

  const fetchMyAPI = async () => {
    const docRef = doc(db, "games", gid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      //console.log("No such document!");
    }
  };

  useEffect(() => {
    if (gid?.length > 0) {
      fetchMyAPI();
    }
  }, [gid]);

  return (
    <div>
      <img className="img-fluid mt-5" src={data.thumbnail} alt={data.name} />
    </div>
  );
};

export default ImgDetail;
