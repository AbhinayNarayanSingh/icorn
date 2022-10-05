import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import router from "next/router";

import {
  APP_LOGO,
  BAG_ICON,
  HAMBURGER_CLOSE_ICON,
  HAMBURGER_OPEN_ICON,
  PRIMARY_COLOUR,
  USER_ICON,
  SEARCH_ICON,
  WHITE,
} from "../../utils/Environment";

import FormInputs from "../Input";

const NavigationBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const {category, bag, user} = useSelector((state) => state);

  const categoryRoute = (path) => {
    setSidebarActive(false);
    router.push(path);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="brand">
            {sidebarActive ? (
              <img
                src={HAMBURGER_OPEN_ICON[0]}
                alt={HAMBURGER_OPEN_ICON[1]}
                className="hamburger"
                onClick={() => setSidebarActive(false)}
              />
            ) : (
              <img
                src={HAMBURGER_CLOSE_ICON[0]}
                alt={HAMBURGER_CLOSE_ICON[1]}
                className="hamburger"
                onClick={() => setSidebarActive(true)}
              />
            )}
            <Link href="/">
              <img src={APP_LOGO[0]} alt={APP_LOGO[1]} className="logo" />
            </Link>
          </div>

          <Link href="/">
            <img src={APP_LOGO[0]} alt={APP_LOGO[1]} className="mobile-logo" />
          </Link>

          {searchBarActive && (
            <form>
              <FormInputs inputCaseType={"search_input"} type={"text"} />
            </form>
          )}

          <div>
            <img
              src={SEARCH_ICON[0]}
              alt={SEARCH_ICON[0]}
              className="search-icon"
              onClick={() => setSearchBarActive((state) => !state)}
            />

            <Link href={user?.Token ? "/profile" :"/sign"}>
              <img
                src={USER_ICON[0]}
                alt={USER_ICON[0]}
                className="user-icon"
              />
            </Link>
            <Link href="/bag">
              <div className="bag-container">
                <img src={BAG_ICON[0]} alt={BAG_ICON[0]} className="bag-icon" />
                {bag?.items?.length >= 1 && <span>{bag.items.length}</span>}
              </div>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .brand {
            display: flex;
            align-items: center;
          }
          .navbar-container {
            background: ${PRIMARY_COLOUR};
            padding: 10px;
          }
          .navbar {
            max-width: 1700px;
            padding: 0 1rem;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .bag-container {
            margin-left: 3rem;
            position: relative;
            cursor: pointer;
          }
          .user-icon {
            margin-left: 3rem;
            position: relative;
            cursor: pointer;
          }
          .bag-container span {
            position: absolute;
            background: ${WHITE};
            font-size: 10px;
            padding: 4px;
            font-weight: 600;
            border-radius: 10px;
            bottom: -6px;
            right: -6px;
            min-width: 12px;
            text-align: center;
          }

          .logo {
            height: 45px;
          }
          img {
            cursor: pointer;
          }
          .hamburger {
            margin-right: 1rem;
          }
          .navbar div {
            display: flex;
          }
          .mobile-logo {
            display: none;
          }

          @media only screen and (max-width: 600px) {
            .mobile-logo {
              display: block;
              height: 32px;
            }
            .navbar-container {
              padding: 10px;
            }
            .hamburger {
              display: block;
            }
            .logo {
              display: none;
            }
            .bag-container,
            .search-icon {
              display: none !important;
            }
            .user-icon {
              height: 25px;
              margin-left: 0;
            }
          }
        `}</style>
      </div>

      {sidebarActive && (
        <div className="navbar-active-container">
          <div className="navbar-active">
            {category.map((item, index) => {
              return (
                <div onClick={() => categoryRoute(item["slug"])} key={index}>
                  <div className="navbar-cat">
                    <img src={item["icon"]} alt="" />
                    <p>{item["name"]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <style jsx>{`
            .navbar-active-container {
              background: #1d1d1f;
              padding: 2rem 0;
            }
            .navbar-active {
              max-width: 1512px;
              margin: auto;

              display: flex;
              align-items: center;
              overflow: auto;
              width: 95%;

              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .navbar-active::-webkit-scrollbar {
              display: none;
            }
            .navbar-cat {
              cursor: pointer;
              min-width: 125px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .navbar-cat img {
              height: 50px;
            }
            .navbar-cat p {
              font-size: 13px;
              padding-top: 1rem;
              color: ${WHITE};
            }
            @media only screen and (min-width: 1375px) {
              .navbar-active {
                justify-content: center;
              }
            }
            @media only screen and (max-width: 600px) {
              .navbar-cat img {
                height: 45px;
              }
              .navbar-active-container {
                padding: 1.5rem 0 1rem;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
