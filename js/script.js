//toggel class active humburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika humburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// modal box
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = button.closest(".product-card");
    const modalTarget = button.getAttribute("data-modal-target");
    const modal = document.getElementById(modalTarget);

    //tampilan modal box
    if (modal) {
      modal.style.display = "flex";
    }
    e.preventDefault();
  });
});

// menutup modal saat di close
document.querySelectorAll(".modal .close-icon").forEach((closeIcon) => {
  closeIcon.addEventListener("click", (e) => {
    const modal = closeIcon.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
    e.preventDefault();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Menangani klik tombol kirim pesan
  document.querySelector(".btn").addEventListener("click", function (event) {
    event.preventDefault();
    kirimPesan();
  });

  // Fungsi mengirim pesan
  function kirimPesan() {
    var nama = document.querySelector('input[placeholder="nama"]').value;
    var email = document.querySelector('input[placeholder="email"]').value;
    var nohp = document.querySelector('input[placeholder="no hp"]').value;

    // Validasi
    if (nama === "" || email === "" || nohp === "") {
      alert("Harap isi semua kolom");
    } else {
      alert(
        "Pesan anda telah terkirim:\nNama: " +
          nama +
          "\nEmail: " +
          email +
          "\nNo HP: " +
          nohp
      );

      // Hapus input pesan terkirim
      document.querySelector('input[placeholder="nama"]').value = "";
      document.querySelector('input[placeholder="email"]').value = "";
      document.querySelector('input[placeholder="no hp"]').value = "";
    }
  }
});
