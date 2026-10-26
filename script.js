// ================================
// DATA PRODUK
// ================================

const produk = {
    "Strawberry Cake": {
        brand: "The Harvest Cakes",
        jenis: "Cake",
        harga: "Rp50.000",
        gambar: "cake.jpg",
        deskripsi: "Cake lembut dengan krim dan stroberi segar.",
        caraPesan: "Tentukan jumlah pesanan, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Tiramisu": {
        brand: "The Harvest Cakes",
        jenis: "Dessert",
        harga: "Rp48.000",
        gambar: "tiraamissu.jpg",
        deskripsi: "Dessert berlapis krim dengan cita rasa kopi dan cokelat.",
        caraPesan: "Tentukan jumlah pesanan, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Brownies": {
        brand: "The Harvest Cakes",
        jenis: "Brownies",
        harga: "Rp80.000",
        gambar: "brownies.jpg",
        deskripsi: "Brownies cokelat dengan tekstur lembut dan rasa cokelat yang kaya.",
        caraPesan: "Tentukan jumlah pesanan, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Banana Pudding": {
        brand: "Magnolia Bakery",
        jenis: "Pudding",
        harga: "Rp50.500",
        gambar: "pudding.jpg",
        deskripsi: "Puding pisang dengan krim lembut dan lapisan biskuit.",
        caraPesan: "Tentukan jumlah pesanan, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Cupcake": {
        brand: "Magnolia Bakery",
        jenis: "Cupcake",
        harga: "Rp448.200 / 7 pcs",
        gambar: "cupcake.jpg",
        deskripsi: "Cupcake dengan topping krim yang lembut dan cantik.",
        caraPesan: "Tentukan jumlah paket, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Red Velvet Cookies": {
        brand: "Magnolia Bakery",
        jenis: "Cookies",
        harga: "Rp200.600 / 6 pcs",
        gambar: "cookies.jpg",
        deskripsi: "Cookies red velvet dengan rasa manis yang nikmat.",
        caraPesan: "Tentukan jumlah paket, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Soufflé Cheesecake": {
        brand: "Paris Baguette",
        jenis: "Cheesecake",
        harga: "Rp71.820 / tiap potong",
        gambar: "DK6A6230.jpg",
        deskripsi: "Cheesecake lembut dengan cita rasa keju yang khas.",
        caraPesan: "Tentukan jumlah potong, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Donut": {
        brand: "Paris Baguette",
        jenis: "Donat",
        harga: "Rp89.820",
        gambar: "donat.jpg",
        deskripsi: "Donat lembut dengan topping manis yang nikmat.",
        caraPesan: "Tentukan jumlah pesanan, kemudian tekan tombol Pesan via WhatsApp."
    },

    "Macarons": {
        brand: "Paris Baguette",
        jenis: "Macarons",
        harga: "Rp307.620 / 6 pcs",
        gambar: "macarons.jpg",
        deskripsi: "Macarons dengan tampilan cantik dan isian krim lembut.",
        caraPesan: "Tentukan jumlah paket, kemudian tekan tombol Pesan via WhatsApp."
    }
};


// ================================
// ELEMEN POP-UP
// ================================

const modal = document.getElementById("modal-detail");
const tombolTutup = document.getElementById("tutup-modal");
const tombolWA = document.getElementById("tombol-wa");


// ================================
// MEMBUKA DETAIL PRODUK
// ================================

document.querySelectorAll(".tombol-detail").forEach(function(tombol) {

    tombol.addEventListener("click", function() {

        // Mengambil nama produk dari tombol
        const nama = tombol.dataset.produk;

        // Mencari data produk
        const item = produk[nama];

        if (!item) {
            alert("Data produk tidak ditemukan: " + nama);
            return;
        }

        // Mengisi informasi produk ke pop-up
        document.getElementById("detail-gambar").src = item.gambar;
        document.getElementById("detail-gambar").alt = nama;

        document.getElementById("detail-brand").textContent = item.brand;
        document.getElementById("detail-nama").textContent = nama;
        document.getElementById("detail-jenis").textContent = item.jenis;
        document.getElementById("detail-harga").textContent = item.harga;
        document.getElementById("detail-deskripsi").textContent = item.deskripsi;
        document.getElementById("detail-cara-pesan").textContent = item.caraPesan;

        // Mengembalikan jumlah pesanan ke 1
        document.getElementById("jumlah-pesanan").value = 1;

        // Menampilkan pop-up
        modal.classList.add("aktif");
    });

});


// ================================
// MENUTUP POP-UP
// ================================

tombolTutup.addEventListener("click", function() {
    modal.classList.remove("aktif");
});


// Menutup pop-up ketika area luar diklik
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("aktif");
    }
});


// Menutup pop-up menggunakan tombol Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("aktif");
    }
});


// ================================
// PESAN MELALUI WHATSAPP
// ================================

// Ganti dengan nomor WhatsApp tujuan.
// Gunakan kode negara 62 tanpa tanda +, spasi, atau strip.

const nomorWhatsApp = "6281234567890";

tombolWA.addEventListener("click", function() {

    const nama = document.getElementById("detail-nama").textContent;
    const item = produk[nama];

    const jumlah = Number(
        document.getElementById("jumlah-pesanan").value
    );

    if (!Number.isInteger(jumlah) || jumlah < 1) {
        alert("Masukkan jumlah pesanan minimal 1.");
        return;
    }

    const pesan =
        "Halo Berrybloom! Saya ingin memesan dessert.\n\n" +
        "Nama produk: " + nama + "\n" +
        "Brand: " + item.brand + "\n" +
        "Jenis makanan: " + item.jenis + "\n" +
        "Harga tercantum: " + item.harga + "\n" +
        "Jumlah pesanan: " + jumlah + "\n\n" +
        "Mohon konfirmasi ketersediaan dan total harga pesanan. Terima kasih!";

    const linkWhatsApp =
        "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesan);

    window.open(linkWhatsApp, "_blank");
});


// ================================
// TAHUN FOOTER OTOMATIS
// ================================

const footer = document.getElementById("teks-footer");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " Berrybloom. All rights reserved.";
}