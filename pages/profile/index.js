import Link from "next/link";
import { Button, Row, Col, Badge, Container, Table, Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";
import Image from 'next/image'
import Layout from "../../components/layouts/Layout";

export default function Profile() {
  return (
    <div>
      <Layout title="Profile">
        <Container>
          <Row>
            <Col xs="auto" lg="4">
              <div className="mt-2 text-center">
                <Image
                  src="/user.png"
                  alt="Profile"
                  width={50}
                  height={50}
                />
                <h3>Username</h3>
              </div>
              <Table size="sm">
                <tbody>
                  <tr>
                    <th scope="row">Email</th>
                    <td>: email@email.com</td>
                  </tr>
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
                  <Button>Update Profile</Button>
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
                    <Button>Play Again</Button>
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
