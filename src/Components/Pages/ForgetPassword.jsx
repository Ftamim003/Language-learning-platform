import { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const emailRef=useRef();
     const {forgetPassword}=useContext(AuthContext);
    const handleResetPassword = () => {
       
        const email= emailRef.current.value;
        if(!email){
            alert("Please enter your email address.")
            return
        }else{

            forgetPassword(email)
            .then(()=>{
                alert("Reset password sent successfully")
                window.location.href = "https://mail.google.com/";
            })
        }
    };
    return (
        <div >
            <div className="flex flex-col items-center bg-blue-50 pt-20 p-3 min-h-[540px]">
        <h2 className="text-2xl font-bold">Forgot Password?</h2>
        <p className="text-gray-600 my-4">Enter your email to reset your password</p>
        <input
             ref={emailRef}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered mb-4"
        />
        <button onClick={handleResetPassword} className="btn btn-primary">
            Reset Password
        </button>
        
    </div>
    <Footer></Footer>
        </div>
    );
};

export default ForgetPassword;