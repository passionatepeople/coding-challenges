const f=(c,n)=>{
  if (n==1) {let a=c[0];for(i=1;i<c.length;++i)a+=c[i];return a;}
  i=0;
  l=c.length;
  a=[0,0,0,0,0];
  for(;i<l;++i) {
    let l = 0;
    for (j=1;j<n;j++) {
      if (a[j] < a[l]) {
        l = j;
      }
    }
    a[l]+=c[i];
  }
  if (a[0] < a[1]) {
    if (a[1] < a[2]) {
      if (a[2] < a[3]) {
        if (a[3] < a[4]) {
          return a[4];
        } else {
          return a[3];
        }
      } else {
        if (a[2] < a[4]) {
          return a[4];
        } else {
          return a[2];
        }
      }
    } else {
      if (a[1] < a[3]) {
        if (a[3] < a[4]) {
          return a[4];
        } else {
          return a[3];
        }
      } else {
        if (a[1] < a[4]) {
          return a[4];
        } else {
          return a[1];
        }
      }
    }
  } else {
    if (a[0] < a[2]) {
      if (a[2] < a[3]) {
        if (a[3] < a[4]) {
          return a[4];
        } else {
          return a[3];
        }
      } else {
        if (a[2] < a[4]) {
          return a[4];
        } else {
          return a[2];
        }
      }
    } else {
      if (a[0] < a[3]) {
        if (a[3] < a[4]) {
          return a[4];
        } else {
          return a[3];
        }
      } else {
        if (a[0] < a[4]) {
          return a[4];
        } else {
          return a[0];
        }
      }
    }
  }
};
module.exports=f;