import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";

function Login() {
  const [code, setCode] = useState("");
  const [isCodeExpired, setIsCodeExpired] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
const [count,setCount] = useState(0)
  useEffect(() => {
    generateCode();
    const expirationTimer = setTimeout(() => {
      setIsCodeExpired(true);
    }, 60000); // 1 minute
    return () => clearTimeout(expirationTimer);
  }, [count]);

  const generateCode = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCode(newCode);
    setIsCodeExpired(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (enteredCode === code && !isCodeExpired) {
      try {
        const response = await fetch(
          "https://grocery-18ng.onrender.com/api/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        );

        if (response.ok && response.status === 200) {
          const result = await response.json();
          if (result.message === "User Successfully Login!") {
            setSuccessMessage(result.message);
            const UserDetails = result.data;
            // Set token in cookies
            document.cookie = `User=${UserDetails?.token}; path=/;`;
            // Set token in local storage
            localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
            // Set success message and clear error
            setSuccessMessage(result.message);
            setError("");

            setCount(count + 1);
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000); // Hide after 5 seconds
          } else {
            // Handle unexpected success message
            setError(result.message);
            setSuccessMessage("");
            setTimeout(() => {
              setError("");
            }, 5000); // Hide after 5 seconds
          }
        } else {
          setError(response?.message || "An error occurred during login.");
          setSuccessMessage("");
          setTimeout(() => {
            setError("");
          }, 5000); // Hide after 5 seconds
        }
      } catch (error) {
        setError("An error occurred during login.");
        setSuccessMessage("");
        setTimeout(() => {
          setError("");
        }, 5000); // Hide after 5 seconds
      }
    } else {
      setError("Invalid code or code expired");
      setSuccessMessage("");
      setTimeout(() => {
        setError("");
      }, 5000); // Hide after 5 seconds
    }
  };
  const handleLogout = () => {
    console.log("SSSSS")
    try {
      localStorage.removeItem("UserDetails");
      document.cookie = "User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const [userDetails, setUserDetails] = useState(null);


  useEffect(() => {
   // Fetch user details from local storage
   const storedUserDetails = localStorage.getItem("UserDetails");
 
   if (storedUserDetails) {
     // Parse the JSON string to get the object
     const parsedUserDetails = JSON.parse(storedUserDetails);
     setUserDetails(parsedUserDetails);
   }
 }, [count]); // Omit the function from the dependency array
  return (
    <>
    <Header  onLogout={handleLogout} userDetails={userDetails}/>
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="index.htm" rel="nofollow">
                <FontAwesomeIcon icon={faHome} className="mr-5" />
                Home
              </Link>
              <span /> Pages <span /> My Account
            </div>
          </div>
        </div>
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <img
                      className="border-radius-15"
                      src="https://nest-frontend.netlify.app/assets/imgs/page/login-1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">Login</h1>
                          <p className="mb-30">
                            Don't have an account?{" "}
                            <Link to="page-register.html">Create here</Link>
                          </p>
                        </div>
                        <form method="post" onSubmit={handleLogin}>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          {successMessage && (
                            <div className="alert alert-success">
                              {successMessage}
                            </div>
                          )}
                          <div className="form-group">
                            <input
                              type="text"
                              required=""
                              name="email"
                              placeholder="Username or Email *"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              required=""
                              type="password"
                              name="password"
                              placeholder="Your password *"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="login_footer form-group">
                            <div className="chek-form">
                              <input
                                type="text"
                                required
                                name="enteredCode"
                                placeholder="Enter the code *"
                                onChange={(e) => setEnteredCode(e.target.value)}
                              />
                            </div>
                            <span className="security-code">
                              {!isCodeExpired && (
                                <span>
                                  <b className="text-new">{code.charAt(0)}</b>
                                  <b className="text-hot">{code.charAt(1)}</b>
                                  <b className="text-sale">{code.charAt(2)}</b>
                                  <b className="text-best">{code.charAt(3)}</b>
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="login_footer form-group mb-50">
                            <div className="chek-form">
                              <div className="custome-checkbox">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkbox"
                                  id="exampleCheckbox1"
                                  defaultValue=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheckbox1"
                                >
                                  <span>Remember me</span>
                                </label>
                              </div>
                            </div>
                            <Link className="text-muted" href="#">
                              Forgot password?
                            </Link>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-heading btn-block hover-up"
                              name="login"
                            >
                              Log in
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
