import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image"
            />
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="home-links-container">
              <a href="#make_booking" className="home-link Anchor">
                Make Booking
              </a>
              <a href="#edit_booking" className="home-link1 Anchor">
                Edit Booking
              </a>
              <span className="home-link2 Anchor">Overview</span>
              <a href="#ourstory" className="home-link3 Anchor">
                Settings
              </a>
            </div>
          </div>
          <div className="home-right-side">
            <button className="home-cta-btn Anchor button">bOOK HERE</button>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Anchor">Resources</span>
              <span className="home-link5 Anchor">Inspiration</span>
              <span className="home-link6 Anchor">Process</span>
              <a href="#ourstory" className="home-link7 Anchor">
                Our story
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboard" className="home-dashboard">
        <div className="home-heading-container">
          <h1 className="home-text Section-Heading">Booking System</h1>
          <span className="home-text001">Place your booking at _______</span>
        </div>
        <div className="home-cards-container">
          <div className="home-container02">
            <textarea
              placeholder="Sunday"
              className="home-textarea textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea01 textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea02 textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea03 textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea04 textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea05 textarea"
            ></textarea>
            <textarea
              placeholder="Sunday"
              className="home-textarea06 textarea"
            ></textarea>
          </div>
          <div className="home-container03">
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea07 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea08 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea09 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea10 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea11 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea12 textarea"
            ></textarea>
            <textarea
              placeholder="Room | Time | POC"
              className="home-textarea13 textarea"
            ></textarea>
          </div>
          <div className="home-container04">
            <div className="home-container05">
              <textarea
                placeholder="Date"
                className="home-textarea14 textarea"
              ></textarea>
              <ul className="home-ul list">
                <li className="home-li list-item">
                  <span className="home-text002">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text003">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text004">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text005">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text006">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container06">
              <textarea
                placeholder="Date"
                className="home-textarea15 textarea"
              ></textarea>
              <ul className="home-ul01 list">
                <li className="home-li005 list-item">
                  <span className="home-text007">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text008">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text009">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text010">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text011">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container07">
              <textarea
                placeholder="Date"
                className="home-textarea16 textarea"
              ></textarea>
              <ul className="home-ul02 list">
                <li className="home-li010 list-item">
                  <span className="home-text012">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text013">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text014">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text015">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text016">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container08">
              <textarea
                placeholder="Date"
                className="home-textarea17 textarea"
              ></textarea>
              <ul className="home-ul03 list">
                <li className="home-li015 list-item">
                  <span className="home-text017">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text018">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text019">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text020">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text021">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container09">
              <textarea
                placeholder="Date"
                className="home-textarea18 textarea"
              ></textarea>
              <ul className="home-ul04 list">
                <li className="home-li020 list-item">
                  <span className="home-text022">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text023">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text024">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text025">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text026">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container10">
              <textarea
                placeholder="Date"
                className="home-textarea19 textarea"
              ></textarea>
              <ul className="home-ul05 list">
                <li className="home-li025 list-item">
                  <span className="home-text027">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text028">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text029">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text030">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text031">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container11">
              <textarea
                placeholder="Date"
                className="home-textarea20 textarea"
              ></textarea>
              <ul className="home-ul06 list">
                <li className="home-li030 list-item">
                  <span className="home-text032">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text033">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text034">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text035">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text036">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <textarea
                placeholder="Date"
                className="home-textarea21 textarea"
              ></textarea>
              <ul className="home-ul07 list">
                <li className="home-li035 list-item">
                  <span className="home-text037">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text038">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text039">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text040">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text041">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container14">
              <textarea
                placeholder="Date"
                className="home-textarea22 textarea"
              ></textarea>
              <ul className="home-ul08 list">
                <li className="home-li040 list-item">
                  <span className="home-text042">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text043">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text044">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text045">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text046">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container15">
              <textarea
                placeholder="Date"
                className="home-textarea23 textarea"
              ></textarea>
              <ul className="home-ul09 list">
                <li className="home-li045 list-item">
                  <span className="home-text047">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text048">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text049">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text050">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text051">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container16">
              <textarea
                placeholder="Date"
                className="home-textarea24 textarea"
              ></textarea>
              <ul className="home-ul10 list">
                <li className="home-li050 list-item">
                  <span className="home-text052">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text053">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text054">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text055">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text056">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container17">
              <textarea
                placeholder="Date"
                className="home-textarea25 textarea"
              ></textarea>
              <ul className="home-ul11 list">
                <li className="home-li055 list-item">
                  <span className="home-text057">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text058">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text059">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text060">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text061">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container18">
              <textarea
                placeholder="Date"
                className="home-textarea26 textarea"
              ></textarea>
              <ul className="home-ul12 list">
                <li className="home-li060 list-item">
                  <span className="home-text062">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text063">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text064">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text065">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text066">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container19">
              <textarea
                placeholder="Date"
                className="home-textarea27 textarea"
              ></textarea>
              <ul className="home-ul13 list">
                <li className="home-li065 list-item">
                  <span className="home-text067">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text068">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text069">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text070">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text071">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-container20">
            <div className="home-container21">
              <textarea
                placeholder="Date"
                className="home-textarea28 textarea"
              ></textarea>
              <ul className="home-ul14 list">
                <li className="home-li070 list-item">
                  <span className="home-text072">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text073">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text074">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text075">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text076">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container22">
              <textarea
                placeholder="Date"
                className="home-textarea29 textarea"
              ></textarea>
              <ul className="home-ul15 list">
                <li className="home-li075 list-item">
                  <span className="home-text077">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text078">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text079">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text080">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text081">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container23">
              <textarea
                placeholder="Date"
                className="home-textarea30 textarea"
              ></textarea>
              <ul className="home-ul16 list">
                <li className="home-li080 list-item">
                  <span className="home-text082">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text083">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text084">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text085">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text086">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container24">
              <textarea
                placeholder="Date"
                className="home-textarea31 textarea"
              ></textarea>
              <ul className="home-ul17 list">
                <li className="home-li085 list-item">
                  <span className="home-text087">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text088">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text089">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text090">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text091">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container25">
              <textarea
                placeholder="Date"
                className="home-textarea32 textarea"
              ></textarea>
              <ul className="home-ul18 list">
                <li className="home-li090 list-item">
                  <span className="home-text092">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text093">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text094">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text095">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text096">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container26">
              <textarea
                placeholder="Date"
                className="home-textarea33 textarea"
              ></textarea>
              <ul className="home-ul19 list">
                <li className="home-li095 list-item">
                  <span className="home-text097">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text098">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text099">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text100">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text101">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container27">
              <textarea
                placeholder="Date"
                className="home-textarea34 textarea"
              ></textarea>
              <ul className="home-ul20 list">
                <li className="home-li100 list-item">
                  <span className="home-text102">Room1 : 10-12pm : Mr Lim</span>
                </li>
                <li className="list-item">
                  <span className="home-text103">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text104">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text105">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-text106">
                    Sanctuary: 10-12pm : Mr Lim
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="make_booking" className="home-make-booking">
        <h2 className="home-text107 Section-Heading">Make A Booking</h2>
        <div className="home-content-container">
          <div className="home-form-container">
            <span className="home-heading BigCard-Heading">
              Fill the details
            </span>
            <div className="home-container28">
              <span className="home-text108">   Date   </span>
              <select className="home-select">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className="home-select01">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="home-select02">
                <option value="22" selected>
                  22
                </option>
              </select>
            </div>
            <select className="home-select03">
              <option value="Room 1" selected>
                Room 1
              </option>
              <option value="Room 2">Room 2</option>
            </select>
            <div className="home-container29">
              <span className="home-text109">Start Time </span>
              <select className="home-select04">
                <option value="9" selected>
                  9
                </option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <select className="home-select05">
                <option value="00" selected>
                  00
                </option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <select className="home-select06">
                <option value="pm" selected>
                  pm
                </option>
                <option value="am">am</option>
              </select>
            </div>
            <div className="home-container30">
              <span className="home-text110"> End Time </span>
              <select className="home-select07">
                <option value="9" selected>
                  9
                </option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <select className="home-select08">
                <option value="00" selected>
                  00
                </option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <select className="home-select09">
                <option value="pm" selected>
                  pm
                </option>
                <option value="am">am</option>
              </select>
            </div>
            <input
              type="text"
              required="true"
              placeholder="Name"
              className="home-name input"
            />
            <input
              type="text"
              required="true"
              placeholder="Contact"
              className="home-email input"
            />
            <textarea
              placeholder="Purpose"
              className="home-message textarea"
            ></textarea>
            <button className="home-cta-btn1 Anchor button">Submit</button>
          </div>
          <div className="home-locations-container">
            <div className="home-location-1">
              <span className="home-heading1">London, UK</span>
              <div className="home-adress">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="Section-Text">Address</span>
              </div>
              <div className="home-email1">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="Section-Text">E-mail Address</span>
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon08"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="Section-Text">Phone Number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div id="edit_booking" className="home-edit-booking">
        <h2 className="home-text114 Section-Heading">Edit A Booking</h2>
        <div className="home-content-container1">
          <div className="home-form-container1">
            <span className="home-heading2 BigCard-Heading">
              Fill the details
            </span>
            <div className="home-container31">
              <span className="home-text115">   Date   </span>
              <select className="home-select10">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className="home-select11">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="home-select12">
                <option value="22" selected>
                  22
                </option>
              </select>
            </div>
            <select className="home-select13">
              <option value="Room 1" selected>
                Room 1
              </option>
              <option value="Room 2">Room 2</option>
            </select>
            <input
              type="text"
              required="true"
              placeholder="Contact"
              className="home-contact input"
            />
            <button className="home-cta-btn2 Anchor button">Remove</button>
            <button className="home-cta-btn3 Anchor button">Edit/Change</button>
          </div>
          <div className="home-locations-container1">
            <div className="home-location-11">
              <span className="home-heading3">London, UK</span>
              <div className="home-adress1">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="Section-Text">Address</span>
              </div>
              <div className="home-email2">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="Section-Text">E-mail Address</span>
              </div>
              <div className="home-phone1">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon14"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="Section-Text">Phone Number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon22">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
      <div className="home-container32"></div>
    </div>
  )
}

export default Home
