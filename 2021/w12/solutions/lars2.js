module.exports=(e,r=(e,d=1,t=0)=>eval('for(o=e<0?-e:e;0<o;)t=t*d+(o%10),o=0|(o/10);0>e?-t:t'))=>r(e-r(e,10))