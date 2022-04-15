import Layout from "../../../components/layouts/Layout";
import { Col, Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";

export default function ProfileUpdate() {
  const [data, setData] = useState([])
  const [dataUser, setDataUser] = useState([])
  const [preview, setPreview] = useState("")
  const [file, setFile] = useState("")
  const [photoURL, setPhotoURL] = useState("")

  const array = []
  const user = auth.currentUser
  useEffect(() => {
    array.push(user)
    setDataUser(array[0])
  }, [])

  const changeUsername = (e) => {
    const value = e.target.value
    setData({ ...data, username: value })
  }
  const changeEmail = (e) => {
    const value = e.target.value
    setData({ ...data, email: value })
  }
  const changePassword = (e) => {
    const value = e.target.value
    setData({ ...data, password: value })
  }

  const setPhoto = () => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images/users/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            console.log('storage/unauthorized')
            break;
          case 'storage/canceled':
            console.log('storage/canceled')
            break;
          case 'storage/unknown':
            console.log('storage/unknown')
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setPhotoURL(downloadURL)
        });
      }
    );
  }

  const changePhoto = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0])
    setPreview(url);
    // console.log(file)
    setPhoto()
  }

  const updateUser = () => {

    // Update User Detail
    updateProfile(user, {
      displayName: data.username,
      photoURL: photoURL,
    }).then(() => {
      console.log("Profile updated!")
    }).catch((error) => {
      console.log(error.message)
    });
    updateEmail(user, data.email)
      .then(() => {
        console.log("Email updated!")
      }).catch((error) => {
        console.log(error.message)
      });
    updatePassword(user, data.password)
      .then(() => {
        console.log("Password updated!")
      }).catch((error) => {
        console.log(error.message)
      });
  }

  return (
    <div>
      <Layout title="Update Profile">
        <Container>
          <Row className=" justify-content-center">
            <Col lg="4">
              <div className="mt-5 text-center">
                <h3>Update Your Profile</h3>
                {
                  !preview ?
                    (<img
                      src={dataUser.photoURL}
                      alt="Profile"
                      width={200}
                      height={200}
                    />) :
                    (<img
                      src={preview}
                      alt="Profile"
                      width={200}
                      height={200}
                    />)
                }
              </div>
              <Form>
                <FormGroup>
                  <Label>Update Foto :</Label>
                  <Input type="file" name="file" onChange={changePhoto} />
                </FormGroup>
                {/* <Button color="primary" onClick={setPhoto}>Select Foto</Button> */}
                <FormGroup>
                  <Label>Username :</Label>
                  <Input type="text" name="text" placeholder={dataUser.displayName} value={data.username} onChange={changeUsername} />
                </FormGroup>
                <FormGroup>
                  <Label>Email :</Label>
                  <Input type="email" name="email" placeholder={dataUser.email} value={data.email} onChange={changeEmail} />
                </FormGroup>
                <FormGroup>
                  <Label>Password :</Label>
                  <Input type="password" name="password" placeholder="******" value={data.password} onChange={changePassword} />
                </FormGroup>
                <div className="text-center">
                  <Button color="primary" onClick={updateUser}>Save</Button>
                </div>
              </Form>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Layout>
    </div>
  );
}
