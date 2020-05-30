(function(){
    const container = document.querySelector("#container-div-css");
    function makeQ() {        
        for(let i=0; i<10000; i++){
            const newQ = document.createElement('div');
            newQ.className = 'littleQ-css';
            container.appendChild(newQ);
        };
    }
    makeQ();    
})();