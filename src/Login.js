// import React from 'react'
// import "./Login.css"
// import { Button } from '@material-ui/core'
// import { auth, provider } from './firebase'
// import { useDispatch } from 'react-redux'
// import { login } from './features/userSlice'

// const Login = () => {
//     const dispatch = useDispatch();

//     const signIn = () =>{
//         auth.signInWithPopup(provider)
//         .then(({user})=>{
//             dispatch(login({
//                 displayName : user.displayName,
//                 email: user.email,
//                 photoUrl: user.photoUrl
//             }))
//         })
//         .catch(error => alert(error.message));
//     }
//   return (
//     <div className='login'>
//         <div className='login__container'>
//         <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912006/gmail-icon-md.png" alt="Gmail Logo"/>
//         <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
//         </div>
//     </div>
//   )
// }

// export default Login