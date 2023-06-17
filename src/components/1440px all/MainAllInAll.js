import "./MainAllInAllStyles.css";

import call_icon from "../1440px main/pictures/icons/phone-call.png";
import mail_icon from "../1440px main/pictures/icons/Subtract.png";
import telegramm_icon from "../1440px main/pictures/icons/Vector.png";

import logo from "../1440px main/pictures/logo/Logo.png";

export default function MainAllInAll() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm col-md-5 col-lg-4 col-xl-3">
          <div className="picture-wrapper"></div>

          <div className="aside-about-wrapper">
            <div className="aside-text-block">
              <div className="aside-block-name">
                <h1>Синяк Александр</h1>
                <span>18 лет, Минск</span>
              </div>

              <div className="aside-ul-list">
                <ul>
                  <li>
                    <span>
                      <img src={call_icon} alt="call-icon"></img>
                    </span>
                    <span className="rigth-data">+375 29 838 87 45</span>
                  </li>
                  <li>
                    <span>
                      <img src={mail_icon} alt="call-icon"></img>
                    </span>
                    <span className="rigth-data">b1on1kkk@mail.ru</span>
                  </li>
                  <li>
                    <span>
                      <img src={telegramm_icon} alt="call-icon"></img>
                    </span>
                    <span className="rigth-data">@b1on1kkk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9 col-md-7 about-block">
          <div className="about-me-wrapper">
            <div className="logo-wrapper">
              <img src={logo} alt="logo"></img>
            </div>
            <div className="mobile-logo-wrapper">
              <img src={logo} alt=""></img>
            </div>

            <div className="about-me-text">
              <p>
                Доброго времени суток! Меня зовут Александр, я
                фронтенд-разработчик с опытом разработки около полутора лет
                (фронтенд) и суммарно около 3-х лет в ИТ-шке. Интересуюсь
                фронтендом, созданием красивого и функционального UI/UX дизайна.
              </p>

              <p className="facts">Несколько фактов обо мне:</p>

              <ul className="first-facts">
                <li>Закончил МГКС им. В.Г.Каменского на "оператора ЭВМ-ПВМ"</li>
                <li>
                  Неплохо знаю HTML, CSS, JavaScript, Bootstrap, а также есть
                  опыт разработки на C++, Python и Typescript
                </li>
                <li>Велоспортсмен</li>
              </ul>

              <p className="facts">Некоторые мои достижения:</p>
              <ul className="second-facts">
                <li>Поработал с реальными базами данных в отделе кадров</li>
                <li>Поработал стажером в агенстве связи "А1" Беларуси</li>
                <li>
                  Участвовал на различных школьных олимпидах по программированию
                </li>
              </ul>
            </div>

            <div className="about-table-wrapper">
              <div className="about-table-data-wrapper">
                <div className="about-title">
                  <h2>Образование</h2>
                </div>

                <div className="about-data-block">
                  <div className="about-data-wrapper">
                    <div className="about-data-title">
                      <span>itstep.by</span>
                    </div>
                    <div className="about-data-specialty about-data-title">
                      Frontend-разработчик/Backend-разработчик
                    </div>
                    <div className="about-data-year about-data-specialty">
                      2020-2023
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="delimiter-line"></div>
              {/*  */}
              <div className="about-table-data-wrapper">
                <div className="about-title">
                  <h2>Карьера</h2>
                </div>

                <div className="about-data-block-wrapper">
                  <div className="about-data-block">
                    <div className="about-data-wrapper">
                      <div className="about-data-title">
                        <span>Средняя школа</span>
                      </div>
                      <div className="about-data-specialty about-data-title">
                        Олимпиады по программированию (pascal, python, C++)
                      </div>
                      <div className="about-data-year about-data-specialty">
                        2018-2022
                      </div>
                    </div>
                  </div>

                  <div className="about-data-block">
                    <div className="about-data-wrapper">
                      <div className="about-data-title">
                        <span>МГКС им. В.Г.Каменского</span>
                      </div>
                      <div className="about-data-specialty about-data-title">
                        Оператор ЭВМ-ПВМ
                      </div>
                      <div className="about-data-year about-data-specialty">
                        2021-2023
                      </div>
                    </div>
                  </div>

                  <div className="about-data-block">
                    <div className="about-data-wrapper">
                      <div className="about-data-title">
                        <span>Стажер-программист А1</span>
                      </div>
                      <div className="about-data-specialty about-data-title">
                        Frontend-разработчик
                      </div>
                      <div className="about-data-year about-data-specialty">
                        2022-2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="delimiter-line"></div>
              {/*  */}
              <div className="about-table-data-wrapper">
                <div className="about-title">
                  <h2>Навыки</h2>
                </div>

                <div className="about-data-block">
                  <div className="about-data-wrapper">
                    <div className="about-data-title">
                      <ul className="attainment-ul-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>SQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
