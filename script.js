const showDropdown = ()=>{
  var dropdown = document.querySelector(".nav-mob");
  if(dropdown.style.display=="block"){
    dropdown.style.display="none";
    dropdown.style.padding="0px";
  }else {
    dropdown.style.display="block";
    dropdown.style.padding="5px";
  }
}