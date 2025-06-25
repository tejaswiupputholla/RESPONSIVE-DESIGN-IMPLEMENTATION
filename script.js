document.querySelector('.burger').onclick = () =>
  document.querySelector('.nav-links').classList.toggle('show');

document.querySelectorAll('a[href^="#"]').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({ behavior:'smooth' });
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    document.querySelector('.nav-links').classList.remove('show');
  })
);
