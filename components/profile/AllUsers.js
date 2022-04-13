import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";

function AllUsers() {
  const [users, setUsers] = useState([])
  const auth = getAuth();

  const data = []
  const user = auth.currentUser

  data.push(user)
  // setDataUser(data[0])

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // const user = {
        //   Name: profile.displayName,
        //   Email: profile.email,
        //   PhotoURL: profile.photoURL,
        // }
        // setUsers(profile)
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    console.log(users)
  }, [])

  return (
    <div>
      <Table>
        {/* <thead>
          <tr>
            <th></th>
          </tr>
        </thead> */}
        <tbody>
          {/* {
            users.map((user) => (
              <tr index={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.photoURL}</td>
              </tr>
            ))
          } */}
        </tbody>
      </Table>
    </div>
  )
}

export default AllUsers