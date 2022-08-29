import { useState } from "react";
import {
  APP_LOGO,
  BAG_ICON,
  HAMBURGER_CLOSE_ICON,
  HAMBURGER_OPEN_ICON,
  PRIMARY_COLOUR,
  SEARCH_ICON,
} from "../../utils/Environment";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const category = useSelector((state) => state.category);

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
            <img src={APP_LOGO[0]} alt={APP_LOGO[1]} className="logo" />
          </div>

          <div></div>
          <div>
            <img
              src={SEARCH_ICON[0]}
              alt={SEARCH_ICON[0]}
              className="search-icon"
            />
            <img src={BAG_ICON[0]} alt={BAG_ICON[0]} className="bag-icon" />
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
            max-width: 1512px;
            padding: 0 1rem;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .bag-icon {
            margin-left: 3rem;
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

          @media only screen and (max-width: 600px) {
            .hamburger {
              display: block;
            }
            .logo {
              height: 35px;
            }
            .search-icon {
              display: none;
            }
            .bag-icon {
              height: 25px;
            }
          }
        `}</style>
      </div>

      {sidebarActive && (
        <div className="navbar-active-container">
          <div className="navbar-active">
            {category.map((item, index) => {
              return (
                <div key={index} className="navbar-cat">
                  <img src={item["icon"]} alt="" />
                  <p>{item["name"]}</p>
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
              width: 90%;

              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .navbar-active::-webkit-scrollbar {
              display: none;
            }
            .navbar-cat {
              cursor: pointer;
              min-width: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .navbar-cat img {
              height: 70px;
            }
            .navbar-cat p {
              font-size: 1rem;
              padding-top: 0.75rem;
              color: white;
            }
            @media only screen and (min-width: 1375px) {
              .navbar-active {
                justify-content: center;
              }
            }
            @media only screen and (max-width: 600px) {
              .navbar-active {
                width: 95%;
              }
              .navbar-cat {
                cursor: pointer;
                min-width: 125px;
              }
              .navbar-cat img {
                height: 50px;
              }
              .navbar-cat p {
                font-size: 14px;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
