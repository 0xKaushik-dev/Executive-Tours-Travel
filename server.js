const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.resolve(__dirname);
const SITE_DIR = path.join(ROOT_DIR, 'trova-travel.framer.website');
const EXTERNAL_DIR = path.join(ROOT_DIR, '_external');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

const MASTER_120FPS_STYLES = `
<!-- ================= 120 FPS PRODUCTION ENGINE STYLES ================= -->
<style id="trova-master-engine-css">
  /* 1. Reset & Dismiss SSR Blocking Preloader */
  .framer-1qh6o9b-container, 
  [data-framer-name="Load Innitial"],
  .framer-ut0eF {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
    visibility: hidden !important;
    height: 0 !important;
    width: 0 !important;
    overflow: hidden !important;
  }

  /* 2. Unconditional Full Visibility for all Content */
  [style*="opacity:0"],
  [style*="opacity: 0"],
  [style*="opacity:0.001"],
  [style*="opacity: 0.001"],
  [style*="filter:blur"],
  [style*="filter: blur"],
  .framer-zint46-container,
  .framer-dfucba-container,
  .framer-1p101vg-container,
  .framer-1cw37kt-container,
  .framer-1wsfoqg-container,
  .framer-tw1tan-container,
  .framer-sjcdfd-container,
  .framer-rs9xf0-container,
  .framer-1i9clgj-container,
  .framer-1ykkxbm,
  .framer-eivg7s,
  .framer-15s2xkd,
  .framer-1yeb13z,
  .framer-111jgzy,
  section,
  section * {
    visibility: visible !important;
  }

  /* 3. Global Typography & Clean Layout */
  html {
    scroll-behavior: auto !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    overflow-x: hidden;
    background-color: rgb(238, 242, 236);
    margin: 0;
    padding: 0;
    width: 100% !important;
    min-height: 100vh;
  }

  [data-framer-component-type="RichTextContainer"] h1,
  [data-framer-component-type="RichTextContainer"] h2,
  [data-framer-component-type="RichTextContainer"] h3,
  [data-framer-component-type="RichTextContainer"] h4,
  [data-framer-component-type="RichTextContainer"] p,
  h1.framer-text, h2.framer-text, h3.framer-text, h4.framer-text, p.framer-text {
    white-space: normal !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
  }

  h1.framer-text span[style*="inline-block"],
  h2.framer-text span[style*="inline-block"],
  h3.framer-text span[style*="inline-block"],
  h4.framer-text span[style*="inline-block"] {
    display: inline-block !important;
    white-space: nowrap !important;
    margin-right: 0.22em !important;
    vertical-align: baseline !important;
  }

  span[style*="white-space:nowrap"] span,
  span[style*="white-space: nowrap"] span {
    display: inline-block !important;
    margin-right: 0 !important;
  }

  /* 4. Navigation Bar Layout & Responsiveness */
  @media (min-width: 860px) {
    .ssr-variant.hidden-uz5np3.hidden-bralxw {
      display: block !important;
    }
    .ssr-variant.hidden-2bgdeg {
      display: none !important;
    }
  }

  @media (max-width: 859.98px) {
    .ssr-variant.hidden-2bgdeg.hidden-bralxw {
      display: block !important;
    }
    .ssr-variant.hidden-uz5np3 {
      display: none !important;
    }
  }

  header nav {
    overflow: visible !important;
  }

  .framer-16719fj {
    padding: 18px 32px !important;
    max-width: 1330px !important;
    margin: 0 auto !important;
  }

  .framer-ikyzxh {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    overflow: visible !important;
  }

  .framer-tw8l0u .framer-text,
  .framer-tw8l0u h4,
  .framer-1yvk1fi .framer-text {
    font-size: 20px !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    color: #111827 !important;
    --framer-text-color: #111827 !important;
    white-space: nowrap !important;
  }

  .framer-pysdvn, .framer-1osgn6j {
    display: flex !important;
    align-items: center !important;
    gap: 28px !important;
    width: max-content !important;
    overflow: visible !important;
  }

  .framer-13fnuyw-container, 
  .framer-ma4joh-container, 
  .framer-15lno82-container, 
  .framer-1vooi50-container, 
  .framer-1c1dslv-container {
    width: max-content !important;
    min-width: max-content !important;
    overflow: visible !important;
    flex-shrink: 0 !important;
  }

  .framer-Bb0lZ, .framer-11nmbex {
    display: inline-flex !important;
    align-items: center !important;
    width: max-content !important;
    min-width: max-content !important;
    white-space: nowrap !important;
    overflow: visible !important;
    cursor: pointer !important;
    padding: 4px 6px !important;
    transition: opacity 0.2s ease !important;
  }

  .framer-Bb0lZ:hover {
    opacity: 0.8 !important;
  }

  .framer-137p5wa {
    white-space: nowrap !important;
    width: max-content !important;
    min-width: max-content !important;
    display: block !important;
  }

  header nav .framer-137p5wa p, 
  header nav .framer-137p5wa .framer-text,
  header nav .framer-1osgn6j p,
  header nav .framer-1osgn6j .framer-text,
  header nav .framer-Bb0lZ p,
  header nav .framer-Bb0lZ .framer-text {
    white-space: nowrap !important;
    display: inline-block !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #111827 !important;
    --framer-text-color: #111827 !important;
  }

  header nav .framer-Bb0lZ:hover p,
  header nav .framer-Bb0lZ:hover .framer-text {
    color: #1a3d1f !important;
    --framer-text-color: #1a3d1f !important;
  }

  /* 5. Action Buttons */
  .framer-ABfMY, .framer-1qxpsbd {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: max-content !important;
    min-width: max-content !important;
    height: 44px !important;
    padding: 0 22px !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    cursor: pointer !important;
    border-radius: 8px !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
  }

  .framer-ABfMY:hover, .framer-1qxpsbd:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 14px rgba(26, 61, 31, 0.2) !important;
  }

  .framer-7hkbim {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    height: 20px !important;
    width: max-content !important;
    min-width: max-content !important;
    overflow: hidden !important;
  }

  .framer-154ou0s, .framer-1y9x5vq {
    display: block !important;
    height: 20px !important;
    line-height: 20px !important;
    white-space: nowrap !important;
    width: max-content !important;
    min-width: max-content !important;
  }

  .framer-154ou0s p, .framer-1y9x5vq p {
    white-space: nowrap !important;
    line-height: 20px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    margin: 0 !important;
  }

  /* 6. Badges & Chips */
  [data-framer-name="Badge"], .framer-4Y2RT {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 6px 14px !important;
    border-radius: 100px !important;
    width: max-content !important;
    background: rgba(40, 40, 40, 0.06) !important;
  }

  [data-framer-name="Badge"] svg, .framer-4Y2RT svg {
    flex-shrink: 0 !important;
    width: 16px !important;
    height: 16px !important;
  }

  [data-framer-name="Chips"], .framer-qpQcJ {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 6px 14px !important;
    border-radius: 8px !important;
    width: max-content !important;
  }

  /* 7. Card Micro-Interactions */
  .framer-DjlwF, .framer-h4qa87-container, 
  .framer-1sig05n [data-border="true"], 
  .framer-1t8eimp [data-border="true"], 
  .framer-a4tvnf [data-border="true"], 
  .framer-nkkdaz [data-border="true"], 
  .framer-ev12gd [data-border="true"] {
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
  }

  .framer-DjlwF:hover, .framer-h4qa87-container:hover, 
  .framer-1sig05n [data-border="true"]:hover, 
  .framer-1t8eimp [data-border="true"]:hover, 
  .framer-a4tvnf [data-border="true"]:hover, 
  .framer-nkkdaz [data-border="true"]:hover, 
  .framer-ev12gd [data-border="true"]:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.08) !important;
  }

  /* Tour Card Price Tag Overflow Fix */
  .framer-DjlwF .framer-1ygnzbj,
  .framer-DjlwF .framer-ppol2u {
    overflow: visible !important;
  }

  .framer-DjlwF .framer-p52imv {
    overflow: visible !important;
    width: max-content !important;
    min-width: max-content !important;
    display: inline-flex !important;
    align-items: baseline !important;
    gap: 2px !important;
  }

  .framer-DjlwF .framer-zq9fa0,
  .framer-DjlwF .framer-83onkb {
    overflow: visible !important;
    width: max-content !important;
    min-width: max-content !important;
    white-space: nowrap !important;
  }

  .framer-DjlwF .framer-zq9fa0 h3,
  .framer-DjlwF .framer-zq9fa0 .framer-text,
  .framer-DjlwF .framer-83onkb p,
  .framer-DjlwF .framer-83onkb .framer-text {
    white-space: nowrap !important;
    overflow: visible !important;
    width: max-content !important;
    display: inline-block !important;
  }

  .framer-DjlwF .framer-1d3f3um {
    overflow: visible !important;
  }

  /* 8. Testimonials & Author Metadata */
  .framer-1puin20 {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 14px !important;
    width: 100% !important;
    margin-top: 24px !important;
    overflow: visible !important;
  }

  .framer-1pc0ka5 {
    flex-shrink: 0 !important;
    width: 44px !important;
    height: 44px !important;
    border-radius: 8px !important;
    overflow: hidden !important;
  }

  .framer-1hq7ik2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    justify-content: center !important;
    gap: 4px !important;
    width: max-content !important;
    overflow: visible !important;
  }

  .framer-u7tupj, .framer-1s2lb96, .framer-11mrsc1 {
    white-space: nowrap !important;
    width: max-content !important;
    display: block !important;
  }

  .framer-u7tupj p, .framer-1s2lb96 p, .framer-11mrsc1 p {
    white-space: nowrap !important;
    margin: 0 !important;
    line-height: 1.3 !important;
  }

  .framer-u7rhl1, .framer-1pth4z4 {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    width: max-content !important;
    overflow: visible !important;
  }

  .framer-103r521, .framer-izui29 {
    flex-shrink: 0 !important;
    width: 16px !important;
    height: 16px !important;
  }

  .framer-160q1w5 [data-framer-name="Bottom content"] {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    overflow: visible !important;
    margin-top: 4px !important;
  }

  /* 9. Contact Forms & Inputs */
  .framer-form-input {
    width: 100% !important;
    padding: 14px 16px !important;
    font-size: 15px !important;
    border-radius: 8px !important;
    box-sizing: border-box !important;
    border: 1px solid rgba(0, 0, 0, 0.12) !important;
    background-color: #ffffff !important;
    color: #1a1a1a !important;
    font-family: inherit !important;
  }
  .framer-form-input:focus {
    outline: none !important;
    border-color: #1a3d1f !important;
    box-shadow: 0 0 0 2px rgba(26, 61, 31, 0.15) !important;
  }

  /* 10. Footer Styling & High Contrast */
  .framer-1gxgk24 {
    max-width: 1330px !important;
    margin: 0 auto !important;
    padding: 60px 32px 40px 32px !important;
    box-sizing: border-box !important;
  }

  footer, footer * {
    --extracted-r6o4lv: #ffffff !important;
    --extracted-1of0zx5: #ffffff !important;
  }

  footer a,
  footer a p,
  footer a span,
  footer a .framer-text,
  footer .framer-137p5wa p,
  footer .framer-137p5wa .framer-text,
  footer .framer-Bb0lZ p,
  footer .framer-Bb0lZ .framer-text,
  footer .framer-styles-preset-1m9i2x1,
  footer .framer-text,
  footer p,
  footer h2,
  footer h3,
  footer h4,
  footer h5 {
    color: #ffffff !important;
    --framer-text-color: #ffffff !important;
  }

  footer a:hover,
  footer a:hover p,
  footer a:hover .framer-text,
  footer .framer-Bb0lZ:hover p {
    color: #a7c957 !important;
    --framer-text-color: #a7c957 !important;
    opacity: 1 !important;
  }

  /* Footer CTA Button (White button with bold dark green text) */
  footer .framer-ABfMY,
  footer .framer-1qxpsbd,
  footer [data-framer-name="CTA Button"],
  footer .framer-f3i8qd a {
    background-color: #ffffff !important;
  }

  footer .framer-ABfMY p,
  footer .framer-1qxpsbd p,
  footer .framer-ABfMY span,
  footer .framer-1qxpsbd span,
  footer .framer-ABfMY .framer-text,
  footer .framer-1qxpsbd .framer-text,
  footer .framer-f3i8qd a p,
  footer .framer-f3i8qd a .framer-text,
  footer [data-framer-name="CTA Button"] p {
    color: #1a3d1f !important;
    --framer-text-color: #1a3d1f !important;
    font-weight: 700 !important;
    opacity: 1 !important;
  }

  footer .framer-ABfMY:hover,
  footer .framer-1qxpsbd:hover,
  footer .framer-f3i8qd a:hover {
    background-color: #f7faf5 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important;
  }

  footer .framer-ABfMY:hover p,
  footer .framer-1qxpsbd:hover p,
  footer .framer-f3i8qd a:hover p {
    color: #1a3d1f !important;
    --framer-text-color: #1a3d1f !important;
  }

  footer svg foreignObject {
    width: 100% !important;
    height: 100% !important;
    overflow: visible !important;
  }

  footer svg foreignObject p {
    font-size: clamp(40px, 12vw, 160px) !important;
    white-space: nowrap !important;
    width: 100% !important;
    text-align: center !important;
    line-height: 1 !important;
    letter-spacing: -0.02em !important;
    color: rgba(247, 249, 244, 0.22) !important;
    --framer-text-color: rgba(247, 249, 244, 0.22) !important;
  }

  /* 11. Filter Tabs */
  .trova-tab-active {
    background-color: var(--token-d12f970d-d87c-4879-9661-9646e8d599f1, rgb(26, 61, 31)) !important;
    color: #ffffff !important;
  }
  .trova-tab-active p, .trova-tab-active .framer-text {
    color: #ffffff !important;
    --framer-text-color: #ffffff !important;
  }

  /* 12. Hide FAQ Section across all pages */
  .framer-1e76x88, 
  [data-framer-name="FAQ"], 
  [data-framer-name="FAQ Container"],
  .framer-v5g8xf {
    display: none !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    overflow: hidden !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  /* 13. Mobile Menu Drawer & Hamburger Styling */
  .framer-iqge09-container,
  .framer-0XlTn,
  [aria-label="Open menu"] {
    cursor: pointer !important;
    user-select: none !important;
    pointer-events: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    width: 44px !important;
    height: 44px !important;
    background: transparent !important;
    border: none !important;
    position: relative !important;
    z-index: 9999 !important;
  }

  .framer-134aahx,
  .framer-2sz5tv {
    background-color: #111827 !important;
    height: 3px !important;
    width: 24px !important;
    border-radius: 3px !important;
    margin: 3px 0 !important;
    pointer-events: none !important;
    display: block !important;
    transition: background-color 0.2s ease !important;
  }

  .trova-mobile-menu-open {
    display: flex !important;
    position: fixed !important;
    top: 70px !important;
    left: 16px !important;
    right: 16px !important;
    background: #ffffff !important;
    border-radius: 16px !important;
    padding: 20px 24px 24px 24px !important;
    flex-direction: column !important;
    z-index: 99999 !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
    animation: trovaMenuSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
  }

  @keyframes trovaMenuSlideDown {
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* 14. Page Transition Animation Engine */
  #trova-page-loader-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #1a3d1f, #386641, #a7c957);
    z-index: 999999;
    transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
    pointer-events: none;
  }

  body {
    transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
    transform-origin: top center;
  }

  body.trova-page-exit {
    opacity: 0 !important;
    transform: translateY(-8px) scale(0.998) !important;
    pointer-events: none !important;
  }

  body.trova-page-entered {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
  }

  /* 15. Modern Subtle Scroll Reveal & Micro-Animations */
  .trova-reveal-up {
    opacity: 0 !important;
    transform: translateY(24px) translateZ(0) !important;
    transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) !important;
    will-change: opacity, transform;
  }

  .trova-reveal-up.trova-revealed {
    opacity: 1 !important;
    transform: translateY(0) translateZ(0) !important;
  }

  .trova-delay-1 { transition-delay: 0.08s !important; }
  .trova-delay-2 { transition-delay: 0.16s !important; }
  .trova-delay-3 { transition-delay: 0.24s !important; }

  /* 16. Hide Guide Toggle Buttons */
  .framer-an3pla-container,
  [data-framer-name*="Left"],
  [data-framer-name*="Right"],
  .framer-1rfln9t-container,
  .framer-5kpjjp-container,
  .framer-bQuX7 {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    height: 0 !important;
    width: 0 !important;
    overflow: hidden !important;
  }
</style>
`;

const MASTER_120FPS_SCRIPT = `
<script id="trova-master-engine-js">
  (function() {
    function initEngine() {
      // 1. Remove Preloader
      const preloader = document.querySelector('.framer-1qh6o9b-container, [data-framer-name="Load Innitial"]');
      if (preloader) preloader.remove();

      // 2. Unhide all SSR hidden text & containers immediately with full visibility
      const allTextNodes = document.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6, [data-framer-component-type], [style*="opacity"]');
      allTextNodes.forEach(node => {
        if (node.style.opacity === '0' || node.style.opacity === '0.001') {
          node.style.opacity = '1';
          node.style.filter = 'none';
        }
      });

      const hiddenContainers = document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
      hiddenContainers.forEach(c => {
        c.style.opacity = '1';
        c.style.filter = 'none';
      });

      // 3. Setup 120 FPS Momentum Inertia Smooth Scroll Engine
      setupDelayedScroll();

      // 4. Interactive Filter Tabs
      setupHikeTabs();

      // 5. Interactive Photo Switcher (About Us)
      setupPhotoSwitcher();

      // 6. Mobile Hamburger Menu Toggle
      setupMobileMenu();

      // 7. Smooth Page Jumping Transition Animation
      setupPageTransitions();

      // 8. Modern Scroll Reveal Animations
      setupScrollReveals();
    }

    function setupDelayedScroll() {
      let currentY = window.pageYOffset;
      let targetY = window.pageYOffset;
      let isRunning = false;
      let lastTime = performance.now();

      function update(now) {
        const delta = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        // Slower, calmer, relaxed momentum glide (k = 4.8 for a smooth gentle deceleration)
        const factor = 1 - Math.exp(-4.8 * delta);
        currentY += (targetY - currentY) * factor;

        if (Math.abs(targetY - currentY) < 0.25) {
          currentY = targetY;
          window.scrollTo(0, currentY);
          isRunning = false;
          return;
        }

        window.scrollTo(0, currentY);
        isRunning = true;
        requestAnimationFrame(update);
      }

      function startAnimation() {
        if (!isRunning) {
          isRunning = true;
          lastTime = performance.now();
          requestAnimationFrame(update);
        }
      }

      window.addEventListener('wheel', (e) => {
        try {
          let el = e.target;
          while (el && el !== document.body && el !== document.documentElement) {
            if (el.nodeType === 1 && el.scrollHeight > el.clientHeight) {
              const overflowY = window.getComputedStyle(el).overflowY;
              if (overflowY === 'auto' || overflowY === 'scroll') {
                return;
              }
            }
            el = el.parentElement;
          }

          e.preventDefault();
          const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

          if (!isRunning) {
            currentY = targetY = window.pageYOffset;
          }

          // Gentle, slower delta scaling
          let delta = e.deltaY * 0.75;
          if (e.deltaMode === 1) delta *= 18;
          else if (e.deltaMode === 2) delta *= window.innerHeight * 0.6;

          targetY += delta;
          targetY = Math.max(0, Math.min(targetY, maxScroll));

          startAnimation();
        } catch (err) {}
      }, { passive: false });

      window.addEventListener('keydown', (e) => {
        const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
        if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable)) return;

        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        let handled = false;

        if (e.key === 'ArrowDown') {
          targetY += 85;
          handled = true;
        } else if (e.key === 'ArrowUp') {
          targetY -= 85;
          handled = true;
        } else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
          targetY += window.innerHeight * 0.75;
          handled = true;
        } else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
          targetY -= window.innerHeight * 0.75;
          handled = true;
        } else if (e.key === 'Home') {
          targetY = 0;
          handled = true;
        } else if (e.key === 'End') {
          targetY = maxScroll;
          handled = true;
        }

        if (handled) {
          e.preventDefault();
          targetY = Math.max(0, Math.min(targetY, maxScroll));
          if (!isRunning) currentY = window.pageYOffset;
          startAnimation();
        }
      });

      window.addEventListener('resize', () => {
        currentY = targetY = window.pageYOffset;
      });

      window.addEventListener('scroll', () => {
        if (!isRunning) {
          currentY = targetY = window.pageYOffset;
        }
      }, { passive: true });
    }

    function setupHikeTabs() {
      const tabContainers = document.querySelectorAll('.framer-5aove7 .framer-FmjC1, [data-framer-name="Tabs wrap"] .framer-FmjC1');
      const hikeCards = document.querySelectorAll('.framer-dkequp .framer-1qavzkd, .framer-dkequp > div');

      if (tabContainers.length > 0) {
        tabContainers.forEach(tab => {
          tab.style.cursor = 'pointer';
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabText = tab.textContent.trim().toLowerCase();

            tabContainers.forEach(t => t.classList.remove('trova-tab-active'));
            tab.classList.add('trova-tab-active');

            hikeCards.forEach(card => {
              const cardText = card.textContent.trim().toLowerCase();
              card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              if (tabText === 'all' || cardText.includes(tabText)) {
                card.style.display = '';
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'scale(1)';
                }, 20);
              } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.96)';
                setTimeout(() => {
                  card.style.display = 'none';
                }, 300);
              }
            });
          });
        });
      }
    }

    function setupPhotoSwitcher() {
      const iconBtns = document.querySelectorAll('.framer-hn5t4g > div');
      const img1 = document.querySelector('.framer-113jbq7');
      const img2 = document.querySelector('.framer-ucnb3l');
      const img3 = document.querySelector('.framer-1ndylu2');
      const images = [img1, img2, img3].filter(Boolean);

      if (iconBtns.length >= 3 && images.length >= 3) {
        iconBtns.forEach((btn, idx) => {
          btn.style.cursor = 'pointer';
          btn.addEventListener('click', () => {
            iconBtns.forEach(b => {
              const inner = b.querySelector('.framer-Ewzmn');
              if (inner) {
                inner.style.backgroundColor = 'var(--token-c2afed33-674b-48e9-8f2d-42005165fb59, rgb(255, 255, 255))';
              }
            });
            const activeInner = btn.querySelector('.framer-Ewzmn');
            if (activeInner) {
              activeInner.style.backgroundColor = 'var(--token-d12f970d-d87c-4879-9661-9646e8d599f1, rgb(26, 61, 31))';
            }

            images.forEach((img, i) => {
              img.style.transition = 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
              if (i === idx) {
                img.style.zIndex = '5';
                img.style.opacity = '1';
                img.style.transform = (i === 1 ? 'translateX(-50%)' : '') + ' translateY(0)';
              } else {
                img.style.zIndex = '2';
                img.style.opacity = '0.3';
                img.style.transform = (i === 1 ? 'translateX(-50%)' : '') + ' translateY(6px)';
      }
    }

    function setupMobileMenu() {
      function handleMenuClick(e) {
        const btn = e.target.closest('[aria-label="Open menu"], .framer-0XlTn, .framer-iqge09-container');
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();

        let drawer = document.getElementById('trova-mobile-drawer');
        let backdrop = document.getElementById('trova-mobile-backdrop');

        if (drawer) {
          drawer.remove();
          if (backdrop) backdrop.remove();
        } else {
          backdrop = document.createElement('div');
          backdrop.id = 'trova-mobile-backdrop';
          backdrop.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.45);z-index:99998;animation:trovaFadeIn 0.2s ease;';

          drawer = document.createElement('div');
          drawer.id = 'trova-mobile-drawer';
          drawer.className = 'trova-mobile-menu-open';
          drawer.innerHTML = \`
            <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eef2ec;padding-bottom:14px;margin-bottom:10px">
              <span style="font-size:18px;font-weight:700;color:#111827">Executive Tours</span>
              <button id="trova-close-menu-btn" style="background:none;border:none;font-size:26px;font-weight:bold;color:#111827;cursor:pointer;padding:0 8px;line-height:1">&times;</button>
            </div>
            <a href="/" style="font-size:17px;font-weight:600;color:#111827;text-decoration:none;padding:12px 0;border-bottom:1px solid #f3f4f6">Home</a>
            <a href="/about" style="font-size:17px;font-weight:600;color:#111827;text-decoration:none;padding:12px 0;border-bottom:1px solid #f3f4f6">About Us</a>
            <a href="/hikes" style="font-size:17px;font-weight:600;color:#111827;text-decoration:none;padding:12px 0;border-bottom:1px solid #f3f4f6">Tour Packages</a>
            <a href="/gallery" style="font-size:17px;font-weight:600;color:#111827;text-decoration:none;padding:12px 0;border-bottom:1px solid #f3f4f6">Gallery</a>
            <a href="/journal" style="font-size:17px;font-weight:600;color:#111827;text-decoration:none;padding:12px 0;border-bottom:1px solid #f3f4f6">Travel Guides</a>
            <a href="/contact" style="display:block;text-align:center;background:#1a3d1f;color:#ffffff;font-weight:700;font-size:16px;padding:14px;border-radius:10px;text-decoration:none;margin-top:14px">Plan Your Tour</a>
          \`;

          document.body.appendChild(backdrop);
          document.body.appendChild(drawer);

          const closeBtn = document.getElementById('trova-close-menu-btn');
          const closeMenu = () => {
            if (drawer) drawer.remove();
            if (backdrop) backdrop.remove();
          };

          if (closeBtn) closeBtn.onclick = closeMenu;
          backdrop.onclick = closeMenu;
        }
      }

      document.addEventListener('click', handleMenuClick, true);
    }

    function setupPageTransitions() {
      let bar = document.getElementById('trova-page-loader-bar');
      if (!bar) {
        bar = document.createElement('div');
        bar.id = 'trova-page-loader-bar';
        document.body.appendChild(bar);
      }

      document.body.classList.add('trova-page-entered');
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.opacity = '0';
        setTimeout(() => { bar.style.width = '0%'; }, 250);
      }, 200);

      document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) {
          return;
        }

        try {
          const targetUrl = new URL(link.href, window.location.href);
          if (targetUrl.origin === window.location.origin) {
            if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
              return;
            }

            e.preventDefault();
            bar.style.opacity = '1';
            bar.style.width = '80%';
            document.body.classList.remove('trova-page-entered');
            document.body.classList.add('trova-page-exit');

            setTimeout(() => {
              bar.style.width = '100%';
              window.location.href = link.href;
            }, 250);

            setTimeout(() => {
              document.body.classList.remove('trova-page-exit');
              document.body.classList.add('trova-page-entered');
              bar.style.opacity = '0';
            }, 1500);
          }
        } catch (err) {}
      });

      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          document.body.classList.remove('trova-page-exit');
          document.body.classList.add('trova-page-entered');
          if (bar) bar.style.opacity = '0';
        }
      });
    }

    function setupScrollReveals() {
      const targets = document.querySelectorAll(
        'section h2, section h3, section [data-framer-name="Wrapper"] > div, .framer-DjlwF, .framer-h4qa87-container, .framer-1sig05n [data-border="true"], .framer-1t8eimp [data-border="true"], .framer-a4tvnf [data-border="true"], .framer-nkkdaz [data-border="true"], .framer-ev12gd [data-border="true"]'
      );

      if (!('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('trova-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      targets.forEach((target, i) => {
        target.classList.add('trova-reveal-up');
        if (i % 3 === 1) target.classList.add('trova-delay-1');
        else if (i % 3 === 2) target.classList.add('trova-delay-2');
        observer.observe(target);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initEngine);
    } else {
      initEngine();
    }
    window.addEventListener('load', initEngine);
  })();
</script>
`;

function resolveFilePath(reqPath) {
  let cleanPath = decodeURIComponent(reqPath.split('?')[0]);
  
  if (cleanPath === '/' || cleanPath === '') {
    return path.join(SITE_DIR, 'index.html');
  }

  if (cleanPath.startsWith('/_external/') || cleanPath.startsWith('_external/')) {
    const relativePart = cleanPath.replace(/^\/?_external\//, '');
    const target = path.join(EXTERNAL_DIR, relativePart);
    if (fs.existsSync(target)) return target;
  }

  if (cleanPath.startsWith('/trova-travel.framer.website/')) {
    cleanPath = cleanPath.replace('/trova-travel.framer.website', '');
  }

  let directPath = path.join(SITE_DIR, cleanPath);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    return directPath;
  }

  let htmlPath = path.join(SITE_DIR, cleanPath + '.html');
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    return htmlPath;
  }

  let dirIndexPath = path.join(SITE_DIR, cleanPath, 'index.html');
  if (fs.existsSync(dirIndexPath) && fs.statSync(dirIndexPath).isFile()) {
    return dirIndexPath;
  }

  let rootPath = path.join(ROOT_DIR, cleanPath);
  if (fs.existsSync(rootPath) && fs.statSync(rootPath).isFile()) {
    return rootPath;
  }

  return null;
}

// In-Memory HTML Processed Cache for sub-millisecond response latency
const htmlCache = new Map();

function getProcessedHtml(filePath) {
  const stat = fs.statSync(filePath);
  const cached = htmlCache.get(filePath);
  if (cached && cached.mtime >= stat.mtimeMs) {
    return cached.content;
  }

  let data = fs.readFileSync(filePath, 'utf8');
  let modified = data.replace(/<div class="framer-1qh6o9b-container">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i, '');

  if (modified.includes('</head>')) {
    modified = modified.replace('</head>', MASTER_120FPS_STYLES + '\n</head>');
  } else {
    modified = MASTER_120FPS_STYLES + modified;
  }

  if (modified.includes('</body>')) {
    modified = modified.replace('</body>', MASTER_120FPS_SCRIPT + '\n</body>');
  } else {
    modified = modified + MASTER_120FPS_SCRIPT;
  }

  htmlCache.set(filePath, { mtime: stat.mtimeMs, content: modified });
  return modified;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const filePath = resolveFilePath(parsedUrl.pathname);

  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  if (!filePath || !fs.existsSync(filePath)) {
    const notFoundPage = path.join(SITE_DIR, '404.html');
    if (fs.existsSync(notFoundPage)) {
      const html404 = getProcessedHtml(notFoundPage);
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
      res.end(html404);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>Page not found. <a href="/">Return to Home</a></p>');
    }
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const acceptEncoding = req.headers['accept-encoding'] || '';

  if (ext === '.html') {
    try {
      const modified = getProcessedHtml(filePath);
      const buffer = Buffer.from(modified, 'utf8');

      if (/\bgzip\b/.test(acceptEncoding)) {
        zlib.gzip(buffer, (err, gzipped) => {
          if (err) {
            res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
            res.end(buffer);
          } else {
            res.writeHead(200, {
              'Content-Type': contentType,
              'Content-Encoding': 'gzip',
              'Content-Length': gzipped.length,
              'Cache-Control': 'no-cache'
            });
            res.end(gzipped);
          }
        });
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': buffer.length,
          'Cache-Control': 'no-cache'
        });
        res.end(buffer);
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error: ' + err.message);
    }
  } else {
    // Static Assets: Streaming with Immutable Cache
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stat.size,
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log('🚀 Executive Tours & Travel Website deployed successfully!');
  console.log('🌐 Local URL: http://localhost:' + PORT);
  console.log('📍 Bhubaneswar, Odisha | support@executivetours.in');
  console.log('⚡ 120 FPS Fluid Animations & Compression: ACTIVE');
  console.log('====================================================');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
