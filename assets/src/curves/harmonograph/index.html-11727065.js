import"../../../modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{t as B}from"../../../tweakpane-5ac9913a.js";import{c as M}from"../../../index-f1e9814a.js";import"../../../_commonjsHelpers-725317a4.js";let l=window.innerWidth,i=window.innerHeight,{ctx:a}=M(window.innerWidth,window.innerHeight);const e={A:i*.4,B:i*.4,a:5.1,b:5,p1:5,p2:8.5,d1:.01,d2:.01,iter:5e3};let t=new B.Pane;t.addInput(e,"A",{min:0,max:i*.5,label:"Amplitude A",step:1});t.addInput(e,"B",{min:0,max:i*.5,label:"Amplitude B",step:1});t.addInput(e,"a",{min:0,max:10,label:"Frequency A",step:.1});t.addInput(e,"b",{min:0,max:10,label:"Frequency B",step:.1});t.addInput(e,"p1",{min:0,max:10,label:"phasing A",step:.1});t.addInput(e,"p2",{min:0,max:10,label:"phasing B",step:.1});t.addInput(e,"d1",{min:0,max:.1,step:.001,label:"damping A"});t.addInput(e,"d2",{min:0,max:.1,step:.001,label:"damping B"});t.addInput(e,"iter",{min:0,max:4e4,step:1,label:"iterations"});t.on("change",()=>{a.clearRect(-l/2,-i/2,l,i),o(0,0,e.A,e.B,e.a,e.b,e.p1,e.p2,e.d1,e.d2,e.iter)});function o(p,d,s,h,u,b,w,x,A,c,g){let m=.01;a.beginPath();for(let n=0;n<g;n+=m){let I=p+Math.sin(u*n+w)*s*r(A,n),f=d+Math.sin(b*n+x)*h*r(c,n);a.lineTo(I,f),n+=m}a.stroke()}function r(p,d){return Math.pow(Math.E,-p*d)}a.strokeStyle="#fff";a.lineWidth=.5;a.translate(l/2,i/2);o(0,0,e.A,e.B,e.a,e.b,e.p1,e.p2,e.d1,e.d2,e.iter);
