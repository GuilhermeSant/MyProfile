console.log("estou funcionando");

// JavaScript para scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//botao de volta ao topo 
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
if (window.pageYOffset > 100) {
  backToTopButton.classList.add('show');   

} else {
  backToTopButton.classList.remove('show');
}
});

backToTopButton.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth'   
});
});

//exibir e fechar conteudo
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
const header = item.querySelector('.accordion-header');
const   
content = item.querySelector('.accordion-content');
const arrow = header.querySelector('.arrow');

header.addEventListener('click',   
() => {
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  arrow.textContent = content.style.display === 'block' ? '▲' : '▼';
});
});



