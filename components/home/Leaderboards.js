import { Component } from "react";
import { Table } from "reactstrap";
import { db } from "../../firebase/config";
import Link from "next/link";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

class Leaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, items: [], DataisLoaded: false, ids: [] };
  }

  async fetch() {
    var temp = [];
    var tempid = [];
    const q = query(collection(db, "leaderboards"), orderBy("total_playtime", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
      tempid.push(doc.id);
    });
    this.setState({
      items: temp,
      ids: tempid,
    });
  }

  componentDidMount() {
    this.fetch();
  }
  render() {
    const { items, ids } = this.state;

    const slides = items.map((item, idx) => {
      return (
        <tr key={idx + 1}>
          <th scope="row">{idx + 1}</th>
          <td>
            <Link href={"/profile/" + ids[idx]}>{item.name}</Link>
          </td>
          <td>{item.total_playtime} hours</td>
        </tr>
      );
    });

    return (
      <div>
        <style>
          {`.leaderboards {
              max-width: 100%;
              height: 205px;
              display: flex;
              flex-direction: column;
              font-size:14px;
            }

            #lead td {
              padding: 2px 2px 2px 2px;
              margin:0px;
              height: 40px;
              vertical-align:middle;
            }

            #lead th {
              padding: 2px 2px 2px 15px;
              margin:0px;
              height: 40px;
              vertical-align:middle;
            }
           
            a {
              text-decoration: none;
              color: inherit;
            }
            a:hover {
              color:inherit; 
              text-decoration:none; 
              cursor:pointer;
            }`}
        </style>
        <h3>LEADERBOARDS</h3>
        <div className="container d-flex leaderboards">
          <div className="row">
            <Table id="lead" striped>
              <tbody>{slides}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboards;
