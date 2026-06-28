const app = document.getElementById('app');
const project = projectById(query.get('id'));
let selectedFloor = query.get('floor') || 'ground';

function unitCard(u){
  return `<a class="unit-card refined-unit-card" href="${unitUrl(u.id)}">
    <div class="unit-card-head">
      <div><span class="unit-label">${u.floorName}</span><strong>وحدة ${u.id}</strong></div>
      <span class="unit-badge">${u.status}</span>
    </div>
    <div class="unit-meta compact-unit-meta">
      <span>المبنى <strong>${u.building}</strong></span>
      <span>المساحة <strong>${fmtArea(u.netArea)}</strong></span>
      <span>الإضافات <strong>${amenityText(u)}</strong></span>
    </div>
    <span class="unit-action">عرض بيانات الوحدة</span>
  </a>`;
}

function renderUnits(){
  const target = document.getElementById('unitsArea');
  const units = floorUnits(selectedFloor);
  target.innerHTML = units.length
    ? `<div class="units-grid compact-units-grid">${units.map(unitCard).join('')}</div>`
    : `<div class="empty-note">لا توجد وحدات في هذا الدور.</div>`;
  $$('.floor-tabs button').forEach(btn => btn.classList.toggle('active', btn.dataset.floor === selectedFloor));
}

app.innerHTML = `
<section class="page-hero project-main-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">الرئيسية</a><span>/</span><a href="projects.html">المشاريع</a><span>/</span><span>${project.name}</span></div>
    <div class="project-hero compact-project-hero">
      <img src="${project.hero}" alt="${project.name}">
      <div class="project-hero-overlay"><div class="project-hero-content"><div class="kicker">${project.status}</div><h1>${project.name}</h1><p class="lead">${project.summary}</p><a class="btn btn-primary" href="#units">استعرض الوحدات</a></div></div>
    </div>
    <div class="stats-row compact-stats-row">
      <div class="stat-card">الموقع<strong>${project.location}</strong></div>
      <div class="stat-card">النوع<strong>${project.type}</strong></div>
      <div class="stat-card">عدد الوحدات<strong>${project.unitsCount} وحدة</strong></div>
      <div class="stat-card">الحالة<strong>${project.status}</strong></div>
    </div>
  </div>
</section>
<section class="section-sm project-overview-section">
  <div class="container details-layout compact-details-layout">
    <div class="card project-description-card">
      <div class="eyebrow">نبذة عن المشروع</div>
      <h2>حياة متوازنة في حي الصفا</h2>
      <p class="muted">${project.description}</p>
      <div class="chips compact-chips"><span class="chip">المطور: ${project.developer}</span><span class="chip">بدأ العمل: الربع الأول 2025</span></div>
    </div>
    <div class="card project-features-card">
      <h3>مميزات المشروع</h3>
      <ul class="features-list compact-features-list">${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a class="btn btn-soft" href="${project.mapUrl}" target="_blank" rel="noopener">فتح موقع المشروع على Google Maps</a>
    </div>
  </div>
</section>
<section id="units" class="section-sm units-section">
  <div class="container">
    <div class="section-head compact-head units-head">
      <div><div class="eyebrow">اختيار الوحدة</div><h2>اختر الدور ثم رقم الوحدة</h2></div>
    </div>
    <div class="card units-panel">
      <div class="stepper compact-stepper"><div class="step"><span>1</span>اختر المشروع</div><div class="step"><span>2</span>اختر الدور</div><div class="step"><span>3</span>اختر رقم الوحدة</div></div>
      <div class="floor-tabs compact-floor-tabs">${project.floors.map(f => `<button data-floor="${f.key}">${f.name}</button>`).join('')}</div>
      <div id="unitsArea"></div>
    </div>
  </div>
</section>`;

$$('.floor-tabs button').forEach(btn => btn.addEventListener('click', () => { selectedFloor = btn.dataset.floor; renderUnits(); }));
renderUnits();
