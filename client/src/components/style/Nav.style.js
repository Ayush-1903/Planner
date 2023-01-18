import styled from 'styled-components';


const NavWrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');

ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    margin-bottom: 0px;
  }

  header, nav {
    display: block;
  }
    
a {
  text-decoration: none !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0px;
  margin-bottom: 0px;
}

p {
  font-size: 15px;
  line-height: 30px;
  font-weight: 300;
  color: #afafaf;
}

  .border-first-button a {
    display: inline-block !important;
    padding: 10px 20px !important;
    color: #4da6e7 !important;
    border: 1px solid #4da6e7 !important;
    border-radius: 23px;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
    transition: all .5s;
  }
  
  .border-first-button a:hover {
    background-color: #4da6e7;
    color: #fff !important;
  }
  
.header-area {
    background-color: #fff;
    box-shadow: 0px 5px 8px rgba(0,0,0,0.03);
    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 100;
    height: 100px;
    -webkit-transition: all .5s ease 0s;
    -moz-transition: all .5s ease 0s;
    -o-transition: all .5s ease 0s;
    transition: all .5s ease 0s;
  }
  
  .header-area .main-nav {
    min-height: 80px;
    background: transparent;
    z-index: 999;
  }
  
  .header-area .main-nav .logo {
    z-index: 999;
    float: left;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  
  .header-area .main-nav .logo {
      line-height: 100px;
      z-index: 999;
      float: left;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
  }

  .header-area .main-nav .logo span{
    font-family: 'Luckiest Guy', cursive;
    color: black;
    font-size: 40px;
  }

  .header-area .main-nav .logo .kepr{
    font-family: 'Play', sans-serif;
    font-weight: 800;
    color: #263e63;
    font-size: 2.5rem;
  }

  .background-header .main-nav .logo {
    line-height: 80px;
    z-index: 999;
  }
  
  .background-header .main-nav .nav {
    margin-top: 20px !important;
  }
  
  .header-area .main-nav .nav {
    float: right;
    margin-top: 30px;
    margin-right: 0px;
    background-color: transparent;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    z-index: 999;
  }
  
  .header-area .main-nav .nav li {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .header-area .main-nav .nav li:last-child {
    padding-right: 0px;
    padding-left: 40px;
  }
  
  .header-area .main-nav .nav li:last-child a ,
  .background-header .main-nav .nav li:last-child a {
    padding: 0px 20px !important;
    font-weight: 400;
  }
  
  .header-area .main-nav .nav li:last-child a:hover ,
  .background-header .main-nav .nav li:last-child a:hover {
    color: #fff !important;
  }
  
  .header-area .main-nav .nav li a {
    display: block;
    font-weight: 500;
    font-size: 15px;
    color: #2a2a2a;
    text-transform: capitalize;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    height: 40px;
    line-height: 40px;
    border: transparent;
    letter-spacing: 1px;
  }
  
  .header-area .main-nav .nav li:hover a,
  .header-area .main-nav .nav li a.active {
    color: #4da6e7!important;
  }
  
  .background-header .main-nav .nav li:hover a,
  .background-header .main-nav .nav li a.active {
    color: #4da6e7!important;
    opacity: 1;
  }
  
  .header-area .main-nav .nav li.submenu {
    position: relative;
    padding-right: 30px;
  }
  
  .header-area .main-nav .nav li.submenu:after {
    font-family: FontAwesome;
    content: "\f107";
    font-size: 12px;
    color: #2a2a2a;
    position: absolute;
    right: 18px;
    top: 12px;
  }
  
  .background-header .main-nav .nav li.submenu:after {
    color: #2a2a2a;
  }
  
  .header-area .main-nav .nav li.submenu ul {
    position: absolute;
    width: 200px;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    top: 50px;
    opacity: 0;
    transform: translateY(+2em);
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  }
  
  .header-area .main-nav .nav li.submenu ul li {
    margin-left: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  
  .header-area .main-nav .nav li.submenu ul li a {
    opacity: 1;
    display: block;
    background: #f7f7f7;
    color: #2a2a2a!important;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    font-size: 13px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
  }
  
  .header-area .main-nav .nav li.submenu ul li a:hover {
    background: #fff;
    color: #4da6e7!important;
    padding-left: 25px;
  }
  
  .header-area .main-nav .nav li.submenu ul li a:hover:before {
    width: 3px;
  }
  
  .header-area .main-nav .nav li.submenu:hover ul {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
  }
  
  .header-area .main-nav .menu-trigger {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 33px;
    width: 32px;
    height: 40px;
    text-indent: -9999em;
    z-index: 99;
    right: 40px;
    display: none;
  }
  
  .background-header .main-nav .menu-trigger {
    top: 23px;
  }
  
  .header-area .main-nav .menu-trigger span,
  .header-area .main-nav .menu-trigger span:before,
  .header-area .main-nav .menu-trigger span:after {
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background-color: #2a2a2a;
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    left: 0;
  }
  
  .background-header .main-nav .menu-trigger span,
  .background-header .main-nav .menu-trigger span:before,
  .background-header .main-nav .menu-trigger span:after {
    background-color: #2a2a2a;
  }
  
  .header-area .main-nav .menu-trigger span:before,
  .header-area .main-nav .menu-trigger span:after {
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background-color: #2a2a2a;
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    left: 0;
    width: 75%;
  }
  
  .background-header .main-nav .menu-trigger span:before,
  .background-header .main-nav .menu-trigger span:after {
    background-color: #2a2a2a;
  }
  
  .header-area .main-nav .menu-trigger span:before,
  .header-area .main-nav .menu-trigger span:after {
    content: "";
  }
  
  .header-area .main-nav .menu-trigger span {
    top: 16px;
  }
  
  .header-area .main-nav .menu-trigger span:before {
    -moz-transform-origin: 33% 100%;
    -ms-transform-origin: 33% 100%;
    -webkit-transform-origin: 33% 100%;
    transform-origin: 33% 100%;
    top: -10px;
    z-index: 10;
  }
  
  .header-area .main-nav .menu-trigger span:after {
    -moz-transform-origin: 33% 0;
    -ms-transform-origin: 33% 0;
    -webkit-transform-origin: 33% 0;
    transform-origin: 33% 0;
    top: 10px;
  }
  
  .header-area .main-nav .menu-trigger.active span,
  .header-area .main-nav .menu-trigger.active span:before,
  .header-area .main-nav .menu-trigger.active span:after {
    background-color: transparent;
    width: 100%;
  }
  
  .header-area .main-nav .menu-trigger.active span:before {
    -moz-transform: translateY(6px) translateX(1px) rotate(45deg);
    -ms-transform: translateY(6px) translateX(1px) rotate(45deg);
    -webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
    transform: translateY(6px) translateX(1px) rotate(45deg);
    background-color: #2a2a2a;
  }
  
  .background-header .main-nav .menu-trigger.active span:before {
    background-color: #2a2a2a;
  }
  
  .header-area .main-nav .menu-trigger.active span:after {
    -moz-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    -ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    -webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    transform: translateY(-6px) translateX(1px) rotate(-45deg);
    background-color: #2a2a2a;
  }
  
  .background-header .main-nav .menu-trigger.active span:after {
    background-color: #2a2a2a;
  }
  
  .header-area.header-sticky {
    min-height: 80px;
  }
  
  .header-area .nav {
    margin-top: 30px;
  }
  
  .header-area.header-sticky .nav li a.active {
    color: #4da6e7;
  }
  
  .show-up {
    position: relative;
    z-index: 10;
  }
  
  @media (max-width: 1200px) {
    .header-area .main-nav .nav li {
      padding-left: 12px;
      padding-right: 12px;
    }
    .header-area .main-nav:before {
      display: none;
    }
  }
  
  @media (max-width: 992px) {
    .header-area .main-nav .nav li:last-child  ,
    .background-header .main-nav .nav li:last-child {
      display: none;
    }
    .header-area .main-nav .nav li:nth-child(6),
    .background-header .main-nav .nav li:nth-child(6) {
      padding-right: 0px;
    }
    .background-header .nav li a.active:after {
      display: none;
    }
  }
  
  @media (max-width: 767px) {
    .pre-header ul.info li:last-child {
      display: none;
    }
    .background-header .main-nav .nav {
      margin-top: 80px !important;
    }
    .header-area .main-nav .logo {
      color: #1e1e1e;
      z-index: 999;
    }
    .header-area.header-sticky .nav li a:hover,
    .header-area.header-sticky .nav li a.active {
      color: #4da6e7!important;
      opacity: 1;
    }
    .header-area.header-sticky .nav li.search-icon a {
      width: 100%;
    }
    .header-area {
      background-color: #fff;
      padding: 0px 15px;
      height: 100px;
      box-shadow: none;
      text-align: center;
      box-shadow: 0px 5px 8px rgba(0,0,0,0.03);
    }
    .header-area .container {
      padding: 0px;
    }
    .header-area .logo {
      margin-left: 30px;
    }
    .header-area .menu-trigger {
      display: block !important;
    }
    .header-area .main-nav {
      overflow: hidden;
    }
    .header-area .main-nav .nav {
      float: none;
      width: 100%;
      display: none;
      -webkit-transition: all 0s ease 0s;
      -moz-transition: all 0s ease 0s;
      -o-transition: all 0s ease 0s;
      transition: all 0s ease 0s;
      margin-left: 0px;
    }
    .background-header .nav {
      margin-top: 80px;
    }
    .header-area .main-nav .nav li:first-child {
      border-top: 1px solid #eee;
    }
    .header-area.header-sticky .nav {
      margin-top: 100px;
    }
    .header-area .main-nav .nav li {
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #e7e7e7;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .header-area .main-nav .nav li a {
      height: 50px !important;
      line-height: 50px !important;
      padding: 0px !important;
      border: none !important;
      background: #f7f7f7 !important;
      color: #191a20 !important;
    }
    .header-area .main-nav .nav li a:hover {
      background: #eee !important;
      color: #4da6e7!important;
    }
    .header-area .main-nav .nav li.submenu ul {
      position: relative;
      visibility: inherit;
      opacity: 1;
      z-index: 1;
      transform: translateY(0%);
      transition-delay: 0s, 0s, 0.3s;
      top: 0px;
      width: 100%;
      box-shadow: none;
      height: 0px;
    }
    .header-area .main-nav .nav li.submenu ul li a {
      font-size: 12px;
      font-weight: 400;
    }
    .header-area .main-nav .nav li.submenu ul li a:hover:before {
      width: 0px;
    }
    .header-area .main-nav .nav li.submenu ul.active {
      height: auto !important;
    }
    .header-area .main-nav .nav li.submenu:after {
      color: #3B566E;
      right: 25px;
      font-size: 14px;
      top: 15px;
    }
    .header-area .main-nav .nav li.submenu:hover ul, .header-area .main-nav .nav li.submenu:focus ul {
      height: 0px;
    }
  }
  
  @media (min-width: 767px) {
    .header-area .main-nav .nav {
      display: flex !important;
    }
  }
  
`

export default NavWrapper;