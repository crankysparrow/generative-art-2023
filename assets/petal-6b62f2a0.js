var P=Object.defineProperty;var b=(t,i,h)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):t[i]=h;var s=(t,i,h)=>(b(t,typeof i!="symbol"?i+"":i,h),h);import{r}from"./utils-a26ac38d.js";function Y(t,i){let h=class{constructor({x:a,y:c,endRangeX:o=[-100,100],endRangeY:y=[300,500],controlRangeX:e=[50,100],controlVarX:M=50,controlVarY:d=100,rotation:u=0,cp1Mult:V={x:1.5,y:.8},cp2Mult:m={x:2.5,y:1}}){s(this,"x");s(this,"y");s(this,"start",{x:0,y:0});s(this,"end");s(this,"cp1");s(this,"cp2");s(this,"controlVarX");s(this,"controlVarY");s(this,"rotation");s(this,"tAdd");s(this,"cp1Mult");s(this,"cp2Mult");s(this,"draw",a=>{let c={x:this.cp1.x+this.controlVarX*Math.sin(a*this.cp1Mult.x+Math.PI),y:this.cp1.y+Math.sin(a*this.cp1Mult.y)*this.controlVarY},o={x:this.cp2.x+this.controlVarX*Math.sin(a*this.cp2Mult.x),y:this.cp2.y+Math.sin(a*this.cp2Mult.y)*this.controlVarY};t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.beginPath(),t.moveTo(this.start.x,this.start.y),t.bezierCurveTo(c.x,c.y,o.x,o.y,this.end.x,this.end.y),t.stroke(),t.restore()});this.x=a,this.y=c,this.controlVarX=M,this.controlVarY=d,this.rotation=u,this.tAdd=r(0,Math.PI),this.end={x:r(o[0],o[1]),y:r(-y[0],-y[1])};let l=r(-e[0],-e[1]),p=r(this.end.y*.1,this.end.y*.4),n=r(this.end.y*.6,this.end.y*.9),x=r(e[0],e[1]);this.cp1Mult=V,this.cp2Mult=m,Math.random()<.5?(this.cp1={x:l,y:p},this.cp2={x,y:n}):(this.cp1={x,y:p},this.cp2={x:l,y:n})}};return new h(i)}export{Y as c};
