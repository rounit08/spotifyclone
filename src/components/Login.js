import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img src="https://th.bing.com/th/id/R.33229ce52debfa7f044769306541e1ee?rik=5eVCSP9G8MgLPA&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2016%2f06%2fSpotify_logo_horizontal_black.jpg&ehk=z9ClqCYg7MldmX8d1MAegCslS%2bAN0VU4sUH51qVgbjM%3d&risl=&pid=ImgRaw&r=0" />
      <a href={loginUrl}>Login With spotify</a>
    </div>
  );
};

export default Login;
