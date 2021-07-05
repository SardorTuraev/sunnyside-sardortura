var modifiers = {
  siteHeaderOpen: 'site-header--open'
};

var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.site-header__toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeader.classList.toggle(modifiers.siteHeaderOpen);
  });
}