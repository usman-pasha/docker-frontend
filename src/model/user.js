// About.js
import React from "react";
import "./css/user.css";

const User = () => {
  return (
    <div class="box">
      <img src="./pics/port.jpg" alt="" class="box-img" />
      <h1 class="heading">ASZ Technologies Docker And Containers</h1>
      <h5 id="h5">Cloud Engineer - Web Developer</h5>
      <p id="p">
        Welcome to my website. Cloud engineer from India. I have a Bachelor of ABCD. I have rich experience in cloud Docker And Containers, server monitoring, and infrastructure (Linux & Windows Server).
      </p>
      <ul>
        <li><a href="https://www.linkedin.com/pub/dir/Dummy/Profile"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/usman-pasha"><i class="fab fa-github"></i></a></li>
        <li><a href="https://medium.com/m/signin"><i class="fab fa-medium"></i></a></li>
        <li><a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/accounts/login/?hl=en"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.facebook.com/login"><i class="fab fa-facebook"></i></a></li>
      </ul>
    </div>
  );
};

export default User;
