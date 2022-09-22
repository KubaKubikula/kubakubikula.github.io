import React from "react";

const ourMission = () => {
  return (
    <main>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 text-center overflow-hidden">
          <div className="pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 py-3">
              <h2 className="display-5">We want Freedom Decentralization</h2>
              <p className="lead">
                Our mission is to make free wiki like app where you can meet
                cool people and find adventure on the way
              </p>
            </div>
            <div className="my-3 py-3">
              <h2 className="display-5">We want Freedom Cryptography</h2>
              <p className="lead">
                Content will be crypted so you wil be talking privately with
                your friends without backgroud listeres :-D
              </p>
            </div>
            <div className="my-3 py-3">
              <h2 className="display-5">App to be useful not addictiful</h2>
              <p className="lead">
                We want to create not to keep you on longest time but to push
                you to experience real adventure you will remember
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light me-md-3 text-center overflow-hidden mission"></div>
      </div>
    </main>
  );
};

export default ourMission;
