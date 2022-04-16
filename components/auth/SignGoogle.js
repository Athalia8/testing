import { Button } from 'reactstrap';
// import { useRouter } from 'next/router'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import styles from './Auth.module.css'
// import { useEffect, useState } from 'react';
// import { auth, db } from '../../firebase/config';
import { signInGoogle } from '../../redux/actions/authGoogleActions';
import { connect } from 'react-redux';

function SignGoogle(props) {
  const { buttonGoogle } = props

  const handleClick = async (e) => {
    e.preventDefault();
    await props.signInGoogle();
  }

  return (
    <div>
      <Button onClick={handleClick} outline color="secondary" className="btn mx-2 px-3">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className={styles.btn_img}
        />
        <span>{buttonGoogle}</span>
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    buttonGoogle: state.google.buttonGoogle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInGoogle: (creds) => dispatch(signInGoogle(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignGoogle);