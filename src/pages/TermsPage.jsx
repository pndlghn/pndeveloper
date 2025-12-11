import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle, CheckCircle2 } from "lucide-react";

// Jangan lupa import Footer jika sudah ada
// import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden border-b border-white/10">
        {/* Background Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <FileText className="text-blue-500" size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg font-text">
            Syarat dan Ketentuan Layanan pndeveloper
          </p>
          <div className="mt-6 text-xs font-mono text-gray-500 uppercase tracking-widest border border-white/10 inline-block px-4 py-1 rounded-full">
            Terakhir Diperbarui: Desember 2025
          </div>
        </motion.div>
      </section>

      {/* --- CONTENT DOCUMENT --- */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Paper Effect Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Top Decoration Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600"></div>

            <div className="space-y-12 text-gray-300 font-text leading-relaxed text-sm md:text-base">
              {/* PASAL 1 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">1.</span> Lingkup Pengerjaan
                  (Scope of Work)
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Pengerjaan website akan dilakukan sesuai dengan Paket yang
                    dipilih klien (Basic/Standard/Premium) atau kesepakatan
                    tertulis lainnya.
                  </li>
                  <li>
                    Website dibangun menggunakan platform WordPress (.org)
                    self-hosted dengan bantuan page builder Elementor untuk
                    memudahkan pengelolaan ke depannya.
                  </li>
                  <li>
                    Permintaan fitur tambahan di luar paket yang telah
                    disepakati akan dikenakan biaya tambahan (Add-on Fee) yang
                    besarnya ditentukan berdasarkan tingkat kesulitan.
                  </li>
                  <li>
                    Kami berhak menolak permintaan pengerjaan yang melanggar
                    hukum, berbau SARA, perjudian, atau pornografi.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 2 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">2.</span> Sistem Pembayaran
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Down Payment (DP) yang telah dibayarkan tidak dapat
                    dikembalikan (non-refundable) jika proses pengerjaan telah
                    dimulai atau jika pembatalan dilakukan sepihak oleh klien.
                  </li>
                  <li>
                    <strong className="text-white">Pelunasan:</strong> Sisa
                    pembayaran 50% wajib dilunasi setelah website selesai
                    dikerjakan (tahap preview) dan sebelum akses penuh (username
                    & password administrator/cPanel) diserahkan kepada klien.
                  </li>
                  <li>
                    Jika pelunasan tidak dilakukan dalam waktu 7 hari setelah
                    website dinyatakan selesai, kami berhak menonaktifkan
                    website sementara (mode Maintenance) hingga pembayaran
                    diselesaikan.
                  </li>
                  <li>
                    Pembayaran dilakukan melalui transfer bank ke rekening yang
                    tertera pada Invoice (Tagihan) resmi yang kami kirimkan.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 3 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">3.</span> Materi & Konten
                  Website
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Materi website berupa teks, logo, dan gambar produk/profil
                    adalah tanggung jawab klien.
                  </li>
                  <li>
                    Keterlambatan pengiriman materi oleh klien akan berdampak
                    pada mundurnya estimasi waktu penyelesaian proyek.
                  </li>
                  <li>
                    Jika klien tidak memiliki gambar/foto, kami akan menggunakan
                    gambar Stock Free License (bebas hak cipta) sebagai
                    placeholder.
                  </li>
                  <li>
                    Untuk penulisan artikel/konten SEO, jika tidak termasuk
                    dalam paket, maka akan dikenakan biaya jasa Content Writing
                    terpisah.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 4 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">4.</span> Kebijakan Revisi
                  (Penting)
                </h2>
                <div className="bg-blue-900/10 border border-blue-500/20 p-5 rounded-xl mb-4">
                  <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                    <li>
                      Jumlah jatah revisi (gratis) disesuaikan dengan paket yang
                      diambil (misal: 1x, 2x, atau 3x).
                    </li>
                    <li>
                      <strong className="text-white">Definisi Revisi:</strong>{" "}
                      Perubahan minor seperti perbaikan kesalahan penulisan
                      (typo), penggantian gambar, atau penyesuaian warna.
                    </li>
                    <li>
                      <strong className="text-white">Bukan Revisi:</strong>{" "}
                      Merombak total desain/layout, mengganti tema/template
                      utama, atau menambah halaman/fitur baru. Hal ini akan
                      dihitung sebagai proyek baru atau dikenakan biaya
                      tambahan.
                    </li>
                  </ul>
                </div>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Revisi dilakukan dalam satu sesi pengajuan (dikumpulkan
                    dalam satu dokumen/list) untuk efisiensi waktu.
                  </li>
                  <li>
                    Klien memiliki waktu maksimal 3 (tiga) hari kerja setelah
                    tahap preview untuk mengajukan daftar revisi. Jika melewati
                    batas waktu tersebut tanpa kabar, website dianggap telah
                    disetujui.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 5 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">5.</span> Waktu Pengerjaan
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Waktu pengerjaan dihitung sejak DP diterima DAN materi
                    lengkap diterima dari klien.
                  </li>
                  <li>
                    Estimasi waktu pengerjaan normal adalah 5-14 hari kerja
                    (tergantung kerumitan paket). Hari Minggu/Libur Nasional
                    tidak dihitung sebagai hari kerja.
                  </li>
                  <li>
                    Komunikasi terkait proyek dilakukan melalui saluran yang
                    disepakati (Email/WhatsApp) pada hari dan jam kerja kami,
                    yaitu Senin - Minggu, pukul 09.00 - 17.00 WIB.
                  </li>
                  <li>
                    Respons di luar jam kerja atau pada hari libur mungkin akan
                    lebih lambat (slow response).
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 6 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">6.</span> Maintenance &
                  Garansi
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Masa Free Maintenance berlaku sesuai paket (15/30/45 hari)
                    terhitung sejak website online.
                  </li>
                  <li>
                    <strong className="text-white">Lingkup Maintenance:</strong>{" "}
                    Perbaikan error/bug teknis yang muncul, update plugin/tema,
                    dan memastikan website bisa diakses.
                  </li>
                  <li>
                    Maintenance tidak mencakup penambahan konten rutin (posting
                    artikel/produk) atau perubahan desain, kecuali ada
                    kesepakatan Retainer (kontrak bulanan) terpisah.
                  </li>
                  <li>
                    Kami tidak bertanggung jawab atas error yang terjadi akibat
                    klien mengutak-atik kode (coding) atau menginstal plugin
                    sembarangan setelah akses admin diserahkan.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 7 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">7.</span> Domain & Hosting
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Jika paket sudah termasuk Hosting & Domain selama 1 tahun,
                    maka perpanjangan di tahun berikutnya adalah tanggung jawab
                    klien (biaya sesuai harga provider hosting saat itu).
                  </li>
                  <li>
                    Klien akan diingatkan (H-30) sebelum masa aktif
                    domain/hosting habis. Kami tidak bertanggung jawab atas
                    hilangnya data website jika klien gagal melakukan
                    perpanjangan tepat waktu.
                  </li>
                  <li>
                    Domain akan didaftarkan atas nama klien (atau data yang
                    diberikan klien). Klien memiliki hak kepemilikan penuh atas
                    domain tersebut setelah pembayaran lunas.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 8 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">8.</span> Hak Cipta &
                  Kepemilikan
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Setelah pelunasan pembayaran 100%, hak kepemilikan penuh
                    atas desain final dan konten website beralih kepada klien.
                  </li>
                  <li>
                    Klien menjamin bahwa semua materi (teks, gambar, logo) yang
                    diberikan kepada kami adalah milik klien atau klien memiliki
                    lisensi penggunaan yang sah, dan tidak melanggar hak cipta
                    pihak ketiga manapun. Kami tidak bertanggung jawab atas
                    tuntutan hukum akibat pelanggaran hak cipta pada materi yang
                    disediakan klien.
                  </li>
                  <li>
                    Kami (PnDeveloper) berhak mencantumkan hasil karya website
                    tersebut dalam portofolio kami dan menempatkan tautan kredit
                    kecil (misal: "Designed by PnDeveloper") di bagian footer
                    website klien, kecuali ada kesepakatan tertulis untuk
                    menghapusnya (mungkin dikenakan biaya white-label).
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 9 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">9.</span> Lisensi Tema &
                  Plugin
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Jika paket website menggunakan Tema atau Plugin Premium
                    berlisensi, biaya lisensi awal sudah termasuk dalam paket
                    (untuk 1 tahun pertama, kecuali disebutkan lain).
                  </li>
                  <li>
                    Perpanjangan lisensi plugin/tema premium di tahun-tahun
                    berikutnya merupakan tanggung jawab klien untuk memastikan
                    fitur dan keamanan tetap berjalan optimal.
                  </li>
                  <li>
                    Kami akan menginformasikan plugin mana saja yang membutuhkan
                    perpanjangan lisensi.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 10 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">10.</span> Batasan Tanggung
                  Jawab
                </h2>
                <div className="flex gap-4 items-start bg-red-900/10 border border-red-500/20 p-5 rounded-xl">
                  <AlertCircle className="text-red-400 shrink-0 mt-1" />
                  <div className="space-y-3">
                    <p>
                      Kami berusaha sebaik mungkin membuat website yang aman dan
                      stabil. Namun, kami tidak bertanggung jawab atas kerugian
                      langsung maupun tidak langsung (termasuk kehilangan
                      keuntungan bisnis/pendapatan) yang dialami klien akibat:
                    </p>
                    <ul className="list-disc pl-5 marker:text-red-400">
                      <li>
                        Website down karena masalah pada server hosting pihak
                        ketiga.
                      </li>
                      <li>
                        Website terkena peretasan (hack/malware) setelah akses
                        admin diserahkan, terutama yang disebabkan oleh
                        penggunaan password yang lemah oleh klien atau instalasi
                        plugin yang tidak aman.
                      </li>
                      <li>
                        Perubahan algoritma mesin pencari (Google) yang
                        mempengaruhi peringkat website.
                      </li>
                    </ul>
                    <p>
                      Tanggung jawab maksimal kami kepada klien dalam kondisi
                      apapun terbatas pada total nilai proyek yang telah
                      dibayarkan klien kepada kami.
                    </p>
                  </div>
                </div>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 11 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">11.</span> Keadaan Kahar
                </h2>
                <p>
                  Kami dibebaskan dari tanggung jawab atas keterlambatan atau
                  kegagalan dalam memenuhi kewajiban jika disebabkan oleh
                  kejadian di luar kendali kami (Force Majeure), termasuk namun
                  tidak terbatas pada: bencana alam, kebakaran, pemadaman
                  listrik/internet berkepanjangan, huru-hara, atau kebijakan
                  pemerintah.
                </p>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 12 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">12.</span> Pembatalan & Proyek
                  Mangkrak
                </h2>
                <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
                  <li>
                    Jika klien memutuskan untuk membatalkan proyek secara
                    sepihak setelah pengerjaan dimulai, maka DP yang telah
                    dibayarkan tidak dapat dikembalikan. Klien juga tidak berhak
                    atas file atau desain yang telah dikerjakan setengah jalan.
                  </li>
                  <li>
                    Jika klien tidak memberikan respons, materi yang dibutuhkan,
                    atau feedback dalam kurun waktu 30 (tiga puluh) hari
                    kalender berturut-turut tanpa pemberitahuan sebelumnya, kami
                    berhak menganggap proyek tersebut batal/hangus. Dalam
                    kondisi ini, pembayaran yang sudah masuk tidak dapat
                    dikembalikan dan kami tidak berkewajiban melanjutkan proyek
                    tersebut di kemudian hari.
                  </li>
                </ul>
              </article>

              <hr className="border-white/5" />

              {/* PASAL 13 */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">13.</span> Hukum yang Berlaku
                  & Penyelesaian Sengketa
                </h2>
                <div className="flex gap-4 items-start">
                  <Shield className="text-blue-500 shrink-0 mt-1" />
                  <ul className="space-y-2 list-disc pl-5 marker:text-blue-500">
                    <li>
                      Syarat dan Ketentuan ini diatur berdasarkan hukum yang
                      berlaku di Republik Indonesia.
                    </li>
                    <li>
                      Segala perselisihan yang timbul akibat pelaksanaan
                      kerjasama ini akan diselesaikan terlebih dahulu melalui
                      musyawarah untuk mufakat.
                    </li>
                    <li>
                      Apabila tidak tercapai kesepakatan, maka kedua belah pihak
                      sepakat untuk menyelesaikannya melalui jalur hukum di
                      Pengadilan Negeri wilayah Garut.
                    </li>
                  </ul>
                </div>
              </article>

              {/* PENUTUP */}
              <div className="mt-12 p-6 bg-linear-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 rounded-r-xl">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-blue-400" />
                  PENUTUP/PERSETUJUAN
                </h3>
                <p className="text-gray-300 italic">
                  "Dengan melakukan pembayaran Down Payment (DP) kepada
                  PnDeveloper, klien dianggap telah membaca, memahami, dan
                  menyetujui seluruh butir Syarat dan Ketentuan (Terms of
                  Service) yang tertulis di atas tanpa paksaan dari pihak
                  manapun."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} pndeveloper. All legal rights
            reserved.
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default TermsPage;
