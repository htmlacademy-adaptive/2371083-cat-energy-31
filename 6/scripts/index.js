var a=document.querySelector(".main-header__navigation"),e=document.querySelector(".main-header__toggle");a.classList.remove("main-header__navigation--nojs");e.classList.remove("main-header__toggle--nojs");e.addEventListener("click",()=>{a.classList.contains("main-header__navigation--closed")?(a.classList.remove("main-header__navigation--closed"),a.classList.add("main-header__navigation--opened"),e.classList.contains("main-header__toggle--closed"),e.classList.remove("main-header__toggle--closed"),e.classList.add("main-header__toggle--opened")):(a.classList.add("main-header__navigation--closed"),a.classList.remove("main-header__navigation--opened"),e.classList.add("main-header__toggle--closed"),e.classList.remove("main-header__toggle--opened"))});
