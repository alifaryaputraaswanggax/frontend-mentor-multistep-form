// Bagian 1: Memilih SEMUA elemen penting dari HTML
const steps = document.querySelectorAll('.form-content > section');
const sidebarSteps = document.querySelectorAll('.steps li');
const nextButtons = document.querySelectorAll('.next-step');
const backButtons = document.querySelectorAll('.go-back-btn');

// Bagian 2: Variabel untuk melacak step saat ini
// Kita mulai dari step 1 (karena index array dimulai dari 0, step 1 adalah index 0)
let currentStepIndex = 0;

// Bagian 3: Fungsi untuk mengupdate tampilan (UI)
function updateUI() {
  // Mengupdate tampilan step utama
  steps.forEach((step, index) => {
    if (index === currentStepIndex) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  // Mengupdate tampilan sidebar
  sidebarSteps.forEach((sidebarStep, index) => {
    if (index === currentStepIndex) {
      sidebarStep.classList.add('active');
    } else {
      sidebarStep.classList.remove('active');
    }
  });
}

// Bagian 4: Menambahkan event listener untuk SEMUA tombol "Next Step"
nextButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Pindah ke step selanjutnya, tapi jangan sampai melebihi jumlah step yang ada
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex++;
      updateUI();
    }
  });
});

// Bagian 5: Menambahkan event listener untuk SEMUA tombol "Go Back"
backButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Kembali ke step sebelumnya, tapi jangan sampai kurang dari 0
    if (currentStepIndex > 0) {
      currentStepIndex--;
      updateUI();
    }
  });
});

// Bagian 6: Panggil fungsi updateUI() saat halaman pertama kali dimuat
// Ini untuk memastikan tampilan awal sudah benar (menampilkan step 1)
updateUI();

// === LOGIKA UNTUK TOGGLE SWITCH (BULANAN/TAHUNAN) ===

// 1. Pilih elemen-elemen yang berhubungan dengan toggle
const billingToggle = document.querySelector('#billing-toggle');
const planPrices = document.querySelectorAll('.plan-price');
const yearlyPromos = document.querySelectorAll('.yearly-promo');
const monthlyLabel = document.querySelector('.toggle-label.monthly');
const yearlyLabel = document.querySelector('.toggle-label.yearly');

// 2. Tambahkan event listener pada toggle switch
billingToggle.addEventListener('change', () => {
  const isYearly = billingToggle.checked;

  // 3. Logika untuk mengubah harga dan menampilkan promo
  if (isYearly) {
    // Jika toggle digeser ke Yearly
    planPrices[0].textContent = '$90/yr';
    planPrices[1].textContent = '$120/yr';
    planPrices[2].textContent = '$150/yr';
    
    // Tampilkan semua promo "2 months free"
    yearlyPromos.forEach(promo => {
      promo.style.display = 'block';
    });

    // Perbarui warna label
    monthlyLabel.classList.remove('active');
    yearlyLabel.classList.add('active');

  } else {
    // Jika toggle digeser kembali ke Monthly
    planPrices[0].textContent = '$9/mo';
    planPrices[1].textContent = '$12/mo';
    planPrices[2].textContent = '$15/mo';

    // Sembunyikan kembali semua promo
    yearlyPromos.forEach(promo => {
      promo.style.display = 'none';
    });

    // Perbarui warna label
    yearlyLabel.classList.remove('active');
    monthlyLabel.classList.add('active');
  }
});