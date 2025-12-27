function About() {
  return (
    <div className="text-center mt-5">
      <h2 className="text-primary mb-4">👩‍💻 Kelompok 6 (FunCalc) 🎉</h2>
      
      <div className="row justify-content-center">
        {/* Anggota 1 */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <h4 className="text-pink">Tiwi Arum Setyaningsih 🫣</h4>
            <p>NIM: 103012330171</p>
            <p>Spesialisasi: Membuat Web Calculator & Deploy ⌨️⚡</p>
          </div>
        </div>

        {/* Anggota 2 */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <h4 className="text-warning">Danish Felicitia 😅</h4>
            <p>NIM: 103012300246</p>
            <p>Spesialisasi: Analis tujuan jargon-jargon umum pada vercel 🔍📑</p>
          </div>
        </div>

        {/* Anggota 3 */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <h4 className="text-info">Gisela Sesaria Kusthika Putri 🤔</h4>
            <p>NIM: 103012300331</p>
            <p>Spesialisasi: Analisis layanan Paas dan Iaas 🔍👩‍💻</p>
          </div>
        </div>
      </div>

      <p className="mt-4">Kami tim santai... tapi kelar 😁💻</p>
      <p>Fun fact: Kalau tombol calculator error, kami panik bareng 😂</p>
    </div>
  );
}

export default About;
