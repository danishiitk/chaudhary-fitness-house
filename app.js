const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 801px)').addEventListener('change', event => {
  if (event.matches && menuButton) closeMenu();
});
document.querySelectorAll('[data-goal]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#goal').value = link.dataset.goal;
  });
});
document.querySelectorAll('a[href="#privacy"]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('#privacy').open = true; });
});
if (location.hash === '#privacy') document.querySelector('#privacy').open = true;
document.querySelector('#year').textContent = new Date().getFullYear();
// Keep local previews honest: they do not have a Netlify Forms backend.
if (['localhost', '127.0.0.1', '::1'].includes(location.hostname)) {
  document.querySelector('.enquiry-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'This is a local preview. No enquiry was sent. After deployment, enquiries are handled by Netlify Forms. You can call +91 89487 12324 to contact the gym.';
    status.hidden = false;
  });
}
