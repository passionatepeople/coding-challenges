const mergeArrays=(e,t,r)=>{if("desc"===r){let r=[...e,...t];return r.sort((r,e)=>e-r)}{let r=[...e,...t];return r.sort((r,e)=>r-e)}};

module.exports = mergeArrays;
