s="",r=" ",e="teen",a=[s,"one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thir"+e,"four"+e,"fif"+e,"six"+e,"seven"+e,"eigh"+e,"nine"+e],b=[s,s,"twenty","thirty","forty","fifty",a[6]+"ty",a[7]+"ty",a[8]+"y",a[9]+"ty"],module.exports=getSaiyanLevel=(e=>e>9e3?"it's over nine thousand!":0===e?"zero":(t=e/1e3<<0,c=1e3*t,h=(e-c)/100<<0,d=100*h,f=(e-c-d)/10<<0,o=(e-c-d-10*f)/1<<0,g=f>=1,j=t||h,k=g||a[o],l=b[f],m=a[o],`${t?`${a[t]} thousand`:s}${t&&h?r:s}${h?`${a[h]} hundred`:s}${j&&k?r:s}${j&&k?"and ":s}${l?`${l}`:s}${l&&o?r:s}${1==f?a[10*f+o]:m?`${m}`:s}`));