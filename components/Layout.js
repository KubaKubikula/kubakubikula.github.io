import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div className="top-part"></div>
      <header className="site-header sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="" aria-label="Product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="d-block mx-auto"
              role="img"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
          </a>
          <div className="py-2 d-none d-md-inline-block">
            <Link href="/">Home</Link>
          </div>
          <div className="py-2 d-none d-md-inline-block">
            <Link href="/ourmission">Our mission</Link>
          </div>
          <div className="py-2 d-none d-md-inline-block">
            <Link href="/aboutus">About us</Link>
          </div>
        </nav>
      </header>
      {children}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <small className="d-block mb-3 text-muted">&copy; 2021–2022</small>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="link-secondary" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link-secondary" href="/ourmission">
                  Our mission
                </Link>
              </li>
              <li>
                <Link className="link-secondary" href="/aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link className="link-secondary" href="/terms">
                  Terms &amp; Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
