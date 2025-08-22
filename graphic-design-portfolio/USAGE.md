# การใช้งาน Graphic Design Portfolio

## 📋 คู่มือการติดตั้งและใช้งาน

### 1. การติดตั้งเบื้องต้น

#### Download และ Setup
```bash
# Clone repository
git clone https://github.com/username/graphic-design-portfolio.git

# เข้าไปในโฟลเดอร์โครงการ
cd graphic-design-portfolio

# เปิดไฟล์ index.html ในเบราว์เซอร์
```

### 2. การปรับแต่งเนื้อหา

#### แก้ไขข้อมูลส่วนตัว
**ไฟล์: `index.html`**
```html
<!-- แก้ไขในส่วน About Section -->
<h3>สวัสดี! ฉันคือ [ชื่อของคุณ]</h3>
<p>[แก้ไขข้อความแนะนำตัว]</p>
```

#### เพิ่มผลงาน
**ไฟล์: `assets/images/portfolio/`**
1. เพิ่มรูปภาพผลงานในโฟลเดอร์ portfolio
2. แก้ไขไฟล์ `index.html` ในส่วน portfolio-grid

```html
<div class="portfolio-item" onclick="openModal('modal1')">
    <img src="assets/images/portfolio/ชื่อไฟล์รูป.jpg" alt="ชื่อผลงาน">
    <div class="portfolio-content">
        <h3>ชื่อผลงาน</h3>
        <p>คำอธิบายผลงาน</p>
    </div>
</div>
```

#### เพิ่มวิดีโอผลงาน
**ไฟล์: `assets/videos/`**
1. อัปโหลดไฟล์วิดีโอ (รองรับ .mp4, .webm, .ogg)
2. แก้ไขในส่วน video-section

```html
<video controls width="100%">
    <source src="assets/videos/ชื่อไฟล์วิดีโอ.mp4" type="video/mp4">
</video>
```

### 3. การปรับแต่งสีและธีม

#### แก้ไขสี
**ไฟล์: `css/style.css`**
```css
:root {
    --primary: #6C63FF;    /* สีหลัก */
    --secondary: #FF6B6B;  /* สีรอง */
    --accent: #4ECDC4;     /* สีเน้น */
    --dark: #2D2D2D;       /* สีเข้ม */
    --light: #F8F9FA;      /* สีอ่อน */
}
```

### 4. การเพิ่มฟีเจอร์

#### เพิ่ม Social Media Links
```html
<div class="social-links">
    <a href="https://instagram.com/username" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com/in/username" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

#### เพิ่มการส่งอีเมลจริง
**ไฟล์: `js/main.js`**
```javascript
function submitForm(e) {
    e.preventDefault();
    
    // ใช้ EmailJS หรือ Formspree
    emailjs.send("service_id", "template_id", {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
}
```

### 5. การ Deploy บน GitHub Pages

#### ขั้นตอนการ Deploy
1. **สร้าง Repository ใหม่บน GitHub**
2. **Push โค้ดขึ้น GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **เปิดใช้งาน GitHub Pages**
   - ไปที่ Settings > Pages
   - เลือก Source: Deploy from a branch
   - เลือก Branch: main
   - เลือก Folder: / (root)
   - คลิก Save

4. **ตรวจสอบเว็บไซต์**
   - เว็บไซต์จะใช้งานได้ที่: `https://username.github.io/repository-name`

### 6. การอัปเดตเนื้อหา

#### อัปเดต Resume
1. เพิ่มไฟล์ PDF ใน `assets/documents/resume.pdf`
2. แก้ไขลิงก์ในฟังก์ชัน `downloadResume()` ใน `js/main.js`

#### อัปเดตผลงานใหม่
1. เพิ่มรูปภาพใน `assets/images/portfolio/`
2. เพิ่ม portfolio item ใน HTML
3. เพิ่มข้อมูล modal ใน `js/portfolio.js`

### 7. การปรับแต่ง SEO

#### Meta Tags
```html
<meta name="description" content="Portfolio ของ [ชื่อ] - Graphic Designer">
<meta name="keywords" content="graphic design, portfolio, UI/UX, branding">
<meta property="og:title" content="Portfolio - [ชื่อ]">
<meta property="og:description" content="ผลงานการออกแบบกราฟิก">
<meta property="og:image" content="assets/images/og-image.jpg">
```

### 8. การทดสอบ

#### ทดสอบ Responsive
- ใช้ Chrome DevTools
- ทดสอบบนหน้าจอขนาดต่างๆ
- ตรวจสอบการแสดงผลบน mobile และ tablet

#### ทดสอบประสิทธิภาพ
- ใช้ Google PageSpeed Insights
- ตรวจสอบขนาดไฟล์รูปภาพ
- ปรับปรุงความเร็วในการโหลด

### 9. การบำรุงรักษา

#### อัปเดตเป็นประจำ
- เพิ่มผลงานใหม่
- อัปเดต Resume
- ตรวจสอบลิงก์ที่เสีย
- อัปเดตข้อมูลติดต่อ

### 🆘 การแก้ไขปัญหาที่พบบ่อย

#### รูปภาพไม่แสดง
- ตรวจสอบ path ของไฟล์
- ตรวจสอบชื่อไฟล์และ extension
- ตรวจสอบขนาดไฟล์ (ควรไม่เกิน 2MB)

#### ฟอร์มส่งไม่ได้
- ตรวจสอบ JavaScript console
- ตั้งค่า email service (EmailJS, Formspree)
- ตรวจสอบ CORS policy

#### เว็บไซต์ช้า
- ลดขนาดรูปภาพ (ใช้ WebP format)
- minify CSS และ JavaScript
- ใช้ CDN สำหรับไลบรารี

### 📞 การขอความช่วยเหลือ

หากมีปัญหาหรือข้อสงสัย สามารถ:
- เปิด Issue ใน GitHub Repository
- ติดต่อผ่าน email