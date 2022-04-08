import Link from "next/link";
import { Button, Row, Col, Badge, Container, Table, Card, CardImg, CardBody, } from "reactstrap";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout from "../../components/layouts/Layout";
import { auth } from '../../firebase/config'

export default function Profile() {
  const [dataUser, setDataUser] = useState([])

  const data = []
  const user = auth.currentUser
  useEffect(() => {
    data.push(user)
    setDataUser(data[0])
    // console.log(data[0].email)
  }, [])

  return (
    <div>
      <Layout title="Profile">
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto" md="4" lg="4">
              <div className="mt-2 text-center">
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
                    <th scope="row">Joined</th>
                    <td>: {dataUser.metadata.creationTime}</td>
                  </tr> */}
                  <tr>
                    <th scope="row">Level</th>
                    <td>: Easy</td>
                  </tr>
                  <tr>
                    <th scope="row">Game Played</th>
                    <td>: Times<Badge pill>12</Badge></td>
                  </tr>
                </tbody>
              </Table>
              <div className="mt-2 text-center">
                <Link href="/profile/update">
                  <Button color="primary">Update Profile</Button>
                </Link>
              </div>
            </Col>
            <Col xs="auto" lg="8">
              <div>
                <h1 className="display-4">Your Games</h1>
                <p className="lead">Some of the games you've played, along with the scores you've earned in those games.</p>
                <hr className="my-2" />
              </div>
              <Col xs="6" lg="6">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <Table size="sm">
                      <tbody>
                        <tr>
                          <td>Game</td>
                          <td>: RPS</td>
                        </tr>
                        <tr>
                          <td>Level</td>
                          <td>: Easy</td>
                        </tr>
                        <tr>
                          <td>Score</td>
                          <td>: 12 point</td>
                        </tr>
                        <tr>
                          <td>Last Play</td>
                          <td>: 22/2/2022</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Button color="primary">Play Again</Button>
                  </CardBody>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
