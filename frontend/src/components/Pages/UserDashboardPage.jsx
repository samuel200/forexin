import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import SideBar from "../UserDashboard/SideBar";
import DashboardBody from "../UserDashboard/DashboardBody";
import domainName from "../../domainName";
import Loading from "./Loading";

export default function UserDashboardPage({
  authenticated,
  authenticationToken,
  setAuthenticationToken,
  setAuthenticated,
  setAuthenticatedUserData,
  match,
}) {
  const [currentPage, setCurrentPage] = useState("1");
  const [down, setPos] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState({});
  const { username } = match.params;
  const [pageLoading, setPageLoading] = useState(true);

  const changePos = (value) => {
    setPos(value);
  };

  const changePage = (val) => {
    $("#dashboard-body").animate({ opacity: 0.7 }, 300, () => {
      setCurrentPage(val);
      $("#dashboard-body").animate({ opacity: 1 }, 100);
    });
  };

  useEffect(() => {
    // if (authenticated || localStorage.getItem("authenticatedUser") !== null) {
    //   $("#navigation-bar").css({ display: "none" });
    //   $("#to-top").css({ display: "none" });
    //   $("canvas").css({ display: "none" });
    // } else {
    //   $("#navigation-bar").css({ display: "flex" });
    //   $("#to-top").css({ display: "block" });
    //   $("canvas").css({ display: "block" });
    // }

    if (pageLoading){
      // Make axios request for user data
      axios
      .get(`${domainName}/api/obtain_token/${username}`)
      .then(({ data }) => {
        setAuthenticationToken(data.token);
        // console.log(`token: ${data.token}\n Gotten Succesfully`);
        // Make axios request for user data
        axios
        .get(`${domainName}/api/user/`, {
            headers: {
                Authorization: `Token ${data.token}`,
              },
          })
          .then(({ data }) => {
              setAuthenticatedUser(data);
              setAuthenticatedUserData(data);
              // alert(`user data: ${data}\n Gotten Succesfully`);
              setPageLoading(false);
          })
          .catch((error) => {});
      })
      .catch((error)=>{
        alert('invalid username provided');
        window.location.href = `${domainName}/logout`;
      });
      // set authenticatedUser to said data and save also to localStorage
    }
  }, [pageLoading]);

  return !pageLoading ? (
    <section id="user-profile-dashboard">
      <nav
        className="nav-extended white hide-on-large-only"
        style={{ height: "80px", maxWidth: "100vh", overflowX: "hidden" }}
      >
        <div className="nav-wrapper">
          <a className="brand-logo" href="/">
            <header
              className="hide-on-med-and-down"
              style={{
                background: "transparent !important",
                transform: "scale(.6)",
              }}
              onClick={() => {
                $("#navigation-bar").css({ display: "flex" });
              }}
            >
              <img
                src={require("../../img/logo-dark.png")}
                alt="logo"
                id="navigation-logo"
              />
              <h2>GLOBALTRADES</h2>
            </header>
            <header
              className="hide-on-large-only left"
              style={{
                transform: "scale(.6)",
                position: "relative",
                bottom: "15px",
              }}
              onClick={() => {
                $("#navigation-bar").css({ display: "flex" });
              }}
            >
              <img
                src={require("../../img/logo-dark.png")}
                alt="logo"
                id="navigation-logo"
              />
              <h2 style={{ position: "relative", top: "18px", right: "80px", fontSize: "32px"}}>
                Forexin
              </h2>
            </header>
          </a>
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger black-text"
            onClick={(e) => {
              e.preventDefault();
              setPos(!down);
              if (!down) {
                $(".mobile-sidebar").css({
                  maxHeight: "380px",
                });
              } else {
                $(".mobile-sidebar").css({
                  maxHeight: "0px",
                });
              }
            }}
          >
            <i
              className="material-icons right"
              style={{ transform: "scale(1.2)", marginTop: "10px" }}
            >
              menu
            </i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down"></ul>
        </div>
      </nav>
      <div
        style={{
          background: "white",
          maxWidth: "100vw",
          minWidth: "100vw !important",
          overflowX: "hidden",
          position: "sticky",
          top: "0px",
          zIndex: "5",
        }}
      >
        <div id="logo-holder" className="hide-on-med-and-down">
          <a to="/">
            <header
              className="hide-on-med-and-down"
              onClick={() => {
                $("#navigation-bar").css({ display: "flex" });
              }}
            >
              <img
                src={require("../../img/logo-dark.png")}
                alt="logo"
                id="navigation-logo"
              />
              <h2>Forexin</h2>
            </header>
            <header
              className="hide-on-large-only left-align"
              style={{
                transform: "scale(.8)",
              }}
              onClick={() => {
                $("#navigation-bar").css({ display: "flex" });
              }}
            >
              <img
                src={require("../../img/logo-dark.png")}
                alt="logo"
                id="navigation-logo"
              />
              <h2>Forexin</h2>
            </header>
          </a>
        </div>
      </div>
      <main style={{ display: "flex" }}>
        <SideBar
          changePage={changePage}
          setAuthenticatedUserData={setAuthenticatedUserData}
          setAuthenticated={setAuthenticated}
          style={{ transition: ".5s max-height", overflow: "hidden" }}
        />
        <DashboardBody
          currentPage={currentPage}
          changePage={changePage}
          authenticatedUser={authenticatedUser}
          authenticationToken={authenticationToken}
          setAuthenticatedUser={setAuthenticatedUser}
        />
      </main>
    </section>
  ) : (
    <Loading />
  );
}
