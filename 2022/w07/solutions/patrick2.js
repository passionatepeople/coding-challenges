module.exports=a=>0===a.length?[a[0],a[0]]:[Math.min.apply(null,a),Math.max.apply(null,a)];
