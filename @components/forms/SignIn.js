"use client";
import React, { useEffect, useRef, useState } from "react";
import "material-symbols";
import Link from "next/link";
import axios from "axios";
import { API_END } from "@lib/api";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [error, setError] = useState(null);

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_END + "/user/login/", {
        email,
        password,
        token,
      });

      //console.log(response.data);

      if (response.data.status === "success") {
        console.log("Login successful");
        setError("Login successful");
        const { authToken } = response.data.authToken;
        const { Userdata } = response.data.Userdata;

        // Store the auth token in local storage or cookies
        localStorage.setItem("authToken", authToken);

        // Redirect to a protected route or home page
        // window.location.href = "/dashboard";
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="login_name" className="form-label">
          Username or Email
        </label>
        <input
          id="login_name"
          type="email"
          placeholder="Email address"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label htmlFor="login_password" className="form-label mb-0">
            Password
          </label>
          <Link href="/auth/forgot-password" className="small">
            Forgot Password?
          </Link>
        </div>
        <div className="position-relative">
          <input
            name="login_password"
            type={isRevealPwd ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="login_password"
            placeholder="Password"
            className="form-control pe-5"
          />
          {/* Password icon */}
          <span
            role="button"
            className={
              isRevealPwd
                ? "password-hide position-absolute end-0 top-50 translate-middle-y me-2 size-30 d-flex align-items-center justify-content-center"
                : "password-show position-absolute end-0 top-50 translate-middle-y size-30 me-2 d-flex align-items-center justify-content-center"
            }
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          ></span>
        </div>
      </div>
      <div className="mb-3">
        <HCaptcha
          sitekey="082a3b32-feb0-4916-96f8-863216bc8614"
          onLoad={onLoad}
          onVerify={setToken}
          ref={captchaRef}
        />
      </div>
      <div className="d-grid mb-3">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        {error && <p className="text-danger pt-2">{error}</p>}
      </div>
    </form>
  );
}
