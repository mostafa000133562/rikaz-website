const app = document.getElementById('app');
const unit = unitById(query.get('unit'));
const project = projectById('aldiyar-safa');
const interest = `استفسار عن مشروع ${project.name} - وحدة ${unit.id}`;
const waMsg = `مرحبًا، أرغب في الاستفسار عن ${project.name}\nرقم الوحدة: ${unit.id}\nالدور: ${unit.floorName}\nالمساحة: ${fmtArea(unit.netArea)}`;
function availabilityMark(value) {
  const isAvailable = value === true || value === "متوفرة" || value === "متوفر" || value === "نعم";

  return `
    <span class="availability-mark ${isAvailable ? "yes" : "no"}">
      ${isAvailable ? "✓" : "×"}
    </span>
  `;
}
app.innerHTML = `
<section class="page-hero unit-page-hero">
  <div class="container">
    <div class="page-title-card page-title-compact unit-title-card">
      <div class="breadcrumb"><a href="index.html">الرئيسية</a><span>/</span><a href="projects.html">المشاريع</a><span>/</span><a href="project.html?id=${project.id}">${project.name}</a><span>/</span><span>وحدة ${unit.id}</span></div>
      <h1>تفاصيل وحدة ${unit.id}</h1>
      <p class="lead">بيانات الوحدة والمخطط الخاص بها، مع إمكانية إرسال استفسار مباشر عبر واتساب.</p>
      <div class="chips compact-chips"><span class="chip success">${unit.status}</span><span class="chip">${unit.floorName}</span><span class="chip">${fmtArea(unit.netArea)}</span></div>
    </div>
  </div>
</section>
<section class="section-sm unit-details-section">
  <div class="container unit-layout compact-unit-layout">
    <aside class="card unit-spec-card">
      <div class="eyebrow">بيانات الوحدة</div>
      <h2>وحدة ${unit.id}</h2>
      <div class="unit-summary-pills">
        <span>${unit.floorName}</span>
        <span>${fmtArea(unit.netArea)}</span>
        <span>${unit.status}</span>
      </div>
      <div class="spec-table compact-spec-table">
        <div class="spec-row"><span>اسم المشروع</span><strong>${project.name}</strong></div>
        <div class="spec-row"><span>رقم الوحدة</span><strong>${unit.id}</strong></div>
        <div class="spec-row"><span>المبنى</span><strong>${unit.building}</strong></div>
        <div class="spec-row"><span>الدور</span><strong>${unit.floorName}</strong></div>
        <div class="spec-row"><span>صافي المساحة</span><strong>${fmtArea(unit.netArea)}</strong></div>
        ${unit.roofArea ? `<div class="spec-row"><span>مساحة خارجية / سطح</span><strong>${fmtArea(unit.roofArea)}</strong></div>` : ''}
        <div class="spec-row"><span>بلكونة</span><strong>${unit.balcony ? 'متوفرة' : 'غير متوفرة'}</strong></div>
        <div class="spec-row"><span>تراس</span><strong>${unit.terrace ? 'متوفر' : 'غير متوفر'}</strong></div>
        <div class="spec-row"><span>حديقة</span><strong>${unit.garden ? 'متوفرة' : 'غير متوفرة'}</strong></div>
        <div class="spec-row"><span>الحالة</span><strong class="status">${unit.status}</strong></div>
      </div>
      <div class="unit-actions">
        <a class="btn btn-primary" href="${waLink(waMsg)}" target="_blank" rel="noopener">استفسار عبر واتساب</a>
        <a class="btn btn-soft" href="${contactUrl(interest)}">نموذج التواصل</a>
      </div>
    </aside>
    <div class="plan-card unit-plan-card">
      <div class="plan-card-head"><strong>مخطط الوحدة</strong><span>${unit.id}</span></div>
      <a href="${unit.planImage}" target="_blank" rel="noopener"><img src="${unit.planImage}" alt="مخطط وحدة ${unit.id}"></a>
    </div>
  </div>
</section>`;
