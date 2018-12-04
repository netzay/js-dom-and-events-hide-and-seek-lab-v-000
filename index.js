function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  const nodes = document.querySelectorAll('#grand-node div');
  const mostDeep = nodes[nodes.length- 1];
  return mostDeep;
}


function increaseRankBy(n){
  const nodes = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < nodes.length; i++) {
  nodes[i].innerHTML = (i * n).toString();
  }
}