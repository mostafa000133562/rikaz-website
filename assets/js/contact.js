const app = document.getElementById('app');
const interestValue = query.get('interest') || '';
const unitValue = query.get('unit') || '';
const projectValue = query.get('project') || '';

app.innerHTML = `
<section class="page-hero contact-page-hero">
  <div class="container">
    <div class="page-title-card page-title-compact contact-title-card">
      <div class="breadcrumb"><a href="index.html">الرئيسية</a><span>/</span><span>تواصل معنا</span></div>
      <h1>تواصل معنا</h1>
      <p class="lead">اترك بياناتك وسيتم تسجيل طلبك في نظام ركاز، ثم يمكن فتح واتساب للتواصل المباشر مع فريق المبيعات.</p>
    </div>
  </div>
</section>
<section class="section-sm contact-form-section">
  <div class="container contact-single-layout">
    <form id="contactForm" class="card form-grid contact-form-card">
      <div class="form-heading">
        <div><div class="eyebrow">إرسال طلب اهتمام</div><h2>أرسل بياناتك</h2></div>
        <a class="btn btn-soft" href="${DATA.company.mapUrl}" target="_blank" rel="noopener">موقع المشروع</a>
      </div>
      <div id="crmStatus" class="contact-status" style="display:none"></div>
      <div class="form-two-cols">
        <div class="field"><label>الاسم</label><input required name="name" placeholder="الاسم بالكامل"></div>
        <div class="field"><label>رقم الموبيل</label><input required name="mobile" placeholder="05XXXXXXXX"></div>
        <div class="field"><label>البريد الإلكتروني</label><input type="email" name="email" placeholder="example@email.com"></div>
        <div class="field"><label>اهتمامك بخصوص</label><select name="interest"><option>${interestValue || 'معرفة المشروعات المتاحة'}</option><option>شراء وحدة سكنية</option><option>استثمار عقاري</option><option>حجز معاينة</option><option>طلب اتصال</option></select></div>
        <div class="field"><label>وقت التواصل</label><select name="time"><option>في أي وقت</option><option>صباحًا</option><option>ظهرًا</option><option>مساءً</option></select></div>
        <div class="field"><label>موعد زيارة مفضل</label><input type="date" name="visit_date"></div>
        <div class="field"><label>وقت الزيارة</label><input type="time" name="visit_time"></div>
        <div class="field"><label>رسالة إضافية</label><input name="message" placeholder="اكتب ملاحظتك باختصار... من فضلك"></div>
      </div>
      <input type="hidden" name="project" value="${projectValue || 'الديار الحديثة - الصفا'}">
      <input type="hidden" name="unit" value="${unitValue}">
      <div class="contact-mini-info">
        <span>📍 ${DATA.company.address}</span>
        <span>📞 ${DATA.company.phone}</span>
      </div>
      <button id="submitBtn" class="btn btn-primary" type="submit">تسجيل الطلب والتواصل</button>
    </form>
  </div>
</section>`;

function showStatus(message, ok = true){
  const box = $('#crmStatus');
  box.style.display = 'block';
  box.textContent = message;
  box.style.padding = '12px';
  box.style.borderRadius = '14px';
  box.style.margin = '8px 0 14px';
  box.style.background = ok ? '#ecfdf3' : '#fff7ed';
  box.style.color = ok ? '#067647' : '#9a3412';
  box.style.border = ok ? '1px solid #abefc6' : '1px solid #fed7aa';
}

async function sendLeadToCRM(payload){
  const cfg = window.RAKAYEZ_CRM_CONFIG || {};
  if (!cfg.enabled || !cfg.endpoint) return { skipped: true };
  const res = await fetch(cfg.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': cfg.apiKey || ''
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) throw new Error(data.error || 'تعذر إرسال الطلب إلى CRM');
  return data;
}

$('#contactForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const fd = new FormData(this);
  const payload = {
    name: fd.get('name'),
    phone: fd.get('mobile'),
    email: fd.get('email') || '',
    interest: fd.get('interest'),
    preferred_time: fd.get('time'),
    visit_date: fd.get('visit_date') || '',
    visit_time: fd.get('visit_time') || '',
    project: fd.get('project') || 'الديار الحديثة - الصفا',
    unit: fd.get('unit') || '',
    message: fd.get('message') || '',
    source: (window.RAKAYEZ_CRM_CONFIG || {}).source || 'موقع إلكتروني'
  };
  const msg = `مرحبًا، أرغب في التواصل مع ركاز للخدمات العقارية\nالاسم: ${payload.name}\nرقم الموبيل: ${payload.phone}\nالبريد الإلكتروني: ${payload.email || '-'}\nالاهتمام: ${payload.interest}\nوقت التواصل: ${payload.preferred_time}\nموعد الزيارة: ${payload.visit_date || '-'} ${payload.visit_time || ''}\nالمشروع: ${payload.project}\nالوحدة: ${payload.unit || '-'}\nالرسالة: ${payload.message || '-'}`;
  const btn = $('#submitBtn');
  btn.disabled = true;
  btn.textContent = 'جاري تسجيل الطلب...';
  try {
    const result = await sendLeadToCRM(payload);
    if (result.skipped) {
      showStatus('تم تجهيز رسالة التواصل. الربط مع CRM غير مفعل من الإعدادات.', false);
    } else {
      showStatus(`تم تسجيل طلبك بنجاح في نظام ركاز. رقم الطلب: ${result.lead_no || '-'}`);
    }
    if ((window.RAKAYEZ_CRM_CONFIG || {}).openWhatsappAfterSubmit !== false) {
      window.open(waLink(msg), '_blank');
    }
    this.reset();
  } catch (err) {
    console.warn(err);
    const offline = JSON.parse(localStorage.getItem('rakayez_pending_leads') || '[]');
    offline.push({...payload, saved_at: new Date().toISOString()});
    localStorage.setItem('rakayez_pending_leads', JSON.stringify(offline));
    showStatus('تعذر إرسال الطلب للنظام الآن. تم حفظ الطلب مؤقتًا في المتصفح وسيتم فتح واتساب للتواصل.', false);
    window.open(waLink(msg), '_blank');
  } finally {
    btn.disabled = false;
    btn.textContent = 'تسجيل الطلب والتواصل';
  }
});
