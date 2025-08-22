// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Portfolio modal functions
function openModal(modalId) {
    const modal = document.getElementById('portfolioModal');
    const content = document.getElementById('modalContent');
    
    const modalData = {
        'modal1': {
            title: 'Brand Identity Design',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
            description: 'โปรเจกต์การออกแบบเอกลักษณ์แบรนด์สำหรับบริษัทเทคโนโลยีสตาร์ทอัพ รวมถึงการออกแบบโลโก้, ระบบสี, และแนวทางการใช้งานแบรนด์',
            details: ['วิจัยและวิเคราะห์แบรนด์', 'ออกแบบโลโก้และสัญลักษณ์', 'พัฒนาระบบสีและตัวอักษร', 'สร้าง Brand Guidelines']
        },
        'modal2': {
            title: 'Mobile App UI/UX',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
            description: 'การออกแบบส่วนติดต่อผู้ใช้และประสบการณ์ผู้ใช้สำหรับแอปพลิเคชันมือถือด้านสุขภาพ',
            details: ['UX Research และ User Journey', 'สร้าง Wireframes และ Prototypes', 'ออกแบบ UI Components', 'User Testing และปรับปรุง']
        },
        'modal3': {
            title: 'Print Design',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop',
            description: 'การออกแบบสื่อสิ่งพิมพ์และบรรจุภัณฑ์สำหรับผลิตภัณฑ์อินทรีย์',
            details: ['ออกแบบบรรจุภัณฑ์', 'สร้างคู่มือผลิตภัณฑ์', 'ออกแบบโบรชัวร์', 'การจัดพิมพ์และผลิต']
        },
        'modal4': {
            title: 'Digital Marketing Assets',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
            description: 'การสร้างสื่อการตลาดดิจิทัลสำหรับแคมเปญออนไลน์',
            details: ['ออกแบบโฆษณา Social Media', 'สร้าง Banner และ Display Ads', 'Email Marketing Templates', 'การวิเคราะห์ผลการตลาด']
        }
    };

    const data = modalData[modalId];
    if (data) {
        content.innerHTML = `
            <h2 style="margin-bottom: 1rem; color: var(--primary);">${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
            <p style="margin-bottom: 1rem; color: var(--text-light);">${data.description}</p>
            <h3 style="margin-bottom: 0.5rem;">รายละเอียดโปรเจกต์:</h3>
            <ul style="list-style-type: disc; margin-left: 2rem; color: var(--text-light);">
                ${data.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('portfolioModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('portfolioModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Download resume function
function downloadResume() {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Resume_GraphicDesigner.pdf';
    link.click();
    
    alert('ขณะนี้ยังไม่มีไฟล์ Resume ให้ดาวน์โหลด กรุณาเพิ่มลิงก์ไฟล์ Resume ในโค้ด');
}

// Form submission
function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    alert(`ขอบคุณ ${name} สำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด`);
    e.target.reset();
}

// Add some interactive animations
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
});