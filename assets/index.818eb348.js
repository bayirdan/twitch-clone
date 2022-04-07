import{W as U,s as n,c as $,r as p,u as z,j as e,a as t,B as y,F as N,b as K,V as W,d as Y,e as X,f as L,A as D,g as M,h as q,R as A,i as J,M as Q,k as Z,l as F,m as ee,n as d,o as C,p as ie,q as te,t as ae,v as b,w as h,L as u,x as se,y as k,C as re,z as T,D as E,E as oe,G as ne,H as le,I as f,J as ce,K as de,N as pe,O as he,P as me,Q as ge,S as xe,T as fe,U as ue,X as ve,Y as be,Z as R,_ as we,$ as ye,a0 as Ne,a1 as ke,a2 as O,a3 as Se,a4 as $e,a5 as ze,a6 as g,a7 as Ce,a8 as Be,a9 as je,aa as Le,ab as De,ac as Me}from"./vendor.24809953.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const S of c.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}};Ae();const Fe=U`

html {
  scroll-behavior: smooth;
}

body {
  background: ${i=>i.theme.body};
  color: ${i=>i.theme.text};
}
body::-webkit-scrollbar {
  width: 5px;
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

a {
  color: ${i=>i.theme.text};
}

.app {
  display: block;
}

@media (min-width: 768px) {
  .app {
    .main {
      padding: 55px 15px 55px 75px;

      &.sidebar-open {
        padding-left: 265px;
      }
    }  
  }
}

  

@media (min-width: 768px) {
  body {
    background: ${i=>i.theme.bodyDesktop};
  }
}

@keyframes pageAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,Te={header:"#ffffff",headerDesktop:"#ffffff",body:"#F7F7F8",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#0e0e10",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10"},Ee={header:"#0e0e10",headerDesktop:"#18181B",body:"#18181B",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8"},Re=n.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
  width: 100%;

  .header-box {
    position: relative;
    width: 100%;
    display: block;
    height: 50px;
    background-color: ${i=>i.theme.headerDesktop};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;

    header {
      background-color: ${i=>i.theme.headerDesktop};
      color: ${i=>i.theme.textColor};
      width: 100vw;
      display: flex;
      align-items: center;
      height: 100%;

      .left {
        display: block;
        height: 100%;

        ul {
          display: flex;
          height: 100%;

          li {
            width: 100%;
            height: 100%;
            display: block;
            margin: 0 15px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;

            .link {
              color: ${i=>i.theme.textColor};
            }

            .item {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: 0.3s;

              .logo {
                font-size: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${i=>i.theme.color};
                transition: 0.3s;
                fill: #fff;
                stroke: #fff;
                position: relative;
                z-index: 4;
                overflow: hidden;

                .logo-bg {
                  z-index: -1;
                  width: 19px;
                  height: 20px;
                  position: absolute;
                  top: 1px;
                  background-color: #fff;
                  border-bottom-right-radius: 8px;
                }
              }

              .item-icon {
                width: 26px;
                height: 26px;
                padding: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s;
                border-radius: 5px;

                &:hover {
                  background-color: ${i=>i.theme.hover};
                }
              }
            }

            &:hover {
              .item {
                .logo {
                  transform: translate(2px, -2px);
                }
              }
              .link {
                color: ${i=>i.theme.color};
              }
            }
          }
          .active {
            border-bottom: 2px solid ${i=>i.theme.color};

            .link {
              color: ${i=>i.theme.color};
            }
          }
        }
      }

      .bottom {
        flex: 1;

        .search-bar {
          max-width: 400px;
          width: 100%;
          height: 35px;
          background-color: ${i=>i.theme.soft}31;
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin: 0 auto;

          input {
            flex: 1;
            background-color: transparent;
            height: 100%;
            padding: 0 10px;
            font-size: 15px;
            color: ${i=>i.theme.textColor};
            transition: 0.2s;
            border: 2px solid transparent;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            &:focus {
              background-color: ${i=>i.theme.headerDesktop};
              border: 2px solid ${i=>i.theme.color};
            }
          }

          .search-icon {
            width: 40px;
            height: 100%;
            background-color: ${i=>i.theme.border};
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

        .right-icons {
          display: block;

          ul {
            display: flex;
            align-items: center;

            li {
              width: 30px;
              height: 30px;
              font-size: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: 0.3s;
              border-radius: 5px;
              margin: 0 3px;

              &.bits {
                span {
                  display: none;
                  font-size: 13px;
                  font-weight: 500;
                  margin-left: 5px;
                }

                &:hover {
                  background-color: ${i=>i.theme.hover};
                }
              }

              &:hover {
                background-color: ${i=>i.theme.hover};
              }
            }
          }
        }
      }

      .profile-desktop {
        margin: 0 20px 0 10px;
      }
    }
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1200px) {
    .header-box header {
      .right .right-icons ul li {
        font-size: 21px;
        margin: 0 8px;
        &.bits {
          width: 95px;
          font-size: 17px;
          background-color: ${i=>i.theme.bits};

          span {
            display: block;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .header-box header {
      .left {
        ul li {
          font-size: 18px;

          .item .item-icon {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`,Oe=n.div`
  .profile-box {
    cursor: pointer;
    position: relative;

    .profile {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: deeppink;
      font-size: 22px;
    }

    .profile-menu {
      display: none;
      position: absolute;
      width: 200px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      top: 35px;
      right: 0px;
      border-radius: 10px;
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      padding: 10px;
      animation: pageAnim 0.3s;

      .menu-box {
        width: 100%;
        font-size: 16px;

        hr {
          background-color: ${i=>i.theme.border};
          height: 1px;
          margin: 10px 0;
        }

        .profile-info {
          display: flex;
          align-items: center;

          .pp {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background-color: deeppink;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          }

          .info {
            display: block;
            padding: 10px;
            font-size: 14px;

            .username {
              font-weight: 600;
              padding: 3px 0;
            }

            .status {
              display: flex;
              align-items: center;
              color: ${i=>i.theme.soft};

              .status-icon {
                font-size: 7px;
              }
              .status-icon.online {
                color: limegreen;
              }

              span {
                font-size: 13px;
                margin-left: 5px;
              }
            }
          }
        }

        .status-button {
          width: 100%;
          margin: 20px 0;
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .menu-list {
          display: block;

          ul {
            display: block;

            li {
              width: 100%;
              padding: 8px 5px;
              transition: 0.3s;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .item {
                display: flex;
                align-items: center;
                font-size: 18px;

                span {
                  margin-left: 8px;
                  font-size: 13px;
                }
              }

              &:hover {
                background-color: ${i=>i.theme.border};
              }
            }
          }
        }
      }
    }
    // Show the menu when you click the profile
    .show-profile-menu {
      display: block;
    }
  }
`,_e=n.div`
  .button-box {
    width: 36px;
    height: 18px;
    border: 2px solid ${i=>i.theme.textColor};
    background-color: ${i=>i.theme.header};
    border-radius: 999px;
    position: relative;
    display: flex;
    align-items: center;

    .ball {
      position: absolute;
      left: 2px;
      background-color: ${i=>i.theme.textColor};
      width: 12px;
      height: 12px;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
  }
  .button-true {
    border: 2px solid ${i=>i.theme.color};

    .ball {
      transform: translateX(16px);
      background-color: ${i=>i.theme.color};
    }
  }
`,_=$({name:"site",initialState:{darkStatus:!1,sideBarStatus:!1},reducers:{setDarkMode:i=>{i.darkStatus=!i.darkStatus},setSideBarStatus:i=>{i.sideBarStatus=!i.sideBarStatus}}}),{setDarkMode:P,setSideBarStatus:Pe}=_.actions;var Ie=_.reducer;const B=({whichStatus:i,changeStatus:a})=>{const[s,r]=p.exports.useState(!1),o=z();return e(_e,{children:e("div",{className:`button-box ${s?"button-true":""}`,onClick:()=>{!i||(r(!s),i==="online"?a():o(P()))},children:e("div",{className:"ball"})})})},He=()=>{const[i,a]=p.exports.useState(!1),[s,r]=p.exports.useState(!1);return e(Oe,{children:t("div",{className:"profile-box",children:[e("div",{className:"profile",onClick:()=>a(!i),children:e(y,{})}),e("div",{className:`profile-menu ${i?"show-profile-menu":""}`,children:t("div",{className:"menu-box",children:[t("div",{className:"profile-info",children:[e("div",{className:"pp",children:e(y,{})}),t("div",{className:"info",children:[e("div",{className:"username",children:"khaleesi"}),t("div",{className:"status",children:[e("div",{className:`status-icon ${s?"online":""}`,children:e(N,{})}),e("span",{children:s?"Online":"Offline"})]})]})]}),t("div",{className:"status-button",children:[e("span",{children:"Online"}),e(B,{whichStatus:"online",changeStatus:()=>r(!s)})]}),e("hr",{}),e("div",{className:"menu-list",children:t("ul",{children:[e("li",{children:t("div",{className:"item",children:[e(K,{})," ",e("span",{children:"Channel"})]})}),e("li",{children:t("div",{className:"item",children:[e(W,{})," ",e("span",{children:"Video Producer"})]})}),e("li",{children:t("div",{className:"item",children:[e(Y,{})," ",e("span",{children:"Creator Dashboard"})]})}),e("li",{children:t("div",{className:"item",children:[e(X,{})," ",e("span",{children:"Safety"})]})}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(L,{})," ",e("span",{children:"Friends"})]})}),e("li",{children:t("div",{className:"item",children:[e(D,{})," ",e("span",{children:"Subscriptions"})]})}),e("li",{children:t("div",{className:"item",children:[e(M,{})," ",e("span",{children:"Drops"})]})}),e("li",{children:t("div",{className:"item",children:[e(q,{})," ",e("span",{children:"Wallet"})]})}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(A,{})," ",e("span",{children:"Settings"})]})}),e("li",{children:t("div",{className:"item",children:[e(J,{style:{transform:"rotate(180deg)"}})," ",e("span",{children:"BetterTTV Settings"})]})}),t("li",{children:[t("div",{className:"item",children:[e(Q,{})," ",e("span",{children:"Language"})]}),e(Z,{})]}),t("li",{children:[t("div",{className:"item",children:[e(F,{})," ",e("span",{children:"Dark Theme"})]}),e(B,{whichStatus:"darkmode"})]}),e("hr",{}),e("li",{children:t("div",{className:"item",children:[e(ee,{style:{transform:"rotate(180deg)"}})," ",e("span",{children:"Log Out"})]})})]})})]})})]})})},Ge=n.div`
  .sidebar-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 55px;
    height: 100vh;
    background-color: ${i=>i.theme.sideBar};
    z-index: 9;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.1);
    padding-top: 60px;
    transition: 0.3s;

    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      height: 50px;

      h1 {
        width: 80%;
        text-transform: uppercase;
        font-size: 0px;
        color: ${i=>i.theme.softDesktop};
        transition: 0.3s;
        opacity: 0;
      }

      .title-icon {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${i=>i.theme.textColor};

        @media (max-width: 1199px) {
          & {
            display: none;
          }
        }
      }

      .followed,
      .camera {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${i=>i.theme.textColor};
      }
      @media (min-width: 1200px) {
        .followed {
          display: none;
        }
      }
    }

    .side-search {
      display: none;
      padding: 0 10px;
      position: absolute;
      bottom: 10px;
      animation: pageAnim 1s;
    }

    .list ul li {
      .item .hover-section {
        display: none;
        animation: pageAnim 1s;
      }
    }

    &:hover {
      width: 250px;

      .list-title {
        display: flex;

        h1 {
          font-size: 13px;
          opacity: 1;
        }

        .followed,
        .camera {
          display: none;
        }
      }

      @media (min-height: 800px) {
        .side-search {
          display: block;
        }
      }

      .list {
        .show-more span {
          font-size: 13px;
          opacity: 1;

          &:hover {
            text-decoration: underline;
          }
        }

        ul li {
          width: 250px;

          .item .hover-section {
            display: flex;
          }
        }
      }
    }
  }

  .side-open {
    width: 250px;

    .list-title {
      display: flex;

      h1 {
        font-size: 13px;
        opacity: 1;
      }

      .title-icon {
        transform: rotate(180deg);
      }
      .camera {
        display: none;
      }
    }

    @media (min-height: 800px) {
      .side-search {
        display: block;
      }
    }

    .list {
      .show-more span {
        font-size: 13px;
        opacity: 1;

        &:hover {
          text-decoration: underline;
        }
      }

      ul li {
        width: 250px;

        .item .hover-section {
          display: flex;
        }
      }
    }

    @media (max-width: 1199px) {
      display: none;
    }
  }
`,Ve=n.div`
  li {
    display: block;
    padding: 10px;
    height: 50px;
    color: ${i=>i.theme.textColor};
    cursor: pointer;
    transition: 0.3s;

    .item {
      display: flex;
      align-items: center;
      font-size: 15px;
      width: 100%;

      .pp {
        display: block;
        border-radius: 999px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hover-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
        flex: 1;

        .info {
          display: block;

          .username {
            font-weight: 600;
          }
          .title {
            color: ${i=>i.theme.soft};
            font-size: 13px;
          }
        }

        .live {
          display: flex;
          width: 25%;
          align-items: center;

          .live-icon {
            color: red;
            font-size: 7px;
          }

          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }

    &:hover {
      background-color: ${i=>i.theme.hover};
    }
  }
`,Ue=n.div`
  .list {
    display: block;
    margin-bottom: 10px;

    .show-more {
      padding: 10px;
      width: 100px;

      span {
        transition: 0.3s;
        font-size: 0px;
        color: ${i=>i.theme.color};
        font-weight: 500;
        cursor: pointer;
        opacity: 0;
      }
    }
  }
`,Ke=({user:i,imageId:a})=>e(Ve,{children:e("li",{children:t("div",{className:"item",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${a}`})}),t("div",{className:"hover-section",children:[t("div",{className:"info",children:[e("div",{className:"username",children:i.username}),e("div",{className:"title",children:i.game})]}),t("div",{className:"live",children:[e("div",{className:"live-icon",children:e(N,{})}),e("span",{children:"333"})]})]})]})})}),j=()=>{const{users:i}=d(a=>a.user);return e(Ue,{children:t("div",{className:"list",children:[e("ul",{children:i.map((a,s)=>{if(!(s>4))return e(Ke,{user:a,imageId:s},s)})}),e("div",{className:"show-more",children:e("span",{children:"Show More"})})]})})},We=n.div`
  display: block;
  width: 100%;

  .searchbar-box {
    width: 100%;
    background-color: ${i=>i.theme.hover};
    color: ${i=>i.theme.textColor};
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    border: 2px solid transparent;
    transition: 0.3s;

    .search-icon {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .input {
      background-color: transparent;
      flex: 1;
      font-size: 13px;
      padding: 10px;
      color: ${i=>i.theme.textColor};
    }
  }
  .searchbar-box.focus {
    background-color: transparent;
    border: 2px solid ${i=>i.theme.color};
  }
`,I=({placeholder:i})=>{const[a,s]=p.exports.useState(!1);return e(We,{children:t("div",{className:`searchbar-box ${a?"focus":""}`,children:[e("div",{className:"search-icon",children:e(C,{})}),e("input",{type:"text",placeholder:i,className:"input",onFocus:()=>s(!0),onBlur:()=>s(!1)})]})})},Ye=({mySize:i})=>{const{sideBarStatus:a}=d(r=>r.site),s=z();return e(Ge,{children:t("div",{className:`sidebar-box ${a&&i>1199?"side-open":""}`,children:[t("div",{className:"list-title",children:[e("h1",{children:"Followed Channels"}),e("div",{className:"title-icon",onClick:()=>s(Pe(!a)),children:e(ie,{})}),e("div",{className:"followed",children:e(te,{})})]}),e(j,{}),t("div",{className:"list-title",children:[e("h1",{children:"Recommended Channels"}),e("div",{className:"camera",children:e(ae,{})})]}),e(j,{}),e("div",{className:"side-search",children:e(I,{placeholder:"Search to Add Friends"})})]})})},Xe=({mySize:i})=>{const{pathname:a}=b();return e(Re,{children:t(h,{children:[e("div",{className:"header-box",children:t("header",{children:[e("div",{className:"left",children:t("ul",{children:[e("li",{children:e("div",{className:"item",children:e(u,{to:"/",children:t("div",{className:"logo",children:[e("div",{className:"logo-bg"}),e(se,{})]})})})}),e("li",{className:a.includes("following")?"active":"",children:e(u,{to:"/following",className:"link",children:e("div",{className:"item",children:"Following"})})}),e("li",{className:a.includes("browse")?"active":"",children:e(u,{to:"/browse",className:"link",children:e("div",{className:"item",children:"Browse"})})}),e("li",{children:e("div",{className:"item",children:e(k,{className:"item-icon"})})})]})}),e("div",{className:"bottom",children:t("div",{className:"search-bar",children:[e("input",{type:"text",placeholder:"Search"}),e("div",{className:"search-icon",children:e(C,{})})]})}),e("div",{className:"right",children:e("div",{className:"right-icons",children:t("ul",{children:[e("li",{children:e(re,{})}),e("li",{children:e(T,{})}),e("li",{children:e(E,{})}),t("li",{className:"bits",children:[e(oe,{}),e("span",{children:"Get Bits"})]})]})})}),e("div",{className:"profile-desktop",children:e(He,{})})]})}),e("div",{className:"left-bar",children:e(Ye,{mySize:i})})]})})},qe=n.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${i=>i.theme.header};
    color: ${i=>i.theme.iconColor};
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 4;

    .profile-box {
      width: 30px;
      height: 30px;
      background-color: deeppink;
      border-radius: 999px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 3px;
      justify-content: center;
      font-size: 24px;
      overflow: hidden;
      color: #fff;
      cursor: pointer;
    }

    .right-buttons {
      display: flex;
      justify-content: space-between;
      max-width: 160px;
      flex: 1;
      font-size: 24px;

      & > * {
        cursor: pointer;

        &:hover {
          opacity: 0.75;
        }
      }
    }
  }

  // Bottom Navbar
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    background-color: ${i=>i.theme.header};
    z-index: 4;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: ${i=>i.theme.iconColor};
      cursor: pointer;
      transition: 0.3s;

      span {
        font-size: 12px;
        margin-top: 5px;
      }

      .item__browse {
        transform: rotateY(180deg);
      }
    }

    .active {
      color: ${i=>i.theme.color};
    }
  }

  // Profile Menu
  .profile-menu-box {
    display: none;

    &.visible {
      display: block;
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`,Je=n.div`
  // Mobile Search
  display: none;

  &.search-visible {
    display: block;
  }

  .search-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${i=>i.theme.header};
    z-index: 5;
    animation: searchBarAnim 0.3s;

    .search-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 30px;

      .search-close {
        margin-right: 10px;
        cursor: pointer;
      }

      input {
        width: 100%;
        background-color: ${i=>i.theme.border};
        color: ${i=>i.theme.textColor};
        height: 60%;
        padding: 10px;
        border-radius: 8px;
        font-size: 18px;
      }
    }
  }

  @keyframes searchBarAnim {
    0% {
      display: block;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,Qe=({searchStatus:i,setSearchStatus:a})=>e(Je,{className:i?"search-visible":"",children:e("div",{className:"search-box",children:t("div",{className:"search-bar",children:[e(ne,{className:"search-close",onClick:()=>a(!i)}),e("input",{type:"text",placeholder:"Search..."})]})})}),Ze=n.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${i=>i.theme.header}d9;
  z-index: 5;

  .profile-menu-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 95%;
    overflow-y: scroll;
    background-color: ${i=>i.theme.header};
    padding: 0 15px;
    animation: profileMenuAnim 0.3s;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${i=>i.theme.header};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      padding: 20px 0;
      z-index: 10;

      h1 {
        font-weight: 500;
        font-size: 20px;
        color: ${i=>i.theme.textColor};
      }

      span {
        position: absolute;
        color: ${i=>i.theme.textColor};
        right: 15px;
        font-size: 15px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .user {
      width: 100%;
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${i=>i.theme.border};

      .user__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        .user-box {
          width: 35px;
          height: 35px;
          background-color: deeppink;
          border-radius: 999px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          color: #fff;
          font-size: 28px;
          padding-bottom: 4px;
          cursor: pointer;
        }

        button {
          background-color: ${i=>i.theme.color};
          padding: 7px 14px;
          max-width: 110px;
          width: 100%;
          border-radius: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            opacity: 0.8;
          }

          .cast-icon {
            font-size: 18px;
          }
        }
      }

      .user__bottom {
        padding: 0 10px;

        .username {
          font-weight: 600;
          color: ${i=>i.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${i=>i.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${i=>i.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${i=>i.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${i=>i.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${i=>i.theme.textColor};
            transition: filter 0.1s;

            .title-left {
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 400;

              .title-icon {
                margin-right: 10px;
                font-size: 25px;
              }
            }
          }

          &:hover:not(:last-child) .settings__title {
            filter: contrast(50%);
          }
        }
      }
    }

    @keyframes profileMenuAnim {
      0% {
        transform: translateY(1000px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`,ei=n.div`
  .darkMode-container {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background-color: ${i=>i.theme.darkModeBg};
    position: relative;

    .ball {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
    .ball.dark {
      transform: translateX(20px);
    }
  }
`,ii=()=>{const{darkStatus:i}=d(r=>r.site),a=z();return e(ei,{children:e("div",{className:"darkMode-container",onClick:r=>(r.preventDefault(),a(P())),children:e("div",{className:`ball ${i?"dark":""}`})})})},ti=({handleCloseProfileMenu:i})=>e(Ze,{children:t("div",{className:"profile-menu-container",children:[t("div",{className:"title",children:[e("h1",{children:"Account"}),e("span",{onClick:i,children:"Done"})]}),t("div",{className:"user",children:[t("div",{className:"user__top",children:[e("div",{className:"user-box",children:e(y,{})}),t("button",{children:[e(le,{className:"cast-icon"})," Go Live"]})]}),t("div",{className:"user__bottom",children:[e("div",{className:"username",children:"khaleesi"}),e("div",{className:"status",children:"Online"})]})]}),e("div",{className:"settings",children:t("ul",{children:[e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(D,{className:"title-icon"}),"Subscriptions"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(M,{className:"title-icon"}),"Drops"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(L,{className:"title-icon"}),"Friends"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(A,{className:"title-icon"}),"Settings"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(ce,{className:"title-icon"}),"Set Presence"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(de,{className:"title-icon"}),"My Channel"]}),e(f,{})]})}),e("li",{children:t("div",{className:"settings__title",children:[t("div",{className:"title-left",children:[e(F,{className:"title-icon"}),"Dark Mode"]}),e(ii,{})]})})]})})]})}),ai=()=>{const{pathname:i}=b(),[a,s]=p.exports.useState(!1),[r,o]=p.exports.useState(!1);return t(qe,{children:[e("div",{className:`profile-menu-box ${r?"visible":""}`,children:e(ti,{handleCloseProfileMenu:()=>o(!r)})}),t("header",{children:[e("div",{className:"profile-box",children:e(y,{onClick:()=>o(!r)})}),e(Qe,{searchStatus:a,setSearchStatus:s}),t("div",{className:"right-buttons",children:[e(pe,{}),e(T,{}),e(E,{}),e(C,{onClick:()=>s(!a)})]})]}),t("nav",{children:[e(u,{to:"/following",children:t("div",{className:`item ${i==="/following"?"active":""}`,children:[e(he,{}),e("span",{children:"Following"})]})}),e(u,{to:"/",children:t("div",{className:`item ${i==="/"?"active":""}`,children:[e(me,{}),e("span",{children:"Discover"})]})}),e(u,{to:"/browse",children:t("div",{className:`item ${i==="/browse"?"active":""}`,children:[e(ge,{className:"item__browse"}),e("span",{children:"Browse"})]})})]})]})},si=({mySize:i})=>t("div",{className:"header",children:[e(ai,{}),e(Xe,{mySize:i})]}),ri=n.div`
  /* Home Mobile */
  .home-mobile {
    display: none;

    .home-box {
      padding: 55px 10px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .categories {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 30px 0;

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          background-color: ${i=>i.theme.color};
          color: #fff;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;

          .category-icon {
            font-size: 24px;
          }
        }
      }
      .home-title {
        font-size: 18px;
        width: 100%;
        padding: 8px 0;
        background-color: ${i=>i.theme.header};
        position: sticky;
        top: 50px;

        span {
          color: ${i=>i.theme.color};
          cursor: pointer;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  /* Home Desktop */
  .home-desktop {
    display: none;

    .home-box {
      display: block;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,H=i=>{let a=!1,s,r;i.addEventListener("mousedown",o=>{a=!0,s=o.pageX,r=i.scrollLeft}),i.addEventListener("mousemove",o=>{if(!a)return;let c=s-o.pageX;i.scrollLeft=r+c}),i.addEventListener("mouseup",()=>a=!1),i.addEventListener("mouseleave",()=>a=!1)},oi=n.div`
  .channel-box {
    padding: 5px 0;
    user-select: none;
    animation: pageAnim 0.3s ease-in-out;

    .live-screen {
      max-width: 300px;
      width: 100%;
      position: relative;
      z-index: -1;

      span {
        position: absolute;
        left: 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.5);

        &.viewers {
          bottom: 10px;
          padding: 5px;
        }

        &.live {
          top: 10px;
          background-color: red;
          padding: 2px 5px;
          text-transform: uppercase;
        }
      }
    }

    @media (max-width: 767px) {
      .for-browse {
        max-width: 100%;
      }
    }

    .live-info {
      display: flex;
      gap: 10px;
      padding: 5px;

      .pp {
        width: 38px;
        height: 38px;
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .titles {
        color: ${i=>i.theme.textColor};
        font-size: 14px;
        flex: 1;

        .username-box {
          font-size: 15px;
          padding-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .username {
            font-weight: 600;
            cursor: pointer;
          }

          .others {
            font-size: 12px;
            cursor: pointer;
            color: ${i=>i.theme.soft};
          }
        }
        .title {
          padding: 3px 0;
        }

        .tag {
          padding: 3px 5px;
          border-radius: 10px;
          margin-top: 5px;
          background-color: ${i=>i.theme.border};
          display: inline-block;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }
`,ni=n.div`
  .channels-box {
    width: 100%;
    margin-bottom: 15px;
    .channels {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 767px) {
    .channels-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .channels {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`,G=({user:i,imageId:a})=>{const{pathname:s}=b();return e(oi,{children:t("div",{className:"channel-box",children:[t("div",{className:`live-screen ${s.includes("browse")?"for-browse":""}`,children:[e("img",{src:i.liveScreen,alt:""}),e("span",{className:"live",children:"Live"}),t("span",{className:"viewers",children:[i.viewers," Viewers"]})]}),t("div",{className:"live-info",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${a}`,alt:""})}),t("div",{className:"titles",children:[t("div",{className:"username-box",children:[e("div",{className:"username",children:i.username}),e(k,{className:"others"})]}),e("div",{className:"title",children:i.title}),e("div",{className:"game",children:i.game}),e("div",{className:"tag",children:i.tag})]})]})]})})},w=({channel:i})=>{const{users:a}=d(s=>s.user);return p.exports.useEffect(()=>{const s=document.querySelector(`#${i}`);H(s)}),e(ni,{children:e("div",{className:"channels-box",id:i,children:e("div",{className:"channels",children:a.map((s,r)=>{if(r<6)return e(G,{user:s,imageId:r},r)})})})})},li=n.div`
  .game-box {
    padding: 5px 0;
    color: ${i=>i.theme.textColor};
    user-select: none;

    .game-img {
      max-width: 120px;
      width: 100%;
      z-index: -1;

      img {
        z-index: -1;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    .game-name {
      font-size: 15px;
      font-weight: 600;
      padding: 3px 0;
    }

    .game-viewer {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 15px;

      .viewer-icon {
        color: red;
        font-size: 10px;
      }
    }
  }
`,ci=n.div`
  .small-categories-box {
    width: 100%;
    margin-bottom: 15px;
    .small-categories {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
    }
  }

  @media (max-width: 767px) {
    .small-categories-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .small-categories {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`,di=({game:i})=>{const a=s=>s.length<11?s:s.slice(0,10)+"...";return e(li,{children:t("div",{className:"game-box",children:[e("div",{className:"game-img",children:e("img",{src:i.image})}),e("div",{className:"game-name",children:a(i.name)}),t("div",{className:"game-viewer",children:[e(N,{className:"viewer-icon"})," ",i.viewer]})]})})},pi=()=>{const{games:i}=d(a=>a.category);return p.exports.useEffect(()=>{const a=document.querySelector(".small-categories-box");H(a)}),e(ci,{children:e("div",{className:"small-categories-box",children:e("div",{className:"small-categories",children:i.map((a,s)=>e(di,{game:a},s))})})})},hi=n.div`
  display: block;

  .slide {
    display: block;
    padding: 50px 0;
    position: relative;

    .three {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      z-index: 3;

      img {
        width: 380px;
        height: 240px;
        cursor: pointer;
        transition: 0.3s;
        filter: blur(1px) brightness(0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

        &:hover {
          transform: scale(1.03);
          filter: blur(1px) brightness(1);
        }
      }

      .two {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        z-index: 5;

        img {
          width: 450px;
          height: 270px;
        }

        .one {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 7;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

          .img {
            position: relative;
            height: 300px;

            img {
              width: 500px;
              height: 300px;
              transition: 0.3s;
              box-shadow: none;
              filter: none;

              &:hover {
                transform: none;
              }
            }

            .screen-icons {
              position: absolute;
              bottom: 5px;
              width: 100%;
              padding: 0 10px;
              color: #fff;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .icon-screen {
                margin: 0 5px;
                cursor: pointer;
              }
            }

            .screen-live {
              position: absolute;
              top: 10px;
              left: 10px;

              span {
                background-color: red;
                color: #fff;
                padding: 3px 5px;
                text-transform: uppercase;
                border-radius: 5px;
                font-size: 14px;
              }
            }
          }

          .info {
            width: 200px;
            height: 300px;
            background-color: ${i=>i.theme.headerDesktop};

            .info-top {
              width: 100%;
              padding: 10px;

              .profile {
                display: flex;

                .pp {
                  img {
                    width: 40px;
                    height: 40px;
                    border-radius: 999px;
                    cursor: pointer;
                    filter: none;
                    box-shadow: none;
                  }
                }

                .profile-info {
                  display: block;
                  padding: 0 10px;
                  font-size: 14px;
                  color: ${i=>i.theme.color};

                  .username {
                    font-weight: 600;
                    cursor: pointer;
                  }
                  .game {
                    cursor: pointer;
                    padding: 3px 0;
                  }
                  .viewers {
                    font-size: 13px;
                    color: ${i=>i.theme.textColor};
                  }
                }
              }

              .tags {
                margin-top: 10px;
                display: flex;
                font-size: 13px;
                gap: 5px;

                .tag {
                  padding: 4px 8px;
                  background-color: ${i=>i.theme.hover};
                  border-radius: 10px;
                  font-weight: 500;
                  color: ${i=>i.theme.softDesktop};
                  cursor: pointer;
                }
              }
            }

            .info-bottom {
              padding: 10px;
              font-size: 13px;
              line-height: 1.7;
              color: ${i=>i.theme.textColor};
            }
          }
        }
      }
    }

    /* Slide Arrows */
    .arrow {
      position: absolute;
      top: 150px;
      font-size: 22px;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      border-radius: 5px;
      color: ${i=>i.theme.textColor};
      z-index: 6;

      &:hover {
        background-color: ${i=>i.theme.hover};
      }
    }

    .arrow-left {
      left: 20px;
    }

    .arrow-right {
      right: 20px;
    }
    /* Slide Arrows */
  }

  @media (max-width: 1679px) {
    .slide .three {
      img {
        width: 300px;
      }

      .two {
        img {
          width: 400px;
        }
      }
    }
  }
  @media (max-width: 1439px) {
    .slide .three {
      img {
        width: 250px;
      }

      .two {
        img {
          width: 340px;
        }
      }
    }
  }
  @media (max-width: 1279px) {
    .slide .three {
      img {
        width: 0;
      }
    }
  }
  @media (max-width: 1023px) {
    .slide {
      .three {
        .two {
          img {
            width: 0;
          }

          .one {
            .img img {
              width: 460px;
            }

            .info {
              width: 180px;
            }
          }
        }
      }

      .arrow-left {
        left: 5px;
      }

      .arrow-right {
        right: 5px;
      }
    }
  }

  @media (max-width: 833px) {
    .slide {
      .three {
        .two {
          .one {
            .img img {
              width: 420px;
            }
            .info {
              width: 160px;
            }
          }
        }
      }

      .arrow-left {
        left: 0;
      }

      .arrow-right {
        right: 0;
      }
    }
  }
`,mi=()=>{const{users:i}=d(a=>a.user);return e(hi,{children:t("div",{className:"slide",children:[t("div",{className:"three",children:[e("img",{src:i[7].liveScreen}),e("img",{src:i[2].liveScreen}),e("img",{src:i[6].liveScreen}),t("div",{className:"two",children:[e("img",{src:i[4].liveScreen}),e("img",{src:i[5].liveScreen}),t("div",{className:"one",children:[t("div",{className:"img",children:[e("img",{src:i[1].liveScreen}),t("div",{className:"screen-icons",children:[t("div",{className:"left",children:[e(xe,{className:"icon-screen"}),e(fe,{className:"icon-screen"})]}),t("div",{className:"right",children:[e(ue,{className:"icon-screen"}),e(ve,{className:"icon-screen"})]})]}),e("div",{className:"screen-live",children:e("span",{children:"live"})})]}),t("div",{className:"info",children:[t("div",{className:"info-top",children:[t("div",{className:"profile",children:[e("div",{className:"pp",children:e("img",{src:"https://i.pravatar.cc/50"})}),t("div",{className:"profile-info",children:[e("div",{className:"username",children:"JonSnow"}),e("div",{className:"game",children:"Dota 2"}),e("div",{className:"viewers",children:"297 viewers"})]})]}),t("div",{className:"tags",children:[e("div",{className:"tag",children:"Esports"}),e("div",{className:"tag",children:"English"})]})]}),e("div",{className:"info-bottom",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, consequatur blanditiis consequuntur ipsa tempore"})]})]})]})]}),e("div",{className:"arrow arrow-left",children:e(be,{})}),e("div",{className:"arrow arrow-right",children:e(f,{})})]})})},gi=n.div`
  .channel-box {
    margin-top: 10px;
    flex: 1;

    .live-screen {
      cursor: pointer;
      transition: 0.2s;
      position: relative;

      img {
        transition: 0.2s;
      }

      .live {
        position: absolute;
        top: 7%;
        left: 5%;
        color: #fff;
        background-color: red;
        padding: 2px 4px;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 5px;
        transition: 0.2s;
      }
      .viewers {
        position: absolute;
        bottom: 7%;
        left: 5%;
        padding: 2px 3px;
        color: #fff;
        font-size: 13px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        transition: 0.2s;
      }
      .invisible {
        display: none;
      }

      .video {
        display: none;

        .video-tag {
          position: absolute;
          padding: 2px 3px;
          color: #fff;
          font-size: 13px;
          border-radius: 5px;
          transition: 0.2s;
        }
        .top {
          top: 7%;
          left: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .bottom {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          bottom: 7%;
          left: 5%;
        }

        .bottom-right {
          bottom: 7%;
          right: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        &.video-visible {
          display: block;
        }
      }

      &:hover {
        background-color: ${i=>i.theme.color};

        img,
        .live,
        .viewers,
        .video > * {
          transform: translate(6px, -3px);
        }
      }
    }

    .channel-info {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      .left {
        display: flex;

        .pp {
          display: block;

          img {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            cursor: pointer;
          }
        }

        .profile-info {
          padding: 0 10px;
          font-size: 14px;
          color: ${i=>i.theme.textColor};

          .title {
            font-weight: 500;
          }
          .username {
            padding: 5px 0;
          }

          .username,
          .game {
            cursor: pointer;
            color: ${i=>i.theme.soft};
          }

          .tags {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;

            .tag {
              padding: 4px 8px;
              background-color: ${i=>i.theme.hover};
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
      }

      .right {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(1) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(2) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(3) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(4) {
      display: none;
    }
  }
`,xi=n.div`
  .channels-box {
    display: block;
    margin-top: 30px;
    color: ${i=>i.theme.textColor};

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;
    }

    .list {
      display: flex;
      gap: 10px;
    }
  }
`,fi=({user:i,imageId:a,video:s})=>e(gi,{children:t("div",{className:"channel-box",children:[t("div",{className:"live-screen",children:[e("img",{src:i.liveScreen,alt:""}),e("div",{className:`live ${s?"invisible":""}`,children:"live"}),e("div",{className:`viewers ${s?"invisible":""}`,children:"333 viewers"}),t("div",{className:`video ${s?"video-visible":""}`,children:[e("div",{className:"video-tag top",children:"11:44"}),e("div",{className:"video-tag bottom-right",children:"4 hours ago"}),e("div",{className:"video-tag bottom",children:"188 views"})]})]}),t("div",{className:"channel-info",children:[t("div",{className:"left",children:[e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${a}`,alt:""})}),t("div",{className:"profile-info",children:[e("div",{className:"title",children:i.title}),e("div",{className:"username",children:i.username}),e("div",{className:"game",children:i.game}),t("div",{className:"tags",children:[e("div",{className:"tag",children:"English"}),e("div",{className:"tag",children:"Esports"})]})]})]}),e("div",{className:"right",children:e(k,{})})]})]})}),l=({channelTitle:i,video:a})=>{const{users:s}=d(r=>r.user);return e(xi,{children:t("div",{className:"channels-box",children:[i&&e("h1",{children:i}),e("div",{className:"list",children:s.map((r,o)=>{if(o<6)return e(fi,{user:r,imageId:o,video:a},o)})})]})})},ui=n.div`
  display: block;
  width: 100%;
  padding: 0 5px;

  .game-box {
    font-size: 15px;
    color: ${i=>i.theme.textColor};

    .game-picture {
      cursor: pointer;
      transition: 0.2s;

      img {
        width: 100%;
        transition: 0.2s;
      }

      &:hover {
        background-color: ${i=>i.theme.color};

        img {
          transform: translate(6px, -3px);
        }
      }
    }

    .game-name {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.6;
        cursor: pointer;
      }

      .other-icon {
        font-size: 13px;
        cursor: pointer;
      }
    }

    .game-viewers {
      display: inline-block;
      font-size: 14px;
      line-height: 1.6;
      color: ${i=>i.theme.soft};
    }

    .tags {
      font-size: 14px;
      margin-top: 5px;

      .tag {
        display: inline-block;
        padding: 4px 8px;
        background-color: ${i=>i.theme.hover};
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1919px) {
    &:nth-last-child(-n + 3) {
      display: none;
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(-n + 4) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(-n + 5) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(-n + 7) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(-n + 8) {
      display: none;
    }
  }
  @media (max-width: 833px) {
    &:nth-last-child(-n + 9) {
      display: none;
    }
  }
`,vi=n.div`
  .categories-box {
    display: block;
    margin-top: 30px;

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;

      span {
        cursor: pointer;
        color: ${i=>i.theme.color};
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .list {
      display: grid;
      margin-top: 10px;
      grid-template-columns: repeat(12, calc(100% / 12));
    }

    @media (max-width: 1919px) {
      .list {
        grid-template-columns: repeat(9, calc(100% / 9));
      }
    }
    @media (max-width: 1679px) {
      .list {
        grid-template-columns: repeat(8, calc(100% / 8));
      }
    }
    @media (max-width: 1439px) {
      .list {
        grid-template-columns: repeat(7, calc(100% / 7));
      }
    }
    @media (max-width: 1279px) {
      .list {
        grid-template-columns: repeat(5, calc(100% / 5));
      }
    }
    @media (max-width: 1023px) {
      .list {
        grid-template-columns: repeat(4, calc(100% / 4));
      }
    }
    @media (max-width: 833px) {
      .list {
        grid-template-columns: repeat(3, calc(100% / 3));
      }
    }
  }
`,bi=({game:i})=>e(ui,{children:t("div",{className:"game-box",children:[e("div",{className:"game-picture",children:e("img",{src:i.image,alt:""})}),t("div",{className:"game-name",children:[e("div",{className:"name",children:i.name}),e("div",{className:"other-icon",children:e(k,{})})]}),t("div",{className:"game-viewers",children:[i.viewer," viewers"]}),e("div",{className:"tags",children:e("div",{className:"tag",children:"English"})})]})}),x=({title:i,boldTitle:a})=>{const{games:s}=d(r=>r.category);return e(vi,{children:t("div",{className:"categories-box",children:[t("h1",{children:[e("span",{children:a})," ",i]}),e("div",{className:"list",children:s.map((r,o)=>e(bi,{game:r},o))})]})})},wi=n.div`
  display: block;
  width: 100%;

  .tags-box {
    display: block;
    width: 100%;

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;

      li {
        display: block;

        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: ${i=>i.theme.color};
          border-radius: 10px;
          height: 45px;
          padding: 0 15px;
          color: #fff;
          transition: 0.3s;
          cursor: pointer;

          span {
            font-size: 24px;
            font-weight: 500;
          }

          .icon {
            cursor: pointer;
          }
        }

        &:hover {
          .item {
            background-color: ${i=>i.theme.color}e9;
          }
        }
      }

      @media (max-width: 1199px) {
        & {
          grid-template-columns: repeat(4, 1fr);

          li:nth-last-child(1) {
            display: none;
          }
        }
      }
      @media (max-width: 1023px) {
        & {
          grid-template-columns: repeat(3, 1fr);

          li:nth-last-child(2) {
            display: none;
          }
        }
      }
    }
  }
`,V=()=>e(wi,{children:e("div",{className:"tags-box",children:t("ul",{children:[e("li",{children:t("div",{className:"item",children:[e("span",{children:"Games"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"IRL"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Music"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Esports"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),e("li",{children:t("div",{className:"item",children:[e("span",{children:"Creative"}),e("div",{className:"icon",children:e("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),yi=n.div`
  .show-more {
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
      font-size: 13px;
      font-weight: 600;
      padding: 5px 15px;
      margin: 0 10px;
      background-color: ${i=>i.theme.bodyDesktop};
      color: ${i=>i.theme.color};
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;

      .down-icon {
        font-size: 20px;
      }

      &:hover {
        background-color: ${i=>i.theme.hover};
      }
    }
  }

  .show-more::before,
  .show-more::after {
    content: "";
    height: 1px;
    flex: 1;
    background-color: ${i=>i.theme.hover};
  }
`,m=({title:i})=>e(yi,{children:e("div",{className:"show-more",children:i&&t("span",{children:[i,e(R,{className:"down-icon"})]})})}),Ni=()=>e(h,{children:t(ri,{children:[e("div",{className:"home-mobile",children:t("div",{className:"home-box",children:[e("h1",{children:"Discover"}),t("div",{className:"categories",children:[t("div",{className:"category-item",children:["Music ",e(we,{className:"category-icon"})]}),t("div",{className:"category-item",children:["Games ",e(ye,{className:"category-icon"})]}),t("div",{className:"category-item",children:["Esports ",e(Ne,{className:"category-icon"})]}),t("div",{className:"category-item",children:["IRL ",e(ke,{className:"category-icon"})]})]}),e("h3",{className:"home-title",children:"Live channels we think you will like"}),e("div",{className:"live-channels",children:e(w,{channel:"js-youLike"})}),t("h3",{className:"home-title",children:[e("span",{children:"Categories"})," we think you will like"]}),e("div",{className:"game-categories",children:e(pi,{})}),e("h3",{className:"home-title",children:"Recommended communities"}),e("div",{className:"live-channels",children:e(w,{channel:"js-smaller"})}),t("h3",{className:"home-title",children:["Recommended ",e("span",{children:"Dota 2"})," channels"]}),e("div",{className:"live-channels",children:e(w,{channel:"js-dota2"})}),t("h3",{className:"home-title",children:["Recommended ",e("span",{children:"Chees"})," channels"]}),e("div",{className:"live-channels",children:e(w,{channel:"js-chees"})}),t("h3",{className:"home-title",children:["Recommended ",e("span",{children:"Crypto"})," channels"]}),e("div",{className:"live-channels",children:e(w,{channel:"js-crypto"})})]})}),e("div",{className:"home-desktop",children:t("div",{className:"home-box",children:[e(mi,{}),e(l,{channelTitle:"Live channels we think you\u2019ll like"}),e(m,{title:"Show more"}),e(x,{title:"we think you\u2019ll like",boldTitle:"Categories"}),e(m,{}),e(V,{}),e(l,{channelTitle:"Recommended smaller communities"}),e(m,{title:"Show more"}),e(l,{channelTitle:"All aboard the Hype Train!"}),e(m,{title:"Show more"}),e(l,{channelTitle:"Women's History Month"}),e(m,{title:"Show more"}),e(l,{channelTitle:"Recommended smaller communities"}),e(m,{title:"Show more"}),e(l,{channelTitle:"All aboard the Hype Train!"}),e(m,{title:"Show more"}),e(l,{channelTitle:"Women's History Month"})]})})]})}),ki=n.div`
  // Mobile
  .browse-mobile {
    display: none;

    .browse-box {
      padding: 55px 10px;
      color: ${i=>i.theme.textColor};
      background-color: ${i=>i.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 18px;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 0;
          cursor: pointer;
          user-select: none;
        }

        .nav-liveChannels {
          margin-left: 10px;
        }

        .nav-active {
          border-bottom: 2px solid ${i=>i.theme.color};
          color: ${i=>i.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  // Desktop
  .browse-desktop {
    display: none;

    .browse-box {
      display: block;

      .page-title {
        color: ${i=>i.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        margin-top: 40px;
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }

      .search-filter {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${i=>i.theme.textColor};

        .search-box {
          width: 320px;
          display: flex;
          align-items: center;

          span {
            font-size: 13px;
            font-weight: 600;
            width: 80px;
          }
        }

        .filter {
          width: 250px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;

          span {
            width: 60px;
          }

          .sort {
            display: flex;
            align-items: center;
            height: 30px;
            padding: 0 10px;
            border-radius: 5px;
            background-color: ${i=>i.theme.hover};
            cursor: pointer;
            transition: 0.1s;
            user-select: none;

            .sort-icon {
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            &:hover {
              box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,Si=n.div`
  .big-category-box {
    color: ${i=>i.theme.textColor};
    display: flex;
    align-items: center;
    margin: 10px 0;
    animation: pageAnim 0.3s ease-in-out;

    .game-image {
      width: 80px;
      cursor: pointer;
    }
    .game-info {
      padding: 0 10px;

      .name {
        font-weight: 600;
        padding: 5px 0;
        cursor: pointer;
      }
      .viewers {
        padding: 5px 0;
        font-size: 15px;
      }
      .tags {
        display: block;

        ul {
          display: flex;
          gap: 5px;
          padding: 5px 0;

          li {
            background-color: ${i=>i.theme.border};
            padding: 5px 10px;
            border-radius: 50px;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
    }
  }
`,$i=({game:i})=>e(Si,{children:t("div",{className:"big-category-box",children:[e("div",{className:"game-image",children:e("img",{src:i.image,alt:""})}),t("div",{className:"game-info",children:[e("div",{className:"name",children:i.name}),t("div",{className:"viewers",children:[i.viewer," Viewers"]}),e("div",{className:"tags",children:t("ul",{children:[e("li",{children:"Shooter"}),e("li",{children:"Action"}),e("li",{children:"Strategy"})]})})]})]})}),zi=()=>{const{games:i}=d(s=>s.category),a=[...i,...i];return e(h,{children:e("div",{className:"big-categories-box",children:a.map((s,r)=>e($i,{game:s},r))})})},Ci=n.div`
  width: 100%;
  height: 100%;

  .link-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;

    .link {
      color: ${i=>i.theme.textColor};
      transition: 0.3s;
    }

    &:hover {
      .link {
        color: ${i=>i.theme.color};
      }
    }
  }

  .link-box.active {
    border-bottom: 2px solid ${i=>i.theme.color};

    a {
      color: ${i=>i.theme.color};
    }
  }
`,v=({title:i,to:a})=>{const{pathname:s}=b();return e(Ci,{children:e("div",{className:`link-box ${s==a?"active":""}`,children:e(u,{to:a||"/",className:"link",children:i||"default"})})})},Bi=()=>t(h,{children:[e(x,{}),e(x,{}),e(x,{}),e(x,{}),e(x,{})]}),ji=()=>{const[i,a]=p.exports.useState(!0),{users:s}=d(r=>r.user);return e(h,{children:t(ki,{children:[e("div",{className:"browse-mobile",children:t("div",{className:"browse-box",children:[e("h1",{children:"Browse"}),t("div",{className:"navigation",children:[e("div",{onClick:()=>a(!0),className:`nav-categories ${i?"nav-active":""}`,children:"Categories"}),e("div",{onClick:()=>a(!1),className:`nav-liveChannels ${i?"":"nav-active"}`,children:"Live Channels"})]}),i?e("div",{className:"categories",children:e(zi,{})}):e("div",{className:"live-channels",children:s.map((r,o)=>e(G,{user:r,imageId:o},o))})]})}),e("div",{className:"browse-desktop",children:t("div",{className:"browse-box",children:[e("h1",{className:"page-title",children:"Browse"}),e(V,{}),e("div",{className:"nav",children:t("ul",{children:[e("li",{children:e(v,{to:"/browse",title:"Categories"})}),e("li",{children:e(v,{to:"/browse/all",title:"Live Channels"})})]})}),t("div",{className:"search-filter",children:[t("div",{className:"search-box",children:[e("span",{children:"Filter by"}),e(I,{placeholder:"Search Tags"})]}),t("div",{className:"filter",children:[e("span",{children:"Sort by"}),t("div",{className:"sort",children:["Recommended For You",e("div",{className:"sort-icon",children:e(R,{})})]})]})]}),e(O,{})]})})]})})},Li=n.div`
  //Following mobile
  .follow-mobile {
    display: none;

    .follow-box {
      padding: 55px 10px;
      background-color: ${i=>i.theme.header};
      color: ${i=>i.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${i=>i.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${i=>i.theme.header};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Following Desktop
  .follow-desktop {
    display: none;

    .follow-box {
      display: block;

      .page-title {
        color: ${i=>i.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,Di=n.div`
  .channel-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    z-index: 2;

    .live-screen {
      position: relative;
      width: 35%;
      min-width: 150px !important;
      min-height: 50px;
      background-color: black;
      border-radius: 3px;
      overflow: hidden;
      z-index: -1;

      span {
        position: absolute;
        bottom: 2px;
        left: 5px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        text-shadow: 0 1px 1px #000;
        gap: 3px;

        .live-icon {
          color: red;
          font-size: 9px;
        }
      }
    }

    .live-info {
      flex: 1;
      padding: 0 10px;

      .user {
        display: flex;

        .user-pp {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          overflow: hidden;
        }

        .user-name {
          padding-left: 5px;
          color: ${i=>i.theme.textColor};
          font-weight: 600;
        }
      }

      .title,
      .game {
        color: ${i=>i.theme.soft};
        font-size: 14px;
      }

      .tags {
        display: flex;
        font-size: 13px;

        .tag {
          padding: 2px 5px;
          background-color: ${i=>i.theme.textColor}10;
          border-radius: 999px;
          color: ${i=>i.theme.textColor};
        }
      }
    }
  }
`,Mi=({user:i,imageId:a})=>e(Di,{children:t("div",{className:"channel-box",children:[t("div",{className:"live-screen",children:[e("img",{src:i.liveScreen,alt:""}),t("span",{children:[e(N,{className:"live-icon"})," ",i.viewers]})]}),t("div",{className:"live-info",children:[t("div",{className:"user",children:[e("div",{className:"user-pp",children:e("img",{src:`https://i.pravatar.cc/5${a}`,alt:""})}),e("div",{className:"user-name",children:i.username})]}),e("div",{className:"title",children:i.title}),e("div",{className:"game",children:i.game}),e("div",{className:"tags",children:e("div",{className:"tag",children:i.tag})})]})]})}),Ai=()=>{const{users:i}=d(a=>a.user);return e(h,{children:i.map((a,s)=>e(Mi,{user:a,imageId:s},s))})},Fi=n.div`
  .offline-box {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0 20px 0;

    .left {
      width: 30px;
      margin-right: 10px;

      .pp {
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .right {
      font-size: 15px;
      color: ${i=>i.theme.textColor};

      .username {
        font-weight: 600;
        cursor: pointer;
      }
      .videos {
        font-size: 13px;
      }
    }
  }
`,Ti=({user:i,imageId:a})=>e(Fi,{children:t("div",{className:"offline-box",children:[e("div",{className:"left",children:e("div",{className:"pp",children:e("img",{src:`https://i.pravatar.cc/5${a}`,alt:""})})}),t("div",{className:"right",children:[e("div",{className:"username",children:i.username}),e("div",{className:"videos",children:"7 new videos"})]})]})}),Ei=()=>{const{users:i}=d(a=>a.user);return e(h,{children:i.map((a,s)=>{if(s<3)return e(Ti,{user:a,imageId:s},s)})})},Ri=()=>(b(),e(h,{children:t(Li,{children:[e("div",{className:"follow-mobile",children:t("div",{className:"follow-box",children:[e("h1",{children:"Following"}),e("h3",{children:"Your Live Channels"}),e(Ai,{}),e("h3",{children:"Your Offline Channels"}),e(Ei,{})]})}),e("div",{className:"follow-desktop",children:t("div",{className:"follow-box",children:[e("h1",{className:"page-title",children:"Following"}),e("div",{className:"nav",children:t("ul",{children:[e("li",{children:e(v,{to:"/following",title:"Overview"})}),e("li",{children:e(v,{to:"/following/live",title:"Live"})}),e("li",{children:e(v,{to:"/following/videos",title:"Videos"})}),e("li",{children:e(v,{to:"/following/categories",title:"Categories"})})]})}),e("div",{className:"page",children:e(O,{})})]})})]})})),Oi=()=>t(h,{children:[e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{})]}),_i=()=>t("div",{className:"overview-box",children:[e(l,{channelTitle:"Live channels"}),e(m,{title:"Show more"}),e(l,{channelTitle:"Recommended channels"}),e(m,{title:"Show more"}),e(l,{channelTitle:"Latest videos",video:!0}),e(m,{title:"Show more"}),e(x,{title:"Live categories"}),e(m,{})]}),Pi=()=>e(h,{children:e(l,{channelTitle:"Live channels"})}),Ii=()=>e(h,{children:t("div",{className:"overview-page",children:[e(l,{channelTitle:"Latest videos",video:!0}),e(l,{video:!0}),e(l,{video:!0}),e(l,{video:!0})]})}),Hi=()=>e(h,{children:e(x,{title:"Live categories"})}),Gi=()=>{const{darkStatus:i,sideBarStatus:a}=d(c=>c.site),[s,r]=p.exports.useState(window.innerWidth);let o=Se();return p.exports.useEffect(()=>{s<768&&o("/");const c=()=>r(window.innerWidth);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[s]),t($e,{theme:i?Ee:Te,children:[e(Fe,{}),t("div",{className:"app",children:[e(si,{mySize:s}),e("div",{className:`main ${a&&s>1199?"sidebar-open":""}`,children:t(ze,{children:[e(g,{path:"*",element:e(Ce,{to:"/",replace:!0})}),e(g,{path:"/",element:e(Ni,{})}),t(g,{path:"/following/",element:e(Ri,{}),children:[e(g,{index:!0,element:e(_i,{})}),e(g,{path:"live",element:e(Pi,{})}),e(g,{path:"videos",element:e(Ii,{})}),e(g,{path:"categories",element:e(Hi,{})})]}),t(g,{path:"/browse/",element:e(ji,{}),children:[e(g,{index:!0,element:e(Bi,{})}),e(g,{path:"all",element:e(Oi,{})})]})]})})]})]})},Vi=()=>{const{pathname:i}=b();return p.exports.useEffect(()=>{window.scrollTo(0,0)},[i]),null},Ui=$({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var Ki=Ui.reducer;const Wi=$({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var Yi=Wi.reducer,Xi=Be({reducer:{site:Ie,user:Ki,category:Yi}});je.render(e(Le.StrictMode,{children:e(De,{store:Xi,children:t(Me,{children:[e(Vi,{}),e(Gi,{})]})})}),document.getElementById("root"));
