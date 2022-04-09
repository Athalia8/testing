import Layout from "../../components/layouts/Layout";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Collapse, Row } from 'reactstrap';
import Image from 'next/image'

export default function ProfileUpdate() {
  return (
    <div>
      <Layout title="Update Profile">
        <Container>
          <Row className=" justify-content-center">
            <Col lg="4">
              <div className="mt-5 text-center">
                <h3>Update Your Profile</h3>
                <Image
                  src="/user.png"
                  alt="Profile"
                  width={50}
                  height={50}
                />
              </div>
              <Form>
                <FormGroup>
                  <Label>Update Foto :</Label>
                  <Input type="file" name="file" />
                </FormGroup>
                <FormGroup>
                  <Label>Username :</Label>
                  <Input type="text" name="text" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <Label>Email :</Label>
                  <Input type="email" name="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label>Password :</Label>
                  <Input type="password" name="password" placeholder="Password" />
                </FormGroup>
                <div className="text-center">
                  <Button>Save</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
