module.exports=v=(s,l=s.length,c=s.charCodeAt(l-1),t=s.slice(0,l-1))=>c<57?t+(c-47):c>57?s+1:v(t)+0