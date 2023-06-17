import { useState } from "react";
import "./MainlayoutStyles.css";

import { NavLink, Outlet } from "react-router-dom";

export default function Mainlayout() {
  const [openModalWin, setOpenModalWin] = useState(false);

  return (
    <>
      <header className="header-wrapper">
        <div className="far fa-hand-point-left"></div>
        <span className="attention">Тут можно узнать чуть больше :)</span>

        <input id="menu__toggle" type="checkbox" />

        <label
          className="menu__btn"
          htmlFor="menu__toggle"
          onClick={
            openModalWin
              ? () => setOpenModalWin(false)
              : () => setOpenModalWin(true)
          }
        >
          <span></span>
        </label>
      </header>

      <div
        className={
          openModalWin
            ? "modal-window-wrapper modal-window-active"
            : "modal-window-wrapper"
        }
      >
        <div className="modal-win">
          <div className="btns-wrapper">
            <ul>
              <NavLink
                to="/"
                onClick={() => {
                  setOpenModalWin(false);
                  document.querySelector(".menu__btn").click();
                }}
              >
                <li>Основаная страница</li>
              </NavLink>
              <NavLink
                to="all"
                onClick={() => {
                  setOpenModalWin(false);
                  document.querySelector(".menu__btn").click();
                }}
              >
                <li>Страница "много обо мне"</li>
              </NavLink>
              <NavLink
                to="small-all"
                onClick={() => {
                  setOpenModalWin(false);
                  document.querySelector(".menu__btn").click();
                }}
              >
                <li>Страница "мало обо мне"</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
}
