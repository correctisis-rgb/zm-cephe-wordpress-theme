(() => {
  const menuButton = document.querySelector('.menu');
  const navigation = document.querySelector('.nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const translations = {
    'Anasayfa': 'Home', 'Kurumsal': 'Company', 'Hakkımızda': 'About Us', 'Çalışma Anlayışımız': 'Our Approach',
    'Sistemler': 'Systems', 'Giydirme Cephe': 'Curtain Wall', 'Giydirme Cephe Sistemleri': 'Curtain Wall Systems',
    'Alüminyum Doğrama': 'Aluminium Joinery', 'Kapı & Pencere': 'Doors & Windows', 'Kapı & pencere': 'Doors & windows',
    'Özel Uygulamalar': 'Bespoke Applications', 'Özel uygulamalar': 'Bespoke applications', 'Uygulama': 'Applications',
    'Projeler': 'Projects', 'Projelerimiz': 'Our Projects', 'İletişim': 'Contact', 'Proje talebi': 'Request a Project',
    'Bize ulaşın': 'Contact Us', 'Ana sayfa': 'Home', 'ZM CEPHE / KURUMSAL': 'ZM CEPHE / COMPANY',
    'Mimariye değer': 'Architecture with', 'katan yaklaşım.': 'purpose.', 'Her projeye': 'Every project', 'özenle yaklaşırız.': 'deserves care.',
    'HAKKIMIZDA': 'ABOUT US', 'TASARIMDAN UYGULAMAYA': 'FROM DESIGN TO DELIVERY', 'Detayda kurulan': 'Trust is built', 'güven.': 'in the details.',
    'İyi bir cephe çözümü; doğru sistem seçimi, dikkatli detay çözümü ve planlı uygulamanın bir araya gelmesiyle ortaya çıkar. ZM Cephe olarak proje ekipleriyle yakın iletişim kurar, her adımda çözümün yapıyla bütünleşmesini gözetiriz.': 'A successful façade solution brings together the right system, carefully resolved details and planned installation. We work closely with project teams to ensure that every part of the solution belongs to the building.',
    'Sistemlerimizi inceleyin': 'Explore our systems', 'ÇALIŞMA ANLAYIŞIMIZ': 'OUR APPROACH', 'İşimizi belirleyen': 'The principles', 'ilkeler.': 'behind our work.',
    'İhtiyacı anlamak': 'Understanding needs', 'Projenin mimari hedeflerini ve uygulama koşullarını en başta birlikte değerlendiririz.': 'We assess the project’s architectural goals and site conditions together from the outset.',
    'Detayları çözmek': 'Resolving the details', 'Sistem kararlarını tasarım, performans ve saha gerçekleriyle birlikte ele alırız.': 'We consider system choices alongside design, performance and site requirements.',
    'Birlikte ilerlemek': 'Moving forward together', 'İşveren, mimar ve uygulama ekipleriyle açık iletişim içinde çalışırız.': 'We stay in close communication with clients, architects and installation teams.',
    'BİRLİKTE ÇALIŞALIM': 'LET’S WORK TOGETHER', 'Projenizi': 'Your project', 'konuşalım.': 'starts here.', 'İletişime geçin': 'Get in touch',
    'ZM CEPHE / SİSTEMLER': 'ZM CEPHE / SYSTEMS', 'Yapıya uyumlu': 'Façade solutions', 'cephe çözümleri.': 'made for your building.',
    'SİSTEMLERİMİZ': 'OUR SYSTEMS', 'İhtiyaca göre': 'Systems shaped', 'şekillenen sistemler.': 'around your needs.',
    'Her yapının işlevi, ölçeği ve mimari ifadesi farklıdır. Doğru cephe sistemini; tasarım beklentileri, teknik gereklilikler ve uygulama koşullarını birlikte değerlendirerek belirliyoruz.': 'Every building has its own function, scale and architectural expression. We select the right façade system by weighing design goals, technical requirements and installation conditions together.',
    'Sistem seçimi proje özelinde netleştirilir.': 'System selection is tailored to each project.', 'DIŞ KABUK': 'BUILDING ENVELOPE', 'MİMARİ DOĞRAMA': 'ARCHITECTURAL JOINERY',
    'AÇILIR SİSTEMLER': 'OPENING SYSTEMS', 'PROJEYE ÖZEL': 'PROJECT-SPECIFIC', 'Giydirme cephe': 'Curtain wall', 'sistemleri': 'systems',
    'Alüminyum': 'Aluminium', 'doğrama': 'joinery', 'Kapı & pencere': 'Doors & windows', 'sistemleri': 'systems', 'Özel cephe': 'Bespoke façade',
    'Cam ve alüminyumun birlikte kullanıldığı cephe çözümleriyle yapılara çağdaş bir görünüm kazandırılır. Sistem seçimi; yapı geometrisi, açıklıklar ve proje gerekliliklerine göre şekillenir.': 'Glass and aluminium façade solutions give buildings a contemporary look. The system is selected around the building geometry, openings and project requirements.',
    'Pencere, kapı ve cephe açıklıkları için mimariyle uyumlu alüminyum doğrama çözümleri. Kesit, renk ve açılım tercihleri projeye göre değerlendirilir.': 'Aluminium joinery for windows, doors and façade openings, coordinated with the architecture. Profiles, finishes and opening styles are selected for each project.',
    'Kullanım konforu, gün ışığı ve cephe bütünlüğünü birlikte ele alan çözümler. Sistem detayları mimari çizimler ve saha ölçüleri doğrultusunda çalışılır.': 'Solutions that balance comfort, daylight and façade continuity. System details are developed from the architectural drawings and site measurements.',
    'Standart çözümlerin yeterli olmadığı durumlarda, yapı karakterine ve proje gereksinimlerine uygun alternatifleri birlikte geliştiriyoruz.': 'When standard solutions are not enough, we develop alternatives to suit the character of the building and the needs of the project.',
    'Projeniz için bilgi alın': 'Discuss your project', 'ÇALIŞMA SÜRECİ': 'OUR PROCESS', 'İlk görüşmeden': 'From first meeting', 'uygulamaya.': 'to installation.',
    'Tanışma & keşif': 'Introduction & discovery', 'Projenin hedeflerini, kapsamını ve teknik gerekliliklerini dinliyoruz.': 'We learn about the goals, scope and technical requirements of your project.',
    'Sistem & detay': 'Systems & details', 'Uygun sistem alternatiflerini ve detayları proje ekibiyle netleştiriyoruz.': 'We agree on suitable systems and details with the project team.',
    'Planlama & uygulama': 'Planning & installation', 'Kararlaştırılan çözümün saha koordinasyonunu ve uygulama adımlarını planlıyoruz.': 'We coordinate site work and plan the steps to deliver the agreed solution.',
    'PROJENİZ İÇİN': 'FOR YOUR PROJECT', 'Doğru sistemi': 'Let’s find', 'birlikte bulalım.': 'the right system together.', 'Teklif isteyin': 'Request a quote',
    'ZM CEPHE / PROJELER': 'ZM CEPHE / PROJECTS', 'Mimari fikirler,': 'Architectural ideas,', 'gerçek mekânlar.': 'real spaces.',
    'PROJE SEÇKİSİ': 'PROJECT PORTFOLIO', 'Her yapı için': 'A different approach', 'farklı bir yaklaşım.': 'for every building.',
    'Proje seçkimizde, yapının ihtiyaçlarına göre şekillenen cephe uygulamalarını ve mimari detayları paylaşıyoruz.': 'Our portfolio presents façade applications and architectural details shaped around each building’s needs.',
    'PROJE ARŞİVİ': 'PROJECT ARCHIVE', 'Yeni projeler': 'New projects', 'yakında burada.': 'coming soon.',
    'Yayınlanan projeler bu alanda görünecek. WordPress yönetim panelindeki “Projeler” bölümünden yeni proje ekleyebilirsiniz.': 'Published projects will appear here. Add a project from the “Projects” section of the WordPress dashboard.',
    'Projeniz hakkında konuşalım': 'Let’s discuss your project', 'YENİ PROJENİZ': 'YOUR NEXT PROJECT', 'Sıradaki proje': 'Let the next project', 'sizin olsun.': 'be yours.', 'Projenizi paylaşın': 'Tell us about it',
    'ZM CEPHE / İLETİŞİM': 'ZM CEPHE / CONTACT', 'Projenizi': 'Your project', 'BİZE ULAŞIN': 'GET IN TOUCH', 'Birlikte': 'Let’s get', 'başlayalım.': 'started.',
    'Projenizi ve ihtiyaçlarınızı bize anlatın. Ekibimiz sizinle iletişime geçsin.': 'Tell us about your project and what you need. Our team will get back to you.',
    'TELEFON': 'PHONE', 'E-POSTA': 'EMAIL', 'ADRES': 'ADDRESS', 'Ad Soyad': 'Full name', 'Adınız ve soyadınız': 'Your name',
    'Telefon': 'Phone', 'E-posta': 'Email', 'Proje konusu': 'Project topic', 'Bir konu seçin': 'Select a topic', 'Giydirme cephe sistemleri': 'Curtain wall systems',
    'Alüminyum doğrama': 'Aluminium joinery', 'Kapı ve pencere sistemleri': 'Door and window systems', 'Proje iş birliği': 'Project collaboration', 'Diğer': 'Other',
    'Mesajınız': 'Your message', 'Projenizden kısaca bahsedin': 'Briefly tell us about your project',
    'İletişim talebim kapsamında bilgilerimin kullanılmasını kabul ediyorum.': 'I agree to the use of my information to respond to this enquiry.',
    'MESAJI GÖNDER': 'SEND MESSAGE', 'Mesajınız alındı. En kısa sürede size dönüş yapacağız.': 'Your message has been received. We will be in touch soon.',
    'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan iletişim kurun.': 'Your message could not be sent. Please try again later or contact us directly.',
    'Formdaki alanları kontrol edip yeniden deneyin.': 'Please check the form fields and try again.',
    'Form e-posta gönderimi WordPress sunucunuzun e-posta ayarına bağlıdır.': 'Form email delivery depends on your WordPress server email configuration.',
    'KONUM': 'LOCATION', 'Adresimiz': 'Our address', 'ZM CEPHE / PROJE': 'ZM CEPHE / PROJECT', 'YER': 'LOCATION', 'TARİH': 'DATE', 'SİSTEM': 'SYSTEM',
    'SİZİN PROJENİZ': 'YOUR PROJECT', 'Birlikte': 'Let’s', 'tasarlayalım.': 'design together.', 'Tüm hakları saklıdır.': 'All rights reserved.',
    'Alüminyum Cephe Sistemleri & Mimarlık': 'Aluminium Façade Systems & Architecture', 'Yukarı ↑︎': 'Back to top ↑︎',
    'ZM CEPHE · ALÜMİNYUM CEPHE SİSTEMLERİ': 'ZM CEPHE · ALUMINIUM FAÇADE SYSTEMS', 'MİMARİNİN': 'ARCHITECTURE’S', 'GÜCÜNÜ': 'POTENTIAL', 'HİSSEDİN': 'REALIZED',
    'SİSTEMLERİMİZİ KEŞFEDİN': 'EXPLORE OUR SYSTEMS', 'AŞAĞI İN': 'SCROLL DOWN', 'AŞAĞI KAYDIR': 'SCROLL DOWN',
    'ZM CEPHE YAKLAŞIMI': 'THE ZM CEPHE APPROACH', 'Proje odaklı': 'Project-focused', 'çözümler': 'solutions', 'Detaylı teknik': 'Detailed technical',
    'planlama': 'planning', 'Nitelikli': 'Quality', 'uygulama': 'installation', 'Uçtan uca': 'End-to-end', 'iş birliği': 'collaboration',
    'MİMARİ SİSTEMLER': 'ARCHITECTURAL SYSTEMS', 'Yapınız için': 'The right system', 'doğru sistem.': 'for your building.',
    'Her yapının mimarisine, kullanım amacına ve teknik beklentilerine özel alüminyum cephe çözümleri geliştiriyoruz.': 'We develop aluminium façade solutions tailored to each building’s architecture, use and technical requirements.',
    'Özel Cephe Uygulamaları': 'Bespoke Façade Applications', 'ZM CEPHE / MİMARİ SİSTEMLER': 'ZM CEPHE / ARCHITECTURAL SYSTEMS',
    'Güçlü adımlarla': 'Moving forward', 'ilerliyoruz.': 'with purpose.',
    'Alüminyum cephe sistemleri ve mimarlık alanındaki deneyimimizi; projeye özel yaklaşım, titiz detay çözümü ve nitelikli uygulama anlayışıyla bir araya getiriyoruz.': 'We bring our experience in aluminium façade systems and architecture together with a project-specific approach, carefully resolved details and quality installation.',
    'Her yapının kendine özgü ihtiyaçlarını dinliyor, tasarımdan uygulamaya kadar çözümün her aşamasında birlikte çalışıyoruz.': 'We listen to the needs of every building and work with you through every stage, from design to installation.',
    'ZM Cephe ile tanışın': 'Meet ZM Cephe', '01': '01', 'Proje odaklı yaklaşım': 'Project-focused approach', '02': '02', 'Detaylı mühendislik': 'Detailed engineering', '03': '03', 'Özenli uygulama': 'Careful installation',
    'TASARIMDAN UYGULAMAYA': 'FROM DESIGN TO DELIVERY', 'İyi cephe,': 'A better façade', 'iyi detaylarda.': 'starts in the details.',
    'Bir yapının dış cephesi, ilk izleniminden günlük kullanımına kadar her şeyi etkiler. Bu yüzden doğru sistemi seçmek kadar, detayları doğru çözmek de önemlidir.': 'A building’s façade shapes everything from first impressions to everyday use. Resolving the details is as important as choosing the right system.',
    'Çalışma yaklaşımımız': 'Our approach', 'DETAY / MALZEME / IŞIK': 'DETAIL / MATERIAL / LIGHT', 'NASIL ÇALIŞIYORUZ?': 'HOW WE WORK',
    'Fikirden sahaya': 'From concept to site', 'birlikte.': 'together.', '01 / KEŞİF': '01 / DISCOVERY', 'İhtiyacı': 'Understanding', 'anlıyoruz.': 'your needs.',
    'Projenin beklentilerini, mimari dilini ve teknik koşullarını birlikte değerlendiriyoruz.': 'We assess the project goals, architectural language and technical conditions together.',
    '02 / TASARIM': '02 / DESIGN', 'Detayları': 'Resolving the', 'çözüyoruz.': 'details.', 'Uygun sistem alternatiflerini ve teknik detayları proje özelinde planlıyoruz.': 'We plan the right system options and technical details for your project.',
    '03 / UYGULAMA': '03 / INSTALLATION', 'Özenle': 'Carefully', 'hayata geçiriyoruz.': 'bringing it to life.', 'Planlanan cephe çözümünü sahada kalite ve koordinasyon odağıyla uyguluyoruz.': 'We deliver the façade solution on site with a focus on quality and coordination.',
    '04 / TESLİM': '04 / DELIVERY', 'Sonuca': 'Reaching the', 'birlikte ulaşıyoruz.': 'finish together.', 'Süreç boyunca iletişimde kalarak uygulamanın tamamlanmasını takip ediyoruz.': 'We stay in touch throughout and follow the installation through to completion.',
    'PROJE SEÇKİSİ': 'PROJECT PORTFOLIO', 'Mimariyle': 'In step with', 'birlikte.': 'architecture.',
    'Farklı ölçek ve ihtiyaçlara göre tasarlanan cephe uygulamalarını inceleyin.': 'Explore façade applications designed for different scales and needs.',
    'Projelerimiz': 'Our projects', 'yakında burada.': 'coming soon.', 'PROJELERİ GÖRÜN ↗︎': 'VIEW PROJECTS ↗︎', 'PROJE SÜRECİMİZ ↗︎': 'OUR PROCESS ↗︎',
    'Tüm projeleri görün': 'View all projects', 'BU İŞİ SEVİYORUZ': 'WE LOVE WHAT WE DO', 'Güç ve': 'Strength meets', 'estetik.': 'aesthetics.',
    'ZM Cephe olarak dış cephe ve mimari sistemler alanında, tasarım ve detay çözümünden uygulamaya kadar her aşamada proje ortaklarımızın yanında yer alıyoruz.': 'At ZM Cephe, we support our project partners at every stage of façade and architectural systems work, from design and detailing to installation.',
    'Her projede doğru sistemi birlikte belirliyor; yapının karakterini yansıtan, işlevli ve uzun ömürlü çözümler için çalışıyoruz.': 'We select the right system together for every project and create functional, durable solutions that reflect the character of each building.',
    'PROJENİZİ KONUŞALIM': 'LET’S TALK ABOUT YOUR PROJECT', 'ZM CEPHE İLE İLETİŞİME GEÇİN': 'CONTACT ZM CEPHE',
    'Birlikte': 'Let’s', 'hayata geçirelim.': 'bring it to life.', 'Projeniz için doğru cephe çözümünü arıyorsanız bize ulaşın.': 'Contact us to discuss the right façade solution for your project.',
    'İLETİŞİME GEÇİN': 'GET IN TOUCH', 'Giydirme cephe': 'Curtain wall', 'Alüminyum doğrama': 'Aluminium joinery', 'Kapı & pencere': 'Doors & windows',
    'Özel uygulamalar': 'Bespoke applications', 'ZM CEPHE': 'ZM CEPHE', 'İLETİŞİM': 'CONTACT',
    'RAKAMLARLA ZM CEPHE': 'ZM CEPHE IN NUMBERS', 'Güven veren': 'Built on', 'birikim.': 'experience.',
    'Çalışma arkadaşımız': 'Team members', 'Yıllık tecrübe': 'Years of experience', 'Tamamlanan proje': 'Completed projects',
    'ÇALIŞMA ARKADAŞLARIMIZ': 'OUR TEAM', 'Güçlü fikirler,': 'Strong ideas,', 'iyi ekiplerle.': 'with good teams.',
    'Her projede mimari ekip, işveren ve uygulama paydaşlarıyla aynı hedefe odaklanıyoruz. Açık iletişim ve teknik koordinasyonla fikri sahada karşılığı olan çözüme dönüştürüyoruz.': 'On every project, we align the design team, client and delivery partners around a shared goal. Clear communication and technical coordination turn ideas into buildable solutions.',
    'Çalışma anlayışımız': 'How we work', 'ORTAK AKIL / GÜÇLÜ UYGULAMA': 'SHARED THINKING / STRONG DELIVERY',
    'TASARIMDAN SAHAYA': 'FROM DESIGN TO SITE', 'BİRLİKTE': 'TOGETHER', '01 / PROJE EKİBİ': '01 / PROJECT TEAM',
    'Aynı hedefte buluşuruz.': 'Aligned around one goal.', 'Beklentileri, mimari dili ve uygulama koşullarını birlikte değerlendiririz.': 'We assess expectations, architectural language and site conditions together.',
    '02 / TEKNİK DETAY': '02 / TECHNICAL DETAIL', 'Çözümü birlikte netleştiririz.': 'We define the solution together.', 'Sistem kararlarını performans, estetik ve saha gerçekleriyle ele alırız.': 'We consider system choices alongside performance, aesthetics and site realities.',
    '03 / SAHA KOORDİNASYONU': '03 / SITE COORDINATION', 'Planı özenle hayata geçiririz.': 'We deliver the plan with care.', 'İşin her aşamasında açık iletişimle uygulama sürecini takip ederiz.': 'We follow the installation process with clear communication at every stage.'
  };

  const setLanguage = (language) => {
    document.cookie = `zm_cephe_lang=${language}; max-age=31536000; path=/; samesite=lax`;
    try { localStorage.setItem('zm_cephe_lang', language); } catch (error) { /* Cookies still preserve the selection. */ }
    document.documentElement.dataset.siteLanguage = language;
    document.documentElement.lang = language === 'en' ? 'en-US' : 'tr-TR';
    document.querySelectorAll('[data-set-language]').forEach((button) => button.classList.toggle('selected', button.dataset.setLanguage === language));
    const current = document.querySelector('.language-current');
    if (current) current.innerHTML = `${language.toUpperCase()} <span>⌄</span>`;
    if (language === 'en') translatePage();
    else window.location.reload();
    const gate = document.querySelector('.language-gate');
    if (gate) { gate.classList.remove('open'); gate.setAttribute('aria-hidden', 'true'); document.body.classList.remove('language-locked'); }
  };

  function translatePage() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const original = node.nodeValue.trim();
      if (translations[original]) node.nodeValue = node.nodeValue.replace(original, translations[original]);
    });
    document.querySelectorAll('[placeholder], [aria-label], [alt], [title]').forEach((element) => {
      ['placeholder', 'aria-label', 'alt', 'title'].forEach((attribute) => {
        const original = element.getAttribute(attribute);
        if (original && translations[original]) element.setAttribute(attribute, translations[original]);
      });
    });
    document.querySelectorAll('select option').forEach((option) => {
      const original = option.textContent.trim();
      if (translations[original]) option.textContent = translations[original];
    });
  }

  const language = document.documentElement.dataset.siteLanguage || 'tr';
  document.documentElement.lang = language === 'en' ? 'en-US' : 'tr-TR';
  const gate = document.querySelector('.language-gate');
  let savedLanguage = language;
  try { savedLanguage = document.cookie.match(/(?:^|; )zm_cephe_lang=(tr|en)/)?.[1] || localStorage.getItem('zm_cephe_lang') || language; } catch (error) { savedLanguage = language; }
  if (savedLanguage === 'en') translatePage();
  if (gate && !document.cookie.match(/(?:^|; )zm_cephe_lang=(tr|en)/)) {
    gate.classList.add('open');
    gate.setAttribute('aria-hidden', 'false');
    document.body.classList.add('language-locked');
    gate.querySelector('[data-set-language="tr"]')?.focus();
  }
  document.querySelectorAll('[data-set-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.setLanguage)));
  const languageButton = document.querySelector('.language-current');
  if (languageButton) languageButton.addEventListener('click', () => {
    const group = languageButton.closest('.language-group');
    const expanded = group.classList.toggle('language-open');
    languageButton.setAttribute('aria-expanded', String(expanded));
  });

  const header = document.querySelector('.header');
  let scrollTicking = false;
  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 32);
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateHeader);
      scrollTicking = true;
    }
  }, { passive: true });
  updateHeader();

  const revealGroups = [
    '.home-highlights > *', '.home-system-intro > *', '.home-system-card',
    '.home-about-image', '.home-about-copy', '.belief-head', '.belief-copy',
    '.home-stats .stats-heading', '.home-stats .home-stat', '.home-team .team-visual', '.home-team .team-content > *', '.team-principles article',
    '.belief-image', '.service-teasers article', '.home-projects .section-top',
    '.home-projects .project-card', '.home-project-placeholder', '.home-reference > *',
    '.cta-content > *', '.inner-hero-content', '.inner-intro > *', '.service-row',
    '.value-grid article', '.process-grid article', '.portfolio-card', '.contact-info', '.contact-form'
  ].join(',');
  const revealItems = document.querySelectorAll(revealGroups);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window && revealItems.length) {
    document.documentElement.classList.add('motion-ready');
    revealItems.forEach((item, index) => {
      item.setAttribute('data-reveal', '');
      const siblings = item.parentElement ? Array.from(item.parentElement.children).filter((child) => child.hasAttribute('data-reveal')) : [];
      item.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(item), 5) * 90}ms`);
      if (item.classList.contains('home-system-card') || item.classList.contains('portfolio-card') || item.classList.contains('team-visual')) item.setAttribute('data-reveal', 'scale');
      if (item.classList.contains('home-about-image') || item.classList.contains('belief-image')) item.classList.add('reveal-image');
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  const counters = document.querySelectorAll('[data-count-up]');
  const animateCounter = (counter) => {
    if (counter.dataset.counted === 'true') return;
    counter.dataset.counted = 'true';
    const target = Math.max(0, Number.parseInt(counter.dataset.countUp || '0', 10));
    if (reduceMotion || target < 1) {
      counter.textContent = new Intl.NumberFormat(document.documentElement.lang || 'tr-TR').format(target);
      return;
    }
    const start = performance.now();
    const duration = 1500;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      counter.textContent = new Intl.NumberFormat(document.documentElement.lang || 'tr-TR').format(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  };
  if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  const parallaxImages = document.querySelectorAll('.hero-img, .belief-image img, .home-about-image img, .reference-image');
  if (!reduceMotion && parallaxImages.length) {
    const updateParallax = () => {
      const viewport = window.innerHeight || 1;
      parallaxImages.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < viewport) {
          const offset = Math.round((rect.top + rect.height / 2 - viewport / 2) * -0.035);
          image.style.setProperty('--parallax-offset', `${offset}px`);
        }
      });
    };
    window.addEventListener('scroll', () => window.requestAnimationFrame(updateParallax), { passive: true });
    updateParallax();
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    const cursor = document.createElement('div');
    cursor.className = 'drag-cursor';
    cursor.innerHTML = '<span>İNCELE</span><b>↗︎</b>';
    document.body.appendChild(cursor);
    document.querySelectorAll('.home-system-grid, .home-projects .project-grid, .portfolio-grid').forEach((area) => {
      area.addEventListener('pointerenter', () => cursor.classList.add('active'));
      area.addEventListener('pointerleave', () => cursor.classList.remove('active'));
      area.addEventListener('pointermove', (event) => {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      });
    });
  }
})();
