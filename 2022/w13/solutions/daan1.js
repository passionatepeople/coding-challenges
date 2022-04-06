const open = '({[';
const closed = ')}]';

const braceful = (input) => {
  const opens = [];
  for(let i = 0; i < input.length; i++){
    if(open.indexOf(input[i]) >= 0){
      opens.push(input[i]);
    } else if(opens.length > 0 && open.indexOf(opens[opens.length-1]) === closed.indexOf(input[i])){
      opens.pop();      
    } else {
      return false;
    }
  }
  return true;
};
module.exports = braceful;
