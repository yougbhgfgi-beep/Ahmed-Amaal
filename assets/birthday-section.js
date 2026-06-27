(function() {
  var styleId = 'birthday-section-styles';
  if (document.getElementById(styleId)) return;
  var style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
#birthday-cake-section {
  position: relative;
  overflow: hidden;
}
#birthday-cake-section .cake-stars{
  position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0;
}
#birthday-cake-section .cake-star{
  position:absolute;width:3px;height:3px;
  background:#fda4af;border-radius:50%;
  animation:ckTwinkle var(--d) ease-in-out infinite alternate;
}
@keyframes ckTwinkle{
  0%{opacity:0.1;transform:scale(0.8)}
  100%{opacity:0.8;transform:scale(1.2)}
}
#birthday-cake-section .cake-plate{
  position:relative;
  width:340px;height:30px;
  background:linear-gradient(135deg,#2a1a1a,#1a0e0e);
  border-radius:50%;
  margin:0 auto -10px;
  box-shadow:0 10px 40px rgba(0,0,0,0.6),inset 0 2px 4px rgba(255,255,255,0.05);
  border:1px solid rgba(244,63,94,0.08);
}
#birthday-cake-section .cake-wrapper{
  position:relative;
  width:300px;
  margin:0 auto;
}
#birthday-cake-section .tier-bottom{
  width:300px;height:90px;
  background:linear-gradient(180deg,#1f0a12 0%,#16070c 50%,#0d0508 100%);
  border-radius:12px 12px 6px 6px;
  position:relative;
  margin:0 auto;
  border:1px solid rgba(244,63,94,0.12);
  box-shadow:0 8px 30px rgba(244,63,94,0.06),inset 0 1px 0 rgba(244,63,94,0.05);
  overflow:hidden;
}
#birthday-cake-section .tier-bottom::before{
  content:'';position:absolute;inset:0;
  background:repeating-linear-gradient(
    90deg,transparent,transparent 20px,rgba(244,63,94,0.03) 20px,rgba(244,63,94,0.03) 21px
  );
}
#birthday-cake-section .frosting-bottom{
  position:absolute;top:-12px;left:-4px;right:-4px;height:24px;
  background:linear-gradient(180deg,#be185d,#e11d48);
  border-radius:12px 12px 0 0;
  filter:blur(0.5px);
}
#birthday-cake-section .frosting-bottom::before{
  content:'';position:absolute;bottom:-6px;left:10%;width:12px;height:10px;
  background:#e11d48;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow:30px -2px 0 #be185d,70px -1px 0 #e11d48,110px 0 0 #be185d,
             150px -3px 0 #e11d48,190px -1px 0 #be185d,230px -2px 0 #e11d48,270px 0 0 #be185d;
}
#birthday-cake-section .tier-middle{
  width:240px;height:80px;
  background:linear-gradient(180deg,#1f0a12 0%,#16070c 50%,#0d0508 100%);
  border-radius:10px 10px 5px 5px;
  position:relative;
  margin:-10px auto 0;
  border:1px solid rgba(244,63,94,0.12);
  box-shadow:0 8px 25px rgba(244,63,94,0.05),inset 0 1px 0 rgba(244,63,94,0.05);
  overflow:hidden;
  z-index:2;
}
#birthday-cake-section .tier-middle::before{
  content:'';position:absolute;inset:0;
  background:repeating-linear-gradient(
    90deg,transparent,transparent 15px,rgba(244,63,94,0.03) 15px,rgba(244,63,94,0.03) 16px
  );
}
#birthday-cake-section .frosting-middle{
  position:absolute;top:-10px;left:-3px;right:-3px;height:20px;
  background:linear-gradient(180deg,#be185d,#e11d48);
  border-radius:10px 10px 0 0;
  filter:blur(0.5px);
}
#birthday-cake-section .frosting-middle::before{
  content:'';position:absolute;bottom:-5px;left:8%;width:10px;height:8px;
  background:#e11d48;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow:25px -1px 0 #be185d,55px -1px 0 #e11d48,85px 0 0 #be185d,
             115px -2px 0 #e11d48,145px -1px 0 #be185d,175px -2px 0 #e11d48,205px 0 0 #be185d;
}
#birthday-cake-section .tier-top{
  width:180px;height:70px;
  background:linear-gradient(180deg,#1f0a12 0%,#16070c 50%,#0d0508 100%);
  border-radius:8px 8px 4px 4px;
  position:relative;
  margin:-10px auto 0;
  border:1px solid rgba(244,63,94,0.12);
  box-shadow:0 8px 20px rgba(244,63,94,0.04),inset 0 1px 0 rgba(244,63,94,0.05);
  overflow:hidden;
  z-index:3;
}
#birthday-cake-section .frosting-top{
  position:absolute;top:-8px;left:-2px;right:-2px;height:16px;
  background:linear-gradient(180deg,#be185d,#e11d48);
  border-radius:8px 8px 0 0;
  filter:blur(0.5px);
}
#birthday-cake-section .frosting-top::before{
  content:'';position:absolute;bottom:-4px;left:5%;width:8px;height:6px;
  background:#e11d48;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow:20px -1px 0 #be185d,45px 0 0 #e11d48,70px -1px 0 #be185d,
             95px -2px 0 #e11d48,120px 0 0 #be185d,145px -1px 0 #e11d48;
}
#birthday-cake-section .heart-deco{
  position:absolute;top:4px;left:50%;transform:translateX(-50%);
  font-size:16px;opacity:0.4;animation:ckHeartPulse 2s ease-in-out infinite;
}
@keyframes ckHeartPulse{
  0%,100%{transform:translateX(-50%) scale(1);opacity:0.4}
  50%{transform:translateX(-50%) scale(1.15);opacity:0.6}
}
#birthday-cake-section .gold-band{
  position:absolute;left:0;right:0;height:3px;
  background:linear-gradient(90deg,transparent,rgba(251,191,36,0.2),rgba(251,191,36,0.3),rgba(251,191,36,0.2),transparent);
  top:40%;
}
#birthday-cake-section .ck-candles{
  position:relative;z-index:5;
  display:flex;justify-content:center;align-items:flex-end;
  gap:20px;height:120px;margin-bottom:-15px;
}
#birthday-cake-section .num-candle{
  position:relative;
  filter:drop-shadow(0 0 15px rgba(244,63,94,0.2));
  animation:ckSway 3s ease-in-out infinite alternate;
  transform-origin:bottom center;
}
@keyframes ckSway{
  0%{transform:rotate(-0.8deg)}
  100%{transform:rotate(0.8deg)}
}
#birthday-cake-section .num-candle .nc-flame{
  position:absolute;top:-26px;left:50%;transform:translateX(-50%);
  width:14px;height:24px;
  background:radial-gradient(ellipse at 50% 100%, #fbbf24 0%, #f59e0b 30%, #ef4444 60%, transparent 70%);
  border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  animation:ckFlicker 0.4s ease-in-out infinite alternate;
  box-shadow:0 0 20px rgba(251,191,36,0.4),0 0 40px rgba(239,68,68,0.2);
}
#birthday-cake-section .num-candle .nc-flame::before{
  content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);
  width:9px;height:12px;
  background:radial-gradient(ellipse at 50% 100%, #fef3c7 0%, #fbbf24 50%, transparent 70%);
  border-radius:50%;
  animation:ckFlickerInner 0.3s ease-in-out infinite alternate;
}
@keyframes ckFlicker{
  0%{transform:translateX(-50%) scaleY(1) rotate(-1deg);opacity:0.95}
  25%{transform:translateX(-50%) scaleY(1.05) rotate(1deg);opacity:1}
  50%{transform:translateX(-50%) scaleY(0.95) rotate(-0.5deg);opacity:0.9}
  75%{transform:translateX(-50%) scaleY(1.02) rotate(0.5deg);opacity:1}
  100%{transform:translateX(-50%) scaleY(0.98) rotate(-0.3deg);opacity:0.95}
}
@keyframes ckFlickerInner{
  0%{transform:translateX(-50%) scaleY(1)}
  100%{transform:translateX(-50%) scaleY(1.2)}
}
#birthday-cake-section .num-candle .nc-flame::after{
  content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);
  width:35px;height:35px;
  background:radial-gradient(circle,rgba(251,191,36,0.15) 0%,transparent 70%);
  border-radius:50%;
  animation:ckGlowPulse 1.5s ease-in-out infinite alternate;
}
@keyframes ckGlowPulse{
  0%{transform:translateX(-50%) scale(0.9);opacity:0.6}
  100%{transform:translateX(-50%) scale(1.1);opacity:1}
}
#birthday-cake-section .num-candle .nc-glow{
  position:absolute;pointer-events:none;
}
#birthday-cake-section .ck-confetti-container{position:fixed;inset:0;pointer-events:none;z-index:10}
#birthday-cake-section .ck-confetti{
  position:absolute;top:-10px;width:8px;height:8px;
  border-radius:2px;
  animation:ckConfettiFall var(--d,3s) linear infinite;
}
@keyframes ckConfettiFall{
  0%{transform:translateY(-10px) rotate(0deg);opacity:1}
  100%{transform:translateY(100vh) rotate(720deg);opacity:0}
}
#birthday-cake-section .ck-sparkles-container{
  position:absolute;inset:0;pointer-events:none;overflow:hidden;
}
#birthday-cake-section .ck-sparkle{
  position:absolute;width:4px;height:4px;
  background:#fbbf24;border-radius:50%;
  box-shadow:0 0 6px #fbbf24,0 0 12px rgba(251,191,36,0.3);
  animation:ckSparkleFloat var(--d,3s) ease-out infinite;
}
@keyframes ckSparkleFloat{
  0%{opacity:1;transform:translateY(0) scale(1)}
  100%{opacity:0;transform:translateY(-60px) scale(0)}
}
#birthday-cake-section .ck-message{
  margin-top:50px;
  font-family:'Amiri',serif;
  font-size:clamp(1rem,2.5vw,1.4rem);
  color:rgba(255,255,255,0.5);
  line-height:2;
  max-width:500px;
  animation:ckMsgIn 1.5s ease-out 0.5s both;
}
@keyframes ckMsgIn{
  from{opacity:0;transform:translateY(20px)}
  to{opacity:1;transform:translateY(0)}
}
#birthday-cake-section .ck-message strong{color:#fb7185;font-weight:700}
@media(max-width:500px){
  #birthday-cake-section .cake-plate{width:260px;height:22px}
  #birthday-cake-section .cake-wrapper{width:230px}
  #birthday-cake-section .tier-bottom{width:230px;height:70px}
  #birthday-cake-section .tier-middle{width:180px;height:65px}
  #birthday-cake-section .tier-top{width:140px;height:55px}
  #birthday-cake-section .num-candle svg{width:36px;height:80px}
  #birthday-cake-section .num-candle .nc-flame{width:11px;height:19px;top:-22px}
  #birthday-cake-section .frosting-bottom::before{display:none}
  #birthday-cake-section .frosting-middle::before{display:none}
  #birthday-cake-section .frosting-top::before{display:none}
  #birthday-cake-section .ck-candles{gap:14px;height:90px;margin-bottom:-12px}
}
  `;
  document.head.appendChild(style);

  var observer = new MutationObserver(function() {
    var gallerySection = findGallerySection();
    if (gallerySection && !document.getElementById('birthday-cake-section')) {
      observer.disconnect();
      injectCakeSection(gallerySection);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  function findGallerySection() {
    var imgs = document.querySelectorAll('img[src*="photo-"]');
    if (imgs.length === 0) return null;
    var el = imgs[0];
    while (el && el.tagName !== 'SECTION') { el = el.parentElement; }
    return el;
  }

  function injectCakeSection(afterEl) {
    var section = document.createElement('section');
    section.id = 'birthday-cake-section';
    section.className = 'max-w-4xl mx-auto px-4 sm:px-6 py-20 relative overflow-hidden';
    section.style.cssText = 'background:linear-gradient(180deg, rgba(30,8,15,1), rgba(18,4,10,1))';

    // Stars container
    var stars = document.createElement('div');
    stars.className = 'cake-stars';
    stars.id = 'ck-stars';
    section.appendChild(stars);

    // Gradient bg
    var bg1 = document.createElement('div');
    bg1.className = 'absolute top-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none';
    section.appendChild(bg1);
    var bg2 = document.createElement('div');
    bg2.className = 'absolute bottom-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none';
    section.appendChild(bg2);

    // Title
    var titleDiv = document.createElement('div');
    titleDiv.className = 'relative z-10 text-center mb-12';
    titleDiv.innerHTML = '<span class="text-[10px] text-rose-400 uppercase tracking-[0.3em] block mb-3 font-light">\u0639\u064A\u062F \u0645\u064A\u0644\u0627\u062F</span><h2 class="text-2xl md:text-3xl font-serif font-bold tracking-wide text-rose-200">\u0643\u0644 \u0633\u0646\u0629 \u0648\u0627\u0646\u062A \u0637\u064A\u0628 \u064A\u0627 \u062D\u0628\u064A\u0628\u064A <span class="text-rose-400">\uD83C\uDF82</span></h2>';
    section.appendChild(titleDiv);

    // Cake container
    var cakeContainer = document.createElement('div');
    cakeContainer.className = 'relative z-10';

    // Candles
    var candlesDiv = document.createElement('div');
    candlesDiv.className = 'ck-candles';
    candlesDiv.id = 'ck-candles';
    cakeContainer.appendChild(candlesDiv);

    // Top tier
    var tierTop = document.createElement('div');
    tierTop.className = 'tier-top';
    tierTop.innerHTML = '<div class="frosting-top"></div><div class="gold-band" style="top:50%"></div>';
    cakeContainer.appendChild(tierTop);

    // Middle tier
    var tierMiddle = document.createElement('div');
    tierMiddle.className = 'tier-middle';
    tierMiddle.innerHTML = '<div class="frosting-middle"></div><div class="gold-band" style="top:45%"></div>';
    cakeContainer.appendChild(tierMiddle);

    // Bottom tier
    var tierBottom = document.createElement('div');
    tierBottom.className = 'tier-bottom';
    tierBottom.innerHTML = '<div class="frosting-bottom"></div><div class="gold-band" style="top:45%"></div>';
    cakeContainer.appendChild(tierBottom);

    section.appendChild(cakeContainer);

    // Plate
    var plate = document.createElement('div');
    plate.className = 'cake-plate';
    section.appendChild(plate);

    // Message
    var msg = document.createElement('div');
    msg.className = 'ck-message text-center mx-auto';
    msg.innerHTML = '\u0643\u0644 \u0633\u0646\u0629 \u0648\u0627\u0646\u062A \u0623\u063A\u0644\u0649 \u0625\u0646\u0633\u0627\u0646 \u0641\u064A \u062D\u064A\u0627\u062A\u064A \uD83E\uDD0D<br><strong>\u0628\u062D\u0628\u0643</strong>';
    section.appendChild(msg);

    // Insert after gallery
    if (afterEl.nextSibling) {
      afterEl.parentNode.insertBefore(section, afterEl.nextSibling);
    } else {
      afterEl.parentNode.appendChild(section);
    }

    // Init animations
    initCakeAnimations();
  }

  function initCakeAnimations() {
    // Stars
    var starsEl = document.getElementById('ck-stars');
    if (starsEl) {
      for (var i = 0; i < 60; i++) {
        var s = document.createElement('div');
        s.className = 'cake-star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.setProperty('--d', (1.5 + Math.random() * 3) + 's');
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.width = s.style.height = (1 + Math.random() * 2) + 'px';
        starsEl.appendChild(s);
      }
    }

    // Candles - SVG number candles "23" (3 on right, 2 on left in RTL)
    var candlesContainer = document.getElementById('ck-candles');
    if (candlesContainer) {
      var nums = ['3', '2'];
      for (var ni = 0; ni < 2; ni++) {
        var num = nums[ni];
        var wrapper = document.createElement('div');
        wrapper.className = 'num-candle';

        var svgNS = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('viewBox', '0 0 50 100');
        svg.setAttribute('width', '48');
        svg.setAttribute('height', '100');

        var defs = document.createElementNS(svgNS, 'defs');
        var grad = document.createElementNS(svgNS, 'linearGradient');
        grad.setAttribute('id', 'candleGrad' + ni);
        grad.setAttribute('x1', '0'); grad.setAttribute('y1', '1');
        grad.setAttribute('x2', '0'); grad.setAttribute('y2', '0');
        var s1 = document.createElementNS(svgNS, 'stop');
        s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#fda4af');
        grad.appendChild(s1);
        var s2 = document.createElementNS(svgNS, 'stop');
        s2.setAttribute('offset', '50%'); s2.setAttribute('stop-color', '#fb7185');
        grad.appendChild(s2);
        var s3 = document.createElementNS(svgNS, 'stop');
        s3.setAttribute('offset', '100%'); s3.setAttribute('stop-color', '#e11d48');
        grad.appendChild(s3);
        defs.appendChild(grad);
        svg.appendChild(defs);

        // Number text (font‑rendered for perfect digit shapes)
        var text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', '25');
        text.setAttribute('y', '78');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-family', 'Georgia, "Times New Roman", serif');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '70');
        text.setAttribute('fill', 'url(#candleGrad' + ni + ')');
        text.textContent = num;
        svg.appendChild(text);

        // Glow filter
        var filter = document.createElementNS(svgNS, 'filter');
        filter.setAttribute('id', 'candleGlow' + ni);
        var blur = document.createElementNS(svgNS, 'feGaussianBlur');
        blur.setAttribute('stdDeviation', '3');
        blur.setAttribute('result', 'blur');
        filter.appendChild(blur);
        var merge = document.createElementNS(svgNS, 'feMerge');
        var mn1 = document.createElementNS(svgNS, 'feMergeNode');
        mn1.setAttribute('in', 'blur');
        merge.appendChild(mn1);
        var mn2 = document.createElementNS(svgNS, 'feMergeNode');
        mn2.setAttribute('in', 'SourceGraphic');
        merge.appendChild(mn2);
        filter.appendChild(merge);
        defs.appendChild(filter);

        var glowText = document.createElementNS(svgNS, 'text');
        glowText.setAttribute('x', '25');
        glowText.setAttribute('y', '78');
        glowText.setAttribute('text-anchor', 'middle');
        glowText.setAttribute('font-family', 'Georgia, "Times New Roman", serif');
        glowText.setAttribute('font-weight', 'bold');
        glowText.setAttribute('font-size', '70');
        glowText.setAttribute('fill', '#fb7185');
        glowText.setAttribute('filter', 'url(#candleGlow' + ni + ')');
        glowText.setAttribute('opacity', '0.35');
        glowText.textContent = num;
        svg.appendChild(glowText);

        wrapper.appendChild(svg);

        // Flame
        var flame = document.createElement('div');
        flame.className = 'nc-flame';
        flame.style.setProperty('--f', (0.3 + Math.random() * 0.2) + 's');
        wrapper.appendChild(flame);

        candlesContainer.appendChild(wrapper);
      }
    }

    // Sparkles
    var cakeEl = document.querySelector('#birthday-cake-section .cake-wrapper');
    if (!cakeEl) cakeEl = document.querySelector('#birthday-cake-section .tier-top');
    if (cakeEl) {
      var sparklesContainer = document.createElement('div');
      sparklesContainer.className = 'ck-sparkles-container';
      cakeEl.parentNode.insertBefore(sparklesContainer, cakeEl);
      for (var i = 0; i < 12; i++) {
        var s = document.createElement('div');
        s.className = 'ck-sparkle';
        s.style.left = (30 + Math.random() * 40) + '%';
        s.style.top = (-10 + Math.random() * 30) + '%';
        s.style.setProperty('--d', (2 + Math.random() * 2) + 's');
        s.style.animationDelay = Math.random() * 3 + 's';
        sparklesContainer.appendChild(s);
      }
    }
  }
})();
