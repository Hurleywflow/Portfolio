
// make navbar link for all pages in single page app
const links = document.querySelectorAll('.link');
// every page is a section in a index.html page
const sections = document.querySelectorAll('section');
let activeLink = 0;
links.forEach((link, i) => {
  link.addEventListener('click', () => {
    if (activeLink != i) {
      links[activeLink].classList.remove('active');
      sections[activeLink].classList.remove('active');
      link.classList.add('active');
      setTimeout(() => {
        activeLink = i;
        sections[i].classList.add('active');
      }, 10);
    }
  });
});
