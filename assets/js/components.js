const DATA = window.RIKAZ_DATA;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const fmtArea = (v) => v ? `${Number(v).toFixed(2)} م²` : 'غير متوفر';
const query = new URLSearchParams(window.location.search);

function pageName(){ return document.body.dataset.page; }
function activeClass(name){ return pageName() === name ? 'active' : ''; }
function waLink(message){ return `https://wa.me/${DATA.company.whatsapp}?text=${encodeURIComponent(message)}`; }
function companyMessage(extra = ''){
  return `مرحبًا، أرغب في التواصل مع ركاز للخدمات العقارية.${extra ? '\n' + extra : ''}`;
}
function unitFullName(u){ return `وحدة ${u.id}`; }
function renderHeader(){
  const header = document.getElementById('site-header');
  header.innerHTML = `
    <header class="header">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="ركاز للخدمات العقارية">
          <img src="assets/images/logo-ar.png" alt="ركاز للخدمات العقارية">
          <span class="brand-title"><strong>${DATA.company.nameAr}</strong><span>${DATA.company.nameEn}</span></span>
        </a>
        <button class="mobile-toggle" aria-label="فتح القائمة">☰</button>
        <nav class="nav-links" aria-label="القائمة الرئيسية">
          <a class="${activeClass('home')}" href="index.html">الرئيسية</a>
          <a class="${activeClass('projects')} ${activeClass('project')} ${activeClass('unit')}" href="projects.html">المشاريع</a>
        </nav>
        <div class="nav-actions"><a class="btn btn-primary" href="contact.html">تواصل معنا</a></div>
      </div>
    </header>`;
  $('.mobile-toggle')?.addEventListener('click', () => $('.nav-links').classList.toggle('open'));
}
function renderFooter(){
  const footer = document.getElementById('site-footer');
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <p>${DATA.company.about}</p>
            <div class="social-links">
  <a href="https://www.instagram.com/rikazaqar?igsh=bXR4amQ0ZDUxYXg=" target="_blank" rel="noopener" aria-label="Instagram">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5zM17.5 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/>
    </svg>
  </a>

  <a href="https://x.com/rikazaqar?s=11&t=EzQSdlrGFKslNfOvrn19vg" target="_blank" rel="noopener" aria-label="X">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.6L5.4 22H2.3l7.3-8.4L2 2h6.5l4.5 6.9L18.9 2zm-1.1 17.8h1.7L7.6 4.1H5.8l12 15.7z"/>
    </svg>
  </a>
</div>
          </div>
          <div>
            <div class="footer-title">روابط سريعة</div>
            <p><a href="index.html">الرئيسية</a></p>
            <p><a href="projects.html">المشاريع</a></p>
            <p><a href="contact.html">تواصل معنا</a></p>
          </div>
          <div>
            <div class="footer-title">معلومات التواصل</div>
            <p>📍 ${DATA.company.address}</p>
            <p>📞 ${DATA.company.phone}</p>
            <p><a href="${DATA.company.mapUrl}" target="_blank" rel="noopener">فتح الموقع على Google Maps</a></p>
          </div>
        </div>
        <div class="copyright">© ${new Date().getFullYear()} ${DATA.company.nameAr}. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
    <a class="whatsapp-float" href="${waLink(companyMessage())}" target="_blank" rel="noopener">واتساب</a>`;
}

function renderBase(){ renderHeader(); renderFooter(); }
function projectById(id = 'aldiyar-safa'){ return DATA.projects.find(p => p.id === id) || DATA.projects[0]; }
function unitById(id){ return DATA.units.find(u => u.id === id) || DATA.units[0]; }
function floorUnits(floor){ return DATA.units.filter(u => u.floor === floor); }
function amenityText(u){
  const arr = [];
  if (u.balcony) arr.push('بلكونة');
  if (u.terrace) arr.push('تراس');
  if (u.garden) arr.push('حديقة');
  if (u.roofArea) arr.push('مساحة خارجية');
  return arr.length ? arr.join('، ') : 'حسب المخطط';
}
function unitUrl(id){ return `unit.html?unit=${encodeURIComponent(id)}`; }
function contactUrl(extra){ return `contact.html?interest=${encodeURIComponent(extra || '')}`; }
renderBase();
