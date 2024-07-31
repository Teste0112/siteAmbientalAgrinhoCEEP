document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
        
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

function teste(){
    alert('No momento não está disponivel!!')
}


//modal

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    modal.style.display = "block";
}

span.onclick = function() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 400); 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hide");
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 400); 
    }
}