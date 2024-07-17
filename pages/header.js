fetch('header.html')
.then(response => response.text())
.then(data => {
    document.querySelector('.header').innerHTML = data;
    //console.log(data);
})
.catch(error => console.error('Error loading header:', error));