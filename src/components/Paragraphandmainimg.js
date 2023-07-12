import React from "react";
import "./Paragraphandmainimg.css";

const Paragraphandmainimg = () => {
  return (
    <div class="container-main">
      <div class="container p-5 text-center">
        <div class="row align-items-center justify-content-between d-flex">
          <div class="image">
            <div class="col-md">
              <img
                src="https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="img"
                alt=""
                id="mainimg"
              />
            </div>
          </div>
          <div class="text">
            <div class="col-md">
              <h1 class="mb-3">
                <span class="text-warning">About</span> Vancouver Bakery
              </h1>
              <p class="lead">
                Vancouer Bakery Is located in South Western Virginia We serve
                multiple delicacies for you interest and needs.
                <br />
                <blockquote>
                  {" "}
                  "Give me a hotel that feels as if I have returned home and
                  that is all I can ask". Angela Abraham
                </blockquote>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraphandmainimg;
