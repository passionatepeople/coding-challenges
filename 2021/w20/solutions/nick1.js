/*
               AAA                         JJJJJJJJJJJ               AAA               XXXXXXX       XXXXXXX
              A:::A                        J:::::::::J              A:::A              X:::::X       X:::::X
             A:::::A                       J:::::::::J             A:::::A             X:::::X       X:::::X
            A:::::::A                      JJ:::::::JJ            A:::::::A            X::::::X     X::::::X
           A:::::::::A                       J:::::J             A:::::::::A           XXX:::::X   X:::::XXX
          A:::::A:::::A                      J:::::J            A:::::A:::::A             X:::::X X:::::X
         A:::::A A:::::A                     J:::::J           A:::::A A:::::A             X:::::X:::::X
        A:::::A   A:::::A                    J:::::j          A:::::A   A:::::A             X:::::::::X
       A:::::A     A:::::A                   J:::::J         A:::::A     A:::::A            X:::::::::X
      A:::::AAAAAAAAA:::::A      JJJJJJJ     J:::::J        A:::::AAAAAAAAA:::::A          X:::::X:::::X
     A:::::::::::::::::::::A     J:::::J     J:::::J       A:::::::::::::::::::::A        X:::::X X:::::X
    A:::::AAAAAAAAAAAAA:::::A    J::::::J   J::::::J      A:::::AAAAAAAAAAAAA:::::A    XXX:::::X   X:::::XXX
   A:::::A             A:::::A   J:::::::JJJ:::::::J     A:::::A             A:::::A   X::::::X     X::::::X
  A:::::A               A:::::A   JJ:::::::::::::JJ     A:::::A               A:::::A  X:::::X       X:::::X
 A:::::A                 A:::::A    JJ:::::::::JJ      A:::::A                 A:::::A X:::::X       X:::::X
AAAAAAA                   AAAAAAA     JJJJJJJJJ       AAAAAAA                   AAAAAAAXXXXXXX       XXXXXXX

*/

const mergeArrays = (arr1, arr2, direction) => {
  let goalsFor = 0;
  for(let i = 0; i < 500; i++) {
    goalsFor += Math.random() > .5 ? 1 : -1;
  }

  return [...arr1, ...arr2].sort((a, b) => direction === 'asc' ? a - b : b -a);
};

module.exports = mergeArrays;
