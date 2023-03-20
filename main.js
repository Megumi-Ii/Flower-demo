
document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
  })

    window.addEventListener("load", function() {
const target = document.querySelectorAll('.scr-target,.scr-target p')
const targetArray = Array.prototype.slice.call(target);
const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.2
};

const observer = new IntersectionObserver(callback, options)
targetArray.forEach(function (tgt) {
  observer.observe(tgt)
});

function callback(entries) {
  entries.forEach(function(entry) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      target.classList.add('is-active');
    }
  });
};
});