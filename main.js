/* ================= EMAIL JS ================= */
emailjs.init("1iVgufFqPUhjHulgr"); // 👈 apna PUBLIC KEY yahan daalo

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_n72sn2s", // 👈 tumhara service ID
      "template_mxp7wk3",      // 👈 exact template ID
      this
    ).then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }).catch((error) => {
      alert("❌ Message failed!");
      console.error("EmailJS Error:", error);
    });
  });
}

/* ================= TYPED TEXT ================= */
/* ❌ typed -> Typed (capital T) FIXED */
var typed = new Typed(".text", {
  strings: [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Tech Lover"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* ================= RADIAL SKILLS COUNTER ================= */
const items = document.querySelectorAll(".radial-item");

items.forEach(item => {
  const percentageEl = item.querySelector(".percentage");
  const percent = parseInt(percentageEl.innerText);

  let count = 0;
  const interval = setInterval(() => {
    if (count >= percent) {
      clearInterval(interval);
    } else {
      count++;
      percentageEl.innerText = count + "%";
    }
  }, 20);
});

/* ================= SCROLL ANIMATION ================= */
window.addEventListener("scroll", () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
});

/* ================= BUTTON RIPPLE + SUCCESS ================= */
const btn = document.querySelector(".send");

if (btn) {
  btn.addEventListener("click", function (e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    let x = e.clientX - btn.getBoundingClientRect().left;
    let y = e.clientY - btn.getBoundingClientRect().top;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });

  btn.addEventListener("click", function () {
    btn.classList.add("success");
    btn.innerHTML = "✔ Sent";

    setTimeout(() => {
      btn.classList.remove("success");
      btn.innerHTML = "Send Message";
    }, 2000);
  });
}
