import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import { Badge, Table } from "reactstrap";
import { auth } from "../../firebase/config";
import Link from "next/link";
// import Image from "next/image"

function UserDetail() {
  const [dataUser, setDataUser] = useState([])

  // const data = []
  // const user = auth.currentUser
  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      // console.log(user)
      setDataUser(user);
    }
  }

  useEffect(() => {
    // data.push(user)
    // setDataUser(data[0])
    getUser()
  }, [])
  return (
    <div>
      <div className="mt-4 text-center">
        <img
          src={dataUser.photoURL}
          alt="Profile"
          width={250}
          height={250}
        />
        <h3>{dataUser.displayName}</h3>
      </div>
      <Table size="sm">
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>: {dataUser.email}</td>
          </tr>
          {/* <tr>
            <th scope="row">Level</th>
            <td>: Easy</td>
          </tr>
          <tr>
            <th scope="row">Game Played</th>
            <td>: Times<Badge pill>12</Badge></td>
          </tr> */}
        </tbody>
      </Table>
      <div className="mt-2 text-center">
        <Link href={"/profile/update/" + dataUser.uid}>
          <Button color="primary">Update Profile</Button>
        </Link>
      </div>
    </div>
  )
}

export default UserDetail