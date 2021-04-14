document.addEventListener('click', e => {
  el = e.target
  if(el.classList.contains("luz")){
    if(el.classList.contains('cor')){
      el.classList.remove('cor')
      return
    }
    el.classList.add('cor')
  }
})