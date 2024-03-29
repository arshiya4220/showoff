import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share1.mp4';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode} from "jwt-decode";
import logo from '../assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import {client} from '../client'
const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        console.log(response)
        const decoded : { name: string , picture : string , sub : string} = jwtDecode(response.credential);
        
        localStorage.setItem('user', JSON.stringify(decoded));

        const User=JSON.parse(localStorage.getItem('user'));
        console.log(User.picture)
        const { name, picture, sub } = decoded;
        console.log(decoded);
        const doc = {
          _id: sub,
          _type: 'user',
          userName: name,
          image: picture,
        };
        client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
          });
    };
    // const clientId = {`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
    const clientId = '314098279190-s2le3hbkdkbdbpmenjgiflpqb44vjvdt.apps.googleusercontent.com'
//    console.log(clientId)
    return (
        <div className="w-screen h-screen flex justify-start items-center flex-col">
            <div className=" relative w-full h-full">
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-opacity-30 bg-black">
                    <div className="p-5 bg-transparent">
                        <img src={logo} width="130px" />
                    </div>
                    <div className="shadow-2xl">
                        <GoogleOAuthProvider
                        clientId = {clientId}
                        //    clientId={clientId}
                        >
                            <GoogleLogin
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className="bg-white text-white bg-opacity-10 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}>
                                        <FcGoogle className="mr-4" /> Sign in with google
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            />
                        </GoogleOAuthProvider>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login