module.exports=e=>e.split(" ").reduce((e,w)=>(c=[...w].reduce((c,e)=>(l=e.charCodeAt(0),c+(l>64&&l<91?l-64:l>96&&l<123?l-96:0)),0),e.c>=c?e:{w,c}),{w:"",c:0}).w