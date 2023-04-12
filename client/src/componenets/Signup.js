import React, { useState } from 'react'
import { useHistory, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



    const Signup = () => {
        const history = useHistory();
        const [user, setUser] = useState({ firstname: "",lastname: "", email: "",gender:"", phone: "", age: "", password: "", confirmpassword: "" })
        
        let name, value;
        const handleInputs = (e) => {
            name = e.target.name;
            value = e.target.value;

            setUser({ ...user, [name]: value });
        }

        const PostData = async (e) => {
            e.preventDefault();

            const { firstname,lastname, email,gender, phone, age, password, confirmpassword } = user;
            console.log("My self 4");
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,lastname, email,gender, phone, age, password, confirmpassword
                })
            });
            console.log("My self 34");

            const data = await res.json();

            if (res.status === 422 || !data) {
                toast.warn(' Invalid Crediental ');
                window.alert("Invalid Crediental ");
                console.log("registration failed");
            } else {
                toast.success(' User Registered Successfully ✔ ');
                window.alert("User Registered Successfully");
                history.push("/signin");
            }

        }

        return ( 
            <>
            <section className="signup">
                <div className="container m--5">
                    <div className="d-flex p-75">
                        <div className="signup-form w-50 m-auto ml-75 mr-75 mt-0 mb-0">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="w-100" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi  m-3 m-3 zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="firstname" id="firstname" autoComplete="off" 
                                        value={user.firstname}
                                        onChange= {handleInputs}
                                     placeholder="Your First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi  m-3 zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="lastname" id="lastname" autoComplete="off" 
                                        value={user.lastname}
                                        onChange= {handleInputs}
                                     placeholder="Your Last Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi  m-3 zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off" 
                                        value={user.email}
                                        onChange= {handleInputs}
                                     placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender"><i className="zmdi  m-3 zmdi-email"></i></label>
                                    <input type="text" name="gender" id="gender" autoComplete="off" 
                                        value={user.gender}
                                        onChange= {handleInputs}
                                     placeholder="Your Gender" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone"><i className="zmdi  m-3 zmdi-phone-in-talk"></i></label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" 
                                        value={user.phone}
                                        onChange= {handleInputs}
                                     placeholder="Mobile Number" />
                                </div>

                                  <div className="form-group">
                                    <label htmlFor="age"><i class="zmdi m-3 zmdi-slideshow"></i></label>
                                    <input type="number" name="age" id="age" autoComplete="off" 
                                        value={user.age}
                                        onChange= {handleInputs}
                                     placeholder="Your Age" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi  m-3 zmdi-lock"></i></label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                        value={user.password}
                                        onChange= {handleInputs}
                                     placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmpassword"><i className="zmdi  m-3 zmdi-lock-outline"></i></label>
                                    <input type="password" name="confirmpassword" id="confirmpassword" autoComplete="off" 
                                        value={user.confirmpassword}
                                        onChange= {handleInputs}
                                     placeholder="Confirm your password" />
                                </div>
                        
                                <div className="form-group text-center">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" 
                                        onClick={PostData}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-auto mt-5">
                            <figure><img src="https://previews.123rf.com/images/stuartphoto/stuartphoto1402/stuartphoto140200612/26064304-login-character-laptop-showing-website-sign-in-or-signin.jpg" height="500px" width="400px" alt="registartion pic" /></figure>
                            <NavLink to="/signin" className="signup-image-link">I am already register</NavLink>
                        </div>
                    </div>
                    </div>
                </section>
                <ToastContainer position = "top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover />

            </>
        )
    }

    export default Signup