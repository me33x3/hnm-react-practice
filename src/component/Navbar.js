import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  let navigate = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const goMain = () => {
    navigate('/')
  }

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value
      
      navigate(`?q=${keyword}`)
    }
  }

  return (
    <div>
      <div>
        {authenticate ? (
          <div className="login-button" onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;
            <span>로그아웃</span>
          </div>
        ) : (
          <div className="login-button" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;
            <span>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-section">
        <img src={require("../image/logo.png")} width={100} onClick={goMain} />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
