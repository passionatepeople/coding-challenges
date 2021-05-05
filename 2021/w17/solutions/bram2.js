module.exports=s=>[...s].reduce((p,c)=>{(c=='('&&p++||c==')'&&p--);return p},0)==0
