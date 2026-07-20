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
            <div class="kicker">التسويق والوساطة العقاري في الرياض</div>
            <h1>تجربة عقارية واضحة تبدأ بالثقة والاحترافية</h1>
            <p class="lead">نساعدك على التعرف بالمشروع، مقارنة الوحدات، واختيار الأنسب لك بعناية من خلال عرض و متابعة مباشرة.</p>
            <div class="hero-buttons">
              <a class="btn btn-primary" href="projects.html">المشاريع</a>
              <a class="btn btn-soft" href="contact.html">تواصل معنا</a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section-sm">
  <div class="container">
    <div class="card about-card">
      <div>
        <div class="eyebrow">من نحن</div>
        <h2>ركاز للخدمات العقارية</h2>
        <p class="muted">
          نختص في تقديم خدمات عقارية شاملة في الرياض. من التسويق والوساطة إلى تقديم حلول متنوعة واحترافية
          نلتزم معك بالوضوح والشفافية لنضع بين يديك القرار الأنسب.
        </p>

        <div class="chips">
          <span class="chip">عرض احترافي واضح</span>
          <span class="chip">مشاريع مختارة بعناية</span>
          <span class="chip">تواصل مباشر</span>
        </div>
      </div>

      <div class="about-img about-logo-box">
        <img src="assets/images/logo-about.png" alt="شعار ركاز" class="about-logo-img">
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
        <h3>وجهة عقارية تتسم بالمصداقية والشفافية</h3>
        <p class="muted">${DATA.company.vision}</p>
      </div>
    </div>
    <div class="card statement refined-statement">
      <div class="statement-icon">✦</div>
      <div>
        <div class="eyebrow">الرسالة</div>
        <h3>خدمات عقارية سلسة وواضحة</h3>
        <p class="muted">${DATA.company.mission}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-tight why-section">
  <div class="container">
    <div class="section-head compact-head">
      <div><div class="eyebrow">لماذا ركاز؟</div><h2>اختيار الوحدة يبدأ بتفاصيل وبيانات منظمة</h2></div>
    <div class="grid grid-4 why-grid">
      <div class="card icon-card why-card"><div class="icon">01</div><h3>عرض واضح</h3><p class="muted">عرض منظم لتفاصيل المشروع والوحدات والمخططات.</p></div>
      <div class="card icon-card why-card"><div class="icon">02</div><h3>مشاريع منتقاة</h3><p class="muted">التركيز على فرص مميزة مختارة بعناية.</p></div>
      <div class="card icon-card why-card"><div class="icon">03</div><h3>تجربة سلسة</h3><p class="muted">عرض المشروع، حدد الدور المناسب، تصفح بيانات الوحدة المختارة بشكل مباشر و سلس.</p></div>
      <div class="card icon-card why-card"><div class="icon">04</div><h3>متابعة مستمرة</h3><p class="muted">تواصل معنا للاستفسار عبر الواتساب للرد السريع والمتابعة.</p></div>
    </div>
  </div>
</section>

<section class="section-sm section-tight">
  <div class="container">
    <div class="card project-teaser compact-project-teaser">
      <img src="${project.hero}" alt="${project.name}">
      <div class="project-body">
        <div class="eyebrow">أحدث المشاريع</div>
        <h2>${project.name}</h2>
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
