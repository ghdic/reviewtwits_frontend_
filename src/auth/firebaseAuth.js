import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, updatePassword } from "firebase/auth";
import firebaseKey from '../config/firebaseKey.json'

initializeApp(firebaseKey);
export const auth = getAuth();

export const loginGoogle = () => {
    console.log("hi")
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .catch((error) => {
            alert(error.message)
        })
    //     .then((result) => {
    //     // const credential = GoogleAuthProvider.credentialFromResult(result);
    //     //const token = credential.accessToken;
    //     const firebaseUser = result.user;
    // }).catch((error) => {
    //     console.log(error.message)
    // })
}

export const loginFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
        .catch((error) => {
            alert(error.message)
        })
}

export const loginTwitter = () => {
    const provider = new TwitterAuthProvider();
    return signInWithPopup(auth, provider)
        .catch((error) => {
            alert(error.message)
        })
}

export const logout = () => {
    return signOut(auth);
}

export const updateUserPassword = (password) => {
    updatePassword(auth.currentUser, password).then(() => {
        alert("성공적으로 비밀번호가 업데이트 되었습니다!")
    }).catch((error) => {
        alert(error)
    })
}

export const sendResetEmail = () => {
    const email = auth.currentUser.Email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert(`${email}로 비밀번호 초기화 메일이 전송되었습니다!`)
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}