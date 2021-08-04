const findMeDeep = (hs, n) => {
	let bool = false;
  const loop= (items, nid) => {
    items.slice(0).reduce((acc, curVal, i, arr) =>  {
        if (Array.isArray(curVal)) {
          return loop(curVal, nid);
        }
        if (curVal === nid) {
          bool = true;
          arr.splice(1);
        }      
    },[]);
  }

	loop(hs, n);
	return bool;
}

module.exports = findMeDeep;
