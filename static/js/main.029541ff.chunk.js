(this["webpackJsonppomodoro-prime"]=this["webpackJsonppomodoro-prime"]||[]).push([[0],{25:function(e,t,o){},27:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var r=o(1),a=o(0),n=o.n(a),i=o(10),c=o.n(i),s=(o(25),o(8)),m=(o(26),o(27),o(16)),d=o(9);var l=function(e){return Object(r.jsxs)("div",{className:"TimerControls",children:[Object(r.jsx)(d.a,{onClick:e.togglePause,style:{marginRight:"1rem"},children:e.isPaused?"Play":"Pause"}),Object(r.jsx)(d.a,{onClick:e.restartTimer,style:{marginLeft:"1rem"},children:"Restart"})]})},j=o(18),u=o(19);var b=function(e){var t=[{name:"Pomodoro",value:e.TimerTypes.pomodoro},{name:"Short Break",value:e.TimerTypes.shortBreak},{name:"Long Break",value:e.TimerTypes.longBreak}];return Object(r.jsx)("div",{className:"TimerOptions",children:Object(r.jsx)(j.a,{toggle:!0,style:{width:"100%"},children:t.map((function(t,o){return Object(r.jsx)(u.a,{type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.timerType===t.value,onChange:function(t){return e.updateTimerType(t.currentTarget.value)},children:t.name},o)}))})})};var h=function(e){var t,o,a=e.time,n=Math.floor(a/60),i=a-60*n;return Object(r.jsxs)("div",{className:"VisualTimer",style:{margin:"1rem",fontSize:"1000%"},children:[n,":",Object(r.jsx)("span",{children:(t=i,o=2,String(t).padStart(o,"0"))})]})};var O=function(e){var t=Object(a.useState)(e.pomodoroTime),o=Object(s.a)(t,2),n=o[0],i=o[1],c=Object(a.useState)(!0),d=Object(s.a)(c,2),j=d[0],u=d[1],O=Object(a.useState)(!1),T=Object(s.a)(O,2),g=T[0],p=T[1],B=Object(a.useState)("pomodoro"),k=Object(s.a)(B,2),f=k[0],x=k[1],v=F(e.pomodoroTime),S=F(e.shortBreakTime),y=F(e.longBreakTime),P={pomodoro:"pomodoro",shortBreak:"shortBreak",longBreak:"longBreak"},C={pomodoro:60*e.pomodoroTime,shortBreak:60*e.shortBreakTime,longBreak:60*e.longBreakTime},L=Object(a.useState)(),N=Object(s.a)(L,2),U=N[0],E=N[1];function F(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}return Object(a.useEffect)((function(){"pomodoro"===f&&(clearTimeout(U),i(n+60*(e.pomodoroTime-v)))}),[e.pomodoroTime]),Object(a.useEffect)((function(){"shortBreak"===f&&(clearTimeout(U),i(n+60*(e.shortBreakTime-S)))}),[e.shortBreakTime]),Object(a.useEffect)((function(){"longBreak"===f&&(clearTimeout(U),i(n+60*(e.longBreakTime-y)))}),[e.longBreakTime]),Object(a.useEffect)((function(){i(C[f]),u(!0)}),[f]),Object(a.useEffect)((function(){g&&(i(C[f]),p(!1)),n<=0||j?(clearTimeout(U),n<=0&&!g&&x(f===P.pomodoro?P.shortBreak:P.pomodoro)):E(setTimeout((function(){i(n-1)}),1e3))}),[n,j,g]),Object(r.jsx)("div",{className:"TimerCard",style:{textAlign:"center"},children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(b,{updateTimerType:function(e){x(e)},timerType:f,TimerTypes:P}),Object(r.jsxs)(m.a.Body,{children:[Object(r.jsx)(h,{time:n}),Object(r.jsx)(l,{togglePause:function(){u(!j)},restartTimer:function(){p(!0),u(!0)},isPaused:j})]})]})})},T=o(17),g=o(12),p=o(14),B=o(11);var k=function(e){return console.log(e),Object(r.jsx)("div",{className:"SettingsModal",children:Object(r.jsxs)(g.a,Object(T.a)(Object(T.a)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(r.jsx)(g.a.Header,{closeButton:!0,children:Object(r.jsx)(g.a.Title,{id:"contained-modal-title-vcenter",children:"Settings"})}),Object(r.jsxs)(g.a.Body,{children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(B.a,{children:Object(r.jsx)("h5",{children:"Time (minutes)"})})}),Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(B.a,{children:[Object(r.jsx)("h6",{children:"Pomodoro"}),Object(r.jsx)("input",{className:"form-control",id:"example-number-input",type:"number",min:1,onChange:function(t){e.setUpdatedPomodoroTime(t.target.value)},onBlur:function(t){t.target.value&&t.target.value>=1?console.log("Good"):e.setUpdatedPomodoroTime(e.timesettings.pomodoroTime)},value:e.updatedPomodoroTime})]}),Object(r.jsxs)(B.a,{children:[Object(r.jsx)("h6",{children:"Short Break"}),Object(r.jsx)("input",{className:"form-control",id:"example-number-input",type:"number",min:1,onChange:function(t){e.setUpdatedShortBreakTime(t.target.value)},onBlur:function(t){t.target.value&&t.target.value>=1?console.log("Good"):e.setUpdatedShortBreakTime(e.timesettings.shortBreakTime)},value:e.updatedShortBreakTime})]}),Object(r.jsxs)(B.a,{children:[Object(r.jsx)("h6",{children:"Long Break"}),Object(r.jsx)("input",{className:"form-control",id:"example-number-input",type:"number",min:1,onChange:function(t){e.setUpdatedLongBreakTime(t.target.value)},onBlur:function(t){t.target.value&&t.target.value>=1?console.log("Good"):e.setUpdatedLongBreakTime(e.timesettings.longBreakTime)},value:e.updatedLongBreakTime})]})]})]}),Object(r.jsx)(g.a.Footer,{children:Object(r.jsx)(d.a,{onClick:e.onHide,children:"OK"})})]}))})};var f=function(e){var t=Object(a.useState)(!1),o=Object(s.a)(t,2),n=o[0],i=o[1],c=Object(a.useState)(e.pomodoroTime),m=Object(s.a)(c,2),l=m[0],j=m[1],u=Object(a.useState)(e.shortBreakTime),b=Object(s.a)(u,2),h=b[0],O=b[1],T=Object(a.useState)(e.longBreakTime),g=Object(s.a)(T,2),f=g[0],x=g[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)(p.a,{style:{marginTop:"1rem"},children:[Object(r.jsx)(B.a,{children:Object(r.jsx)("h3",{children:"Pomodoro Prime"})}),Object(r.jsx)(B.a,{md:{span:1},children:Object(r.jsx)("span",{children:Object(r.jsx)(d.a,{style:{float:"right"},onClick:function(){return i(!0)},children:"Settings"})})})]}),Object(r.jsx)(k,{setUpdatedPomodoroTime:j,setUpdatedShortBreakTime:O,setUpdatedLongBreakTime:x,updatedPomodoroTime:l,updatedShortBreakTime:h,updatedLongBreakTime:f,timesettings:e,show:n,onHide:function(){console.log("Modal Complete..."),console.log("updatedPomodoroTime: "+l),console.log("updatedShortBreakTime: "+h),console.log("updatedLongBreakTime: "+f);var t=!0;console.log(t),l&&l>=1?e.setPomodoroTime(l):(t=!1,j(e.pomodoroTime)),console.log(t),h&&h>=1?e.setShortBreakTime(h):(t=!1,O(e.shortBreakTime)),f&&f>=1?e.setLongBreakTime(f):(t=!1,x(e.longBreakTime)),console.log(t),t&&i(!1)}})]})};var x=function(){var e=Object(a.useState)(25),t=Object(s.a)(e,2),o=t[0],n=t[1],i=Object(a.useState)(5),c=Object(s.a)(i,2),m=c[0],d=c[1],l=Object(a.useState)(15),j=Object(s.a)(l,2),u=j[0],b=j[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{style:{maxWidth:"40rem",marginLeft:"auto",marginRight:"auto"},children:[Object(r.jsx)(f,{pomodoroTime:o,setPomodoroTime:n,shortBreakTime:m,setShortBreakTime:d,longBreakTime:u,setLongBreakTime:b}),Object(r.jsx)("hr",{}),Object(r.jsx)(O,{pomodoroTime:o,shortBreakTime:m,longBreakTime:u})]})})},v=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(t){var o=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;o(e),r(e),a(e),n(e),i(e)}))};c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.029541ff.chunk.js.map