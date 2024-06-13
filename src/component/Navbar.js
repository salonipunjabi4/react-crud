import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">
          Admin Portal
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Index <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/hover">
                HoverCounter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="customer">
                Customer
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="user">
                User
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="eventb">
                Event Binding
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="dataf">
                Data Fetching
              </Link>
            </li>

            {/* <li class="nav-item">
            <Link class="nav-link" to="greet">Greet</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="hook1">Hook2</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="hook2">Hook3</Link>
          </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
