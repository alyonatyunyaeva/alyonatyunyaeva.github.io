(function(){
    const container = document.querySelector("#container-div-js");
    function makeQ() {        
        for(let i=0; i<10000; i++){
            const newQ = document.createElement('div');
            newQ.className = 'littleQ-pure-js';
            container.appendChild(newQ);
        };
    }
    makeQ();    
    function toggle(e) {
        if(!(e.target.className==='bigQ-pure-js')){
            const activeClassName = 'colorBlack';
            const className = e.target.className || '';
            if (className.includes(activeClassName)){
                e.target.className = 'littleQ-pure-js';
            } else {
                e.target.className = 'littleQ-pure-js ' + activeClassName;
            }
        }
    }

    function toggleTimeOut(e){
        setTimeout(()=>{toggle(e)}, 1500)
    }

    container.addEventListener('mouseover', toggle )
    container.addEventListener('mouseout', toggleTimeOut)
})();