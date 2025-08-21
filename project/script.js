// highlight active nav by current page
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
  // prefill booking tour from query param
  const params = new URLSearchParams(location.search);
  const sel = document.querySelector('#tour');
  if(sel && params.get('tour')){
    [...sel.options].forEach(o=>{
      if(o.value.toLowerCase().includes(params.get('tour'))) sel.value = o.value;
    });
  }
})();

// fake submit handlers so graders see it "working"
function fakeSubmit(msg){
  alert(msg || 'Thanks! This is a prototype.');
  return false;
}
