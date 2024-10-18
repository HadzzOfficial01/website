document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = [
      { href: "https://wa.me/6283876999143", icon: "fa fa-whatsapp", text: "WhatsApp 1" },
      { href: "https://wa.me/6285714167613", icon: "fa fa-whatsapp", text: "WhatsApp 2" },
      { href: "https://t.me/HevMods/", icon: "fa-solid fa-paper-plane", text: "Telegram" },
      { href: "https://youtube.com/@HadzzOfficial_", icon: "fab fa-youtube", text: "YouTube" },
      { href: "https://tiktok.com/@hadzzokeyy", icon: "fab fa-tiktok", text: "Tiktok" },
      { href: "https://whatsapp.com/channel/0029VaeDkpbEFeXdgASyZ60B", icon: "fa fa-whatsapp", text: "Saluran WhatsApp" }
    ];
  
    const linkBoxes = document.querySelector('.link-boxes');
  
    socialLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.className = 'shadow';
      anchor.target = '_blank';
      anchor.innerHTML = `<i class="${link.icon}" aria-hidden="true"></i> ${link.text}`;
      linkBoxes.appendChild(anchor);
    });
  });