const app = document.getElementById('app');

app.innerHTML = `
<section class="page-hero projects-page-hero">
  <div class="container">
    <div class="page-title-card page-title-compact">
      <div class="breadcrumb"><a href="index.html">الرئيسية</a><span>/</span><span>مشروعاتنا</span></div>
      <h1>المشاريع</h1>
      <p class="lead">اختر المشروع للاطلاع على التفاصيل، ثم انتقل لاختيار الدور ورقم الوحدة المناسبة.</p>
    </div>
  </div>
</section>
<section class="section-sm projects-list-section">
  <div class="container projects-list">
    ${DATA.projects.map(p => `
      <article class="card project-card project-card-horizontal">
        <div class="project-card-img"><img src="${p.hero}" alt="${p.name}"></div>
        <div class="project-card-body">
          <div class="eyebrow">مشروع متاح</div>
          <h2>${p.name}</h2>
          <p class="muted">${p.summary}</p>
          <div class="chips compact-chips">
            <span class="chip">${p.location}</span>
            <span class="chip">${p.type}</span>
            <span class="chip">${p.unitsCount} وحدة</span>
            <span class="chip success">${p.status}</span>
          </div>
          <a class="btn btn-primary" href="project.html?id=${p.id}">عرض تفاصيل المشروع</a>
        </div>
      </article>`).join('')}
  </div>
</section>`;
