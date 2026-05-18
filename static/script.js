// === script.js ===
function predictSafety() {
  const t = parseFloat(document.getElementById('temp').value);
  const h = parseFloat(document.getElementById('humidity').value);
  const aqi = parseFloat(document.getElementById('aqi').value);
  const p = parseFloat(document.getElementById('pollution').value);
  const result = document.getElementById('result');

  if (isNaN(t) || isNaN(h) || isNaN(aqi) || isNaN(p)) {
    result.style.color = "red";
    result.innerText = "⚠️ Please enter valid data in all fields.";
    return;
  }

  let score = 0;
  if (t >= 20 && t <= 30) score++;
  if (h >= 40 && h <= 60) score++;
  if (aqi < 100) score++;
  if (p < 50) score++;

  if (score >= 3) {
    result.style.color = "lime";
    result.innerText = "✅ Environment is SAFE for Asthma Patients.";
  } else {
    result.style.color = "orange";
    result.innerText = "❌ Environment is NOT SAFE for Asthma Patients.";
  }
}

// GSAP animation on homepage
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("nav", {y: -50, opacity: 0, duration: 1});
  gsap.from(".hero h2", {opacity: 0, y: 30, duration: 1.2});
  gsap.from(".hero p", {opacity: 0, y: 40, duration: 1.4});
  gsap.from(".btn", {opacity: 0, scale: 0.8, duration: 1.6});
});