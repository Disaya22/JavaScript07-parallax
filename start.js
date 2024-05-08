(()=>{

    function onScroll(){
        const moonElem = document.querySelector(".moon");
        const wishElem = document.querySelector('.wish');
    
        //สิ่งงที่บอกว่าเรา scroll page ไปเท่าไร
        //console.log(window.scrollY);

        // moonElem.style.transform = `translate(${window.scrollY * 1.2}%, ${window.scrollY * -1.2}ู%)`;
         moonElem.style.transform = `translateY(${window.scrollY * -0.4}%)`;
         moonElem.style.transform = `translateX(${window.scrollY * 0.8}%)`;
        // moonElem.style.left = -window.scrollY * 0.5 + 'px';
        // moonElem.style.top = window.scrollY * 0.5 + 'px';
        
        wishElem.style.transform = `translateY(${window.scrollY * -1.5}%)`;
    }

    function run(){
        document.addEventListener('scroll', onScroll);
    }
    run();
})();