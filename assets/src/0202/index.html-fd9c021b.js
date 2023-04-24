import"../../modulepreload-polyfill-3cfb730f.js";import{p as x}from"../../p5.min-9f376f7a.js";/* empty css                  */import"../../_commonjsHelpers-725317a4.js";import"../../_commonjs-dynamic-modules-302442b1.js";const w=(e,t)=>({fillOrStroke:(o=-1,l=2)=>{let r=o>-1?t[o]:e.random(t);e.random()<.5?(e.noFill(),e.stroke(r),e.strokeWeight(l)):(e.noStroke(),e.fill(r))},stroke:(o=-1,l=2)=>{e.noFill(),e.stroke(o>-1?t[o]:e.random(t)),e.strokeWeight(l)},fill:(o=-1)=>{e.noStroke(),e.fill(o>-1?t[o]:e.random(t))},strokeFill:(o=-1,l=-1,r=2)=>{o===-1&&(o=e.floor(e.random(t.length))),e.stroke(t[o]),l===-1&&(l=(o+1)%t.length),e.fill(t[l]),e.strokeWeight(r)}}),M=e=>({midpoint:(t,o)=>e.createVector((t.x+o.x)/2,(t.y+o.y)/2),moveCenter:({pts:t,subset:o=!1,mult:l=[.2,.8]})=>{let r=t;typeof o=="number"?r=[t[o]]:typeof o=="object"&&(r=t.slice(o[0],o[1]));let s=e.random(r).copy().mult(e.random(l[0],l[1]));e.translate(s.x,s.y)},shape:t=>{e.beginShape(),t.forEach(o=>{e.vertex(o.x,o.y)}),e.vertex(t[0].x,t[0].y),e.endShape()},shapeMoved:function(t,{moveOpts:o={},rotate:l=!1,scale:r=[.4,.6]}={}){let s=e.random(r[0],r[1]);e.push(),this.moveCenter({pts:t,...o}),l&&e.rotate(e.PI/2),this.shape(t.map(n=>n.copy().mult(s))),e.pop()},baseShape:function(t){this.shapeMoved(t,{scale:[.8,1.1],moveOpts:{mult:[0,.2]}})},trisRound:function(t,o,{translate:l=.3,num:r=3,scale:s=[.5,.8],scaleChance:n=1,chooseColor:i=void 0}={},a){e.push(),a&&this.moveCenter({pts:t,...a});let f=t.map((d,u)=>u);e.shuffle(f,!0),r||(r=e.floor(e.random(f.length))),typeof s=="number"&&(s=[s,s]);let c=f.length;for(let d=0;d<Math.min(r,c);d++){let u=f.pop(),h=t[u],m=t[(u+1)%c];if(e.push(),l){let k=this.midpoint(h,m).mult(l);e.translate(k.x,k.y)}e.random()<n?(o=o.copy().mult(s[0]),h=h.copy().mult(s[0]),m=m.copy().mult(s[0])):(o=o.copy().mult(s[1]),h=h.copy().mult(s[1]),m=m.copy().mult(s[1])),i&&i(),this.shape([o,h,m]),e.pop()}e.pop()},trisMoved:function(t,o,l={num:3,scaleChance:1},r={mult:[.4,.8]}){e.push(),this.moveCenter({pts:t,...r}),this.trisRound(t,o,l),e.pop()},lines:function(t,o,l=0){let r=t.map(s=>s);e.shuffle(r,!0),l||(l=e.floor(e.random(r.length)));for(let s=0;s<Math.min(l,r.length-1);s++)e.line(r[s].x,r[s].y,o.x,o.y)},circles:function(t,{radius:o=7,num:l=0,translate:r=.5,chooseColor:s=void 0}={}){let n=t.map(i=>i);e.shuffle(n,!0),l||(l=e.floor(e.random(n.length)));for(let i=0;i<Math.min(l,n.length-1);i++){let a=n[i];if(e.push(),r){let c=a.copy().mult(r);e.translate(c.x,c.y)}let f=typeof o=="function"?o():o;s&&s(),e.circle(0,0,f),e.pop()}}}),V=["https://coolors.co/ffedeb-320d6d-ffd447-700353-fc814a","https://coolors.co/ffffff-9b7ede-fcd581-d52941-540D6E","https://coolors.co/ffffff-25ced1-2c4251-f17300-B288C0","https://coolors.co/1e0b16-5f0f40-9a031e-f2832e-D67AB1","https://coolors.co/080708-3772ff-df2935-fdca40-e6e8e6"],O=e=>e.replace("https://coolors.co/","").split("-").map(t=>`#${t}`),S=V.map(e=>O(e));new x(e=>{let t,o,l,r=M(e);e.setup=function(){let n=e.createCanvas(window.innerWidth,window.innerHeight);o=e.createButton("save").parent("btns").mouseClicked(()=>e.saveCanvas(n,"hexagons","jpg")),e.noLoop()},e.draw=function(){t=e.random(S).map(y=>y),l=w(e,t),e.background(t.shift());let n=e.min(e.width,e.height),i=n*.06,a=i*.8,f=e.createVector(0,0),c=e.createVector(0,-i),d=e.createVector(a,-i/2),u=e.createVector(a,i/2),h=e.createVector(0,i),m=e.createVector(-a,i/2),k=e.createVector(-a,-i/2),C=[c,d,u,h,m,k],v=n*.9;e.translate((e.width-v)/2,(e.height-v)/2);let g=v*.25;for(let y=g/2;y<v;y+=g)for(let b=g/2;b<v;b+=g)e.push(),e.translate(y,b),e.shuffle(t,!0),s(C,f),e.pop()},e.mouseClicked=function(n){n.target!==o.elt&&e.redraw()};function s(n,i,a=-1){let f=n.map((c,d)=>d);switch(e.shuffle(f,!0),a<0&&(a=e.random([1,2,3])),a){case 1:l.fill(0),r.baseShape(n),l.fill(1),r.shapeMoved(n,{moveOpts:{subset:f[0]},rotate:!0}),l.stroke(2),r.shapeMoved(n,{moveOpts:{subset:f[1]},rotate:!0});let c={scale:e.random(.3,.8),chance:.4,chooseColor:()=>e.random()<.5?l.fill(3):l.stroke(3)};r.trisRound(n,i,c,{subset:f[2],mult:[.7,1]}),l.stroke(3,3),r.lines(n,i,2);break;case 2:l.strokeFill(2,3,5),r.trisRound(n,i,{translate:-.4,scale:[1.2,1.5],scaleChance:.5,num:e.random([1,2])}),l.stroke(0),r.shapeMoved(n,{moveOpts:{mult:[0,0]},scale:[1,1]}),l.fill(1),r.circles(n,{translate:e.random(.4,1.5),radius:()=>e.random(5,15),chooseColor:()=>l.fill()});break;case 3:l.fill(0),r.trisRound(n,i,{num:6,translate:.5,scale:.8}),l.stroke(1),r.shapeMoved(n,{scale:[1,1.3],moveOpts:{mult:[.3,.6]}}),e.random()<.6&&(e.push(),r.moveCenter({pts:n}),l.stroke(2,6),r.lines(n,i),e.pop()),l.stroke(1),r.lines(n,i);break}}});
