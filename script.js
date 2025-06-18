const semuaPertanyaan = [
  {
    pertanyaan: "Apa ibu kota Indonesia?",
    pilihan: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    jawaban: "Jakarta"
  },
  {
    pertanyaan: "2 + 2 = ?",
    pilihan: ["2", "3", "4", "5"],
    jawaban: "4"
  },
  {
    pertanyaan: "Warna bendera Indonesia?",
    pilihan: ["Merah Putih", "Merah Biru", "Putih Kuning", "Hijau Merah"],
    jawaban: "Merah Putih"
  },
  {
    pertanyaan: "Gunung tertinggi di Indonesia?",
    pilihan: ["Rinjani", "Semeru", "Kerinci", "Puncak Jaya"],
    jawaban: "Puncak Jaya"
  },
  {
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["Soekarno", "Soeharto", "Jokowi", "Habibie"],
    jawaban: "Soekarno"
  },
  {
    pertanyaan: "Lambang negara Indonesia adalah?",
    pilihan: ["Singa", "Elang", "Garuda", "Rajawali"],
    jawaban: "Garuda"
  },
  {
    pertanyaan: "Apa ibu kota Jawa Barat?",
    pilihan: ["Bandung", "Bekasi", "Bogor", "Depok"],
    jawaban: "Bandung"
  },
  {
    pertanyaan: "Berapa jumlah provinsi di Indonesia (2023)?",
    pilihan: ["32", "34", "38", "40"],
    jawaban: "38"
  },
  {
    pertanyaan: "Bahasa resmi negara Indonesia?",
    pilihan: ["Jawa", "Sunda", "Melayu", "Indonesia"],
    jawaban: "Indonesia"
  },
  {
    pertanyaan: "Apa nama lagu kebangsaan Indonesia?",
    pilihan: ["Indonesia Jaya", "Hari Merdeka", "Indonesia Raya", "Garuda Pancasila"],
    jawaban: "Indonesia Raya"
  }
];

let kuis = [];
let indeks = 0;
let skor = 0;

function acakArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function tampilkanPertanyaan() {
  const data = kuis[indeks];
  document.getElementById("pertanyaan").textContent = data.pertanyaan;

  const pilihanContainer = document.getElementById("pilihan");
  pilihanContainer.innerHTML = "";

  data.pilihan.forEach(pilihan => {
    const btn = document.createElement("button");
    btn.textContent = pilihan;
    btn.onclick = () => cekJawaban(pilihan, btn);
    pilihanContainer.appendChild(btn);
  });
}

function cekJawaban(pilihanUser, tombolKlik) {
  const semuaTombol = document.querySelectorAll("#pilihan button");

  semuaTombol.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === kuis[indeks].jawaban) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else if (btn === tombolKlik) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });

  if (kuis[indeks].jawaban === pilihanUser) {
    skor++;
  }

  indeks++;

  setTimeout(() => {
    if (indeks < kuis.length) {
      tampilkanPertanyaan();
    } else {
      document.getElementById("pertanyaan").textContent = "Kuis selesai!";
      document.getElementById("pilihan").innerHTML = `<p>Nilai akhir: ${skor}/${kuis.length}</p>`;
      document.getElementById("ulangBtn").style.display = "inline-block";
    }

    document.getElementById("skor").textContent = `Skor: ${skor}`;
  }, 500); // jeda setengah detik sebelum lanjut
}

function mulaiKuis() {
  indeks = 0;
  skor = 0;
  kuis = acakArray([...semuaPertanyaan]);
  document.getElementById("skor").textContent = "Skor: 0";
  document.getElementById("mulaiBtn").style.display = "none";
  document.getElementById("ulangBtn").style.display = "none";
  tampilkanPertanyaan();
}

document.getElementById("mulaiBtn").addEventListener("click", mulaiKuis);
document.getElementById("ulangBtn").addEventListener("click", mulaiKuis);
