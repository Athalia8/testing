import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Table } from "reactstrap"
import { auth, db } from "../../firebase/config"

export default function GameRPS() {
  const [dataUser, setDataUser] = useState([])
  const [RPS, setRPS] = useState([])


  async function getUsers() {
    // const docRef = doc(db, "users");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   docSnap.map((doc) => {

    //     console.log(doc.data())
    //   })
    // }
  }

  const data = []
  const user = auth.currentUser

  async function getRPS() {
    try {
      const array = []
      const q = query(collection(db, "rps_game_points"), orderBy("total", "desc"));
      const querySnapshot = await getDocs(q);
      // const querySnapshot = await getDocs(collection(db, "rps_game_points"));
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setRPS(array);
    } catch (error) {
      console.log(error.code)
    }
  }


  useEffect(() => {
    data.push(user)
    setDataUser(data[0])
    getRPS()
  }, [])

  return (
    <div>
      <h5 className="text-center">Score Game Rock Paper Scissors</h5>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Level</th>
            <th>Last Play</th>
          </tr>
        </thead>
        <tbody >
          {
            RPS.map((item) => (
              <tr index={item.id}>
                <th>{item.username}</th>
                <td>{item.total} point</td>
                <td>-</td>
                <td>{item.updated_at}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      {
        RPS == "" ? <p className="text-danger text-center">You haven't played it yet</p> : ''
      }
    </div>
  );
}