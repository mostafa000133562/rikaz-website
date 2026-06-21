const app = document.getElementById('app');
const project = DATA.projects[0];

app.innerHTML = `
<section class="hero home-hero">
  <div class="container">
    <div class="hero-card compact-hero-card">
      <img src="${project.hero}" alt="${project.name}">
      <div class="hero-content">
        <div class="container">
          <div class="hero-copy">
            <div class="kicker">تسويق عقاري في الرياض</div>
            <h1>تجربة عقارية واضحة تبدأ من الثقة</h1>
            <p class="lead">نساعدك على التعرف على المشروع، مقارنة الوحدات، واختيار الأنسب لك من خلال عرض منظم ومتابعة مباشرة.</p>
            <div class="hero-buttons">
              <a class="btn btn-primary" href="projects.html">استكشف مشروعاتنا</a>
              <a class="btn btn-soft" href="contact.html">تواصل معنا</a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="section section-tight">
  <div class="container">
    <div class="about-card card compact-about">
      <div class="about-img about-img-wide"><img src="${project.hero}" alt="ركاز للخدمات العقارية"></div>
      <div class="about-content">
        <div class="eyebrow">من نحن</div>
        <h2>${DATA.company.nameAr}</h2>
        <p class="muted">${DATA.company.about}</p>
        <div class="mini-points">
          <span>عرض واضح للوحدات</span>
          <span>مشروعات مختارة بعناية</span>
          <span>تواصل مباشر عبر واتساب</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-sm section-tight">
  <div class="container grid grid-2 statement-grid">
    <div class="card statement refined-statement">
      <div class="statement-icon">◎</div>
      <div>
        <div class="eyebrow">الرؤية</div>
        <h3>وجهة موثوقة للفرص السكنية</h3>
        <p class="muted">${DATA.company.vision}</p>
      </div>
    </div>
    <div class="card statement refined-statement">
      <div class="statement-icon">✦</div>
      <div>
        <div class="eyebrow">الرسالة</div>
        <h3>تسويق عقاري أوضح وأسهل</h3>
        <p class="muted">${DATA.company.mission}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-tight why-section">
  <div class="container">
    <div class="section-head compact-head">
      <div><div class="eyebrow">لماذا ركاز؟</div><h2>اختيار الوحدة يبدأ من معلومات مرتبة</h2></div>
    <div class="grid grid-4 why-grid">
      <div class="card icon-card why-card"><div class="icon">01</div><h3>وضوح البيانات</h3><p class="muted">عرض منظم لتفاصيل المشروع والوحدات والمخططات.</p></div>
      <div class="card icon-card why-card"><div class="icon">02</div><h3>مشروعات منتقاة</h3><p class="muted">التركيز على فرص سكنية مناسبة في مواقع واضحة.</p></div>
      <div class="card icon-card why-card"><div class="icon">03</div><h3>تجربة سهلة</h3><p class="muted">تصفح المشروع، اختر الدور، ثم افتح بيانات الوحدة مباشرة.</p></div>
      <div class="card icon-card why-card"><div class="icon">04</div><h3>متابعة مباشرة</h3><p class="muted">إرسال الاستفسار عبر واتساب للرد السريع والمتابعة.</p></div>
    </div>
  </div>
</section>

<section class="section-sm section-tight">
  <div class="container">
    <div class="card project-teaser compact-project-teaser">
      <img src="${project.hero}" alt="${project.name}">
      <div class="project-body">
        <div class="eyebrow">أحدث المشروعات</div>
        <h2>${project.name}</h2>
        <p class="muted">${project.summary}</p>
        <div class="chips compact-chips">
          <span class="chip">${project.location}</span>
          <span class="chip">${project.type}</span>
          <span class="chip">${project.unitsCount} وحدة</span>
          <span class="chip success">${project.status}</span>
        </div>
        <a class="btn btn-dark" href="project.html?id=${project.id}">عرض تفاصيل المشروع</a>
      </div>
    </div>
  </div>
</section>`;
