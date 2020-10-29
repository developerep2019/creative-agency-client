import React, { useContext } from 'react';
import firebase from "firebase/app";
import firebaseConfig from '../firebase.config';
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../../images/icons/google.png';
import mainLogo from '../../../images/logos/logo.png';
import './login.css'
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { login, logged } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [isLogin, setIsLogin] = logged;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Unique token from firebase
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(token => {
                sessionStorage.setItem('token', token)
                history.replace(from);
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    //Google Sign In here
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL };
                setLoggedInUser(signedInUser);
                setIsLogin(true);
                setUserToken();
            })
            .catch(err => {
                var errorCode = err.code;
                var errorMsg = err.message;
                alert(err.message)
            });
    }

    //Google sign out here 
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(result => {
                setIsLogin(false);
            })
            .catch(err => {
                alert(err.message)
            })
    }
    return (
        <section className="container mx-auto row flex-column align-items-center py-5">
            <div className="col-md-4 mt-5">
                <div className="text-center">
                    <img style={{ width: '120px', marginBottom: '3em' }} src={mainLogo} alt="" />
                </div>
                <div className="card py-5 text-center">
                    <h4 className="text-center mb-4">Login with</h4>
                    <button onClick={handleGoogleSignIn} className="g-signIn"><img src={googleIcon} alt="" /> Continue with Google </button>
                </div>
            </div>
        </section>
    );
};

export default Login;