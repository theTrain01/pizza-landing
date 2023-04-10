window.addEventListener('click', function (event) {
    let counter;
    
    if(event.target.dataset.count === 'plus' || event.target.dataset.count === 'minus') {
        const quantityP = event.target.closest('.quantity_pizz');
        counter = quantityP.querySelector('.qualt_piz');
    }
        
        if(event.target.dataset.count === 'plus') {
            if(parseInt(counter.innerText) < 8) {
                counter.innerText = ++counter.innerText;
            }
            
        }

        if(event.target.dataset.count === 'minus') {
            if(parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            } 
        }
})