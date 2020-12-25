(this["webpackJsonppomodoro-prime"]=this["webpackJsonppomodoro-prime"]||[]).push([[0],{24:function(e,t,r){},26:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),c=r.n(a),o=r(10),i=r.n(o),s=(r(24),r(25),r(26),r(9)),j=r(15),l=r(8);var d=function(e){return Object(n.jsxs)("div",{className:"TimerControls",children:[Object(n.jsx)(l.a,{onClick:e.togglePause,style:{marginRight:"1rem"},children:e.isPaused?"Play":"Pause"}),Object(n.jsx)(l.a,{onClick:e.restartTimer,style:{marginLeft:"1rem"},children:"Restart"})]})},u=r(16),m=r(17);var b=function(e){var t=[{name:"Pomodoro",value:e.TimerTypes.pomodoro},{name:"Short Break",value:e.TimerTypes.shortBreak},{name:"Long Break",value:e.TimerTypes.longBreak}];return Object(n.jsx)("div",{className:"TimerOptions",children:Object(n.jsx)(u.a,{toggle:!0,style:{width:"100%"},children:t.map((function(t,r){return Object(n.jsx)(m.a,{type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.timerType===t.value,onChange:function(t){return e.updateTimerType(t.currentTarget.value)},children:t.name},r)}))})})};var h=function(e){var t,r,a=e.time,c=Math.floor(a/60),o=a-60*c;return Object(n.jsxs)("div",{className:"VisualTimer",style:{margin:"1rem",fontSize:"1000%"},children:[c,":",(t=o,r=2,String(t).padStart(r,"0"))]})};var O=function(e){var t=Object(a.useState)(1500),r=Object(s.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(!0),l=Object(s.a)(i,2),u=l[0],m=l[1],O=Object(a.useState)(!1),x=Object(s.a)(O,2),p=x[0],g=x[1],f=Object(a.useState)("pomodoro"),v=Object(s.a)(f,2),T=v[0],y=v[1],k={pomodoro:"pomodoro",shortBreak:"shortBreak",longBreak:"longBreak"},B={pomodoro:1500,shortBreak:300,longBreak:900},S=Object(a.useState)(),C=Object(s.a)(S,2),P=C[0],F=C[1];return Object(a.useEffect)((function(){o(B[T]),m(!0)}),[T]),Object(a.useEffect)((function(){p&&(o(B[T]),g(!1)),c<=0||u?(clearTimeout(P),c<=0&&!p&&y(T===k.pomodoro?k.shortBreak:k.pomodoro)):F(setTimeout((function(){o(c-1)}),1e3))}),[c,u,p]),Object(n.jsx)("div",{className:"TimerCard",style:{textAlign:"center"},children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b,{updateTimerType:function(e){y(e)},timerType:T,TimerTypes:k}),Object(n.jsxs)(j.a.Body,{children:[Object(n.jsx)(h,{time:c}),Object(n.jsx)(d,{togglePause:function(){m(!u)},restartTimer:function(){g(!0),m(!0)},isPaused:u})]})]})})},x=r(18),p=r(14),g=r(11);var f=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),r=(t[0],t[1],Object(a.useState)(!1)),c=Object(s.a)(r,2),o=c[0],i=c[1],j=function(){return i(!1)},d=Object(a.useRef)(null);return Object(n.jsxs)("div",{children:[Object(n.jsxs)(x.a,{style:{marginTop:"1rem"},children:[Object(n.jsx)(p.a,{children:Object(n.jsx)("h3",{children:"Pomodoro Prime"})}),Object(n.jsx)(p.a,{md:{span:1},children:Object(n.jsx)("span",{children:Object(n.jsx)(l.a,{style:{float:"right"},onClick:function(){return i(!0)},children:"Settings"})})})]}),Object(n.jsxs)(g.a,{show:o,onHide:j,centered:!0,ref:d,children:[Object(n.jsx)(g.a.Header,{closeButton:!0,children:Object(n.jsx)(g.a.Title,{children:"Modal heading"})}),Object(n.jsx)(g.a.Body,{children:"Woohoo, you're reading this text in a modal!"}),Object(n.jsxs)(g.a.Footer,{children:[Object(n.jsx)(l.a,{variant:"secondary",onClick:j,children:"Close"}),Object(n.jsx)(l.a,{variant:"primary",onClick:j,children:"Save Changes"})]})]})]})};var v=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{style:{maxWidth:"40rem",marginLeft:"auto",marginRight:"auto"},children:[Object(n.jsx)(f,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(O,{})]})})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,32)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),T()}},[[30,1,2]]]);
//# sourceMappingURL=main.ce1d4401.chunk.js.map