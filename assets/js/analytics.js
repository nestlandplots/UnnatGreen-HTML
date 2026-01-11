// Google Analytics
(function() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  // Load gtag.js
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true
  });

  // Track phone clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="tel:"]');
    if (target) {
      gtag('event', 'click', {
        event_category: 'contact',
        event_label: 'phone_call',
        value: target.getAttribute('href')
      });
    }
  });

  // Track email clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="mailto:"]');
    if (target) {
      gtag('event', 'click', {
        event_category: 'contact',
        event_label: 'email',
        value: target.getAttribute('href')
      });
    }
  });
})();
