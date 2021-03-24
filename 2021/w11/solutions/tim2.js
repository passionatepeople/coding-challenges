w = (a, x = new Set()) => {
  const al = a.length;
  for (let j = 0; j < al; j++) {
    const r = a[j];
    x.add({ name: r.name || r.title, value: r.value || r.data, indent: 0 });
    if (r.children || r.subdata) {
      const c1 = r.children || r.subdata;
      const c1l = c1.length;
      for (let k = 0; k < c1l; k++) {
        const r2 = c1[k];
        x.add({
          name: r2.name || r2.title,
          value: r2.value || r2.data,
          indent: 50,
        });
        if (r2.children || r2.subdata) {
          const c2 = r2.children || r2.subdata;
          const c2l = c2.length;
          for (let l = 0; l < c2l; l++) {
            const r3 = c2[l];
            x.add({
              name: r3.name || r3.title,
              value: r3.value || r3.data,
              indent: 100,
            });
            if (r3.children || r3.subdata) {
              const c3 = r3.children || r3.subdata;
              const c3l = c3.length;
              for (let m = 0; m < c3l; m++) {
                const r4 = c3[m];
                x.add({
                  name: r4.name || r4.title,
                  value: r4.value || r4.data,
                  indent: 150,
                });
              }
            }
          }
        }
      }
    }
  }
  return Array.from(x);
};

module.exports = (d) => [...(w(d))];
