import foto from "../foto.jpeg";

export default function Hero(){
    return(
      
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-500 font-bold">CV ONLINE</h1>
          <h1 className="text-3xl"> Bella Nurullita</h1>
        <Profile/>
          <p>
          Saya adalah mahasiswa semester 5 di Universitas Ma`soem jurusan Komputerisasi
Akuntansi dengan semangat tinggi untuk terlibat dalam
bidang akuntansi dan teknologi. Memiliki pemahaman
mendalam tentang keuangan, pencatatan transaksi, dan
pengelolaan sistem akuntansi.
          </p>
        </div>
    );
}

function Profile(){
    return<img src={foto.src} alt="bella" className="fotoku"/>
}