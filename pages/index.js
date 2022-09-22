import Head from "next/head";

export default function Home() {
  return (
    <main>
      <div className="m-md-3 backgroudHeader">
        <div className="col-md-5 p-lg-5 mx-auto my-6">
          <h1 className="display-5 fw-bold">Hhiker Camp&amp;Rideshare</h1>
          <div className="lead fw-bold description">
            <div>Share&nbsp;cool&nbsp;places and camping&nbsp;spots</div>
            <div>Hitchhike your driver</div> <div>Connect with friends</div>{" "}
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=ttpc.hitchhikerapp"
            target="blank"
          >
            <img
              width="250"
              src="/google-play-badge.png"
              className="playbutton"
            />
          </a>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-dark me-md-3 text-center text-white overflow-hidden">
          <div className="pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 py-3">
              <h2 className="display-5">Cool places and campspots</h2>
              <div className="lead">
                Find and share campgrounds and cool places on the map
              </div>
            </div>
            <div className="bg-light shadow-sm mx-auto box"></div>
          </div>
        </div>
        <div className="bg-light text-center me-md-3 overflow-hidden camper-tile"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 text-center overflow-hidden hitchhike-tile"></div>
        <div className="bg-primary me-md-3 text-center text-white overflow-hidden">
          <div className="pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 py-3">
              <h2 className="display-5">
                Hitchhike car or find fellow hitchhiker
              </h2>
              <div className="lead">
                Broadcast your plans to go and find fellow driver or hitchhiker
                who is going same way
              </div>
            </div>
            <div className="bg-light shadow-sm mx-auto box"></div>
          </div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3  text-center overflow-hidden">
          <div className="pt-3 px-3 pt-md-5 px-md-5">
            <div className="my-3 p-3">
              <h2 className="display-5">Find friends</h2>
              <div className="lead">
                Connect and chat with friends and fellow travelers
              </div>
            </div>
            <div className="bg-body shadow-sm mx-auto box"></div>
          </div>
        </div>
        <div className="bg-light me-md-3 text-center overflow-hidden friends"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"></div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center  overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">
              <a
                href="https://play.google.com/store/apps/details?id=ttpc.hitchhikerapp"
                target="blank"
              >
                Download on playstore
              </a>
            </h2>
            <p className="lead"></p>
          </div>
        </div>
      </div>
    </main>
  );
}
