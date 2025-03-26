let data; //deklarasi variable data
let daftar_tamu = document.getElementById('daftar_tamu'); //ambil element daftar tamu

// panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value; // ambil value dari input
    console.log(nama);
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);

    // cek apakah local storage nya kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; //buat array kosong
    } else {
        data = JSON.parse(localStorage.getItem('ls_bukutamu')); // ambil data dari local storage
    }

    data.push({nama_pengunjung: nama, perlu: keperluan}); 
    // masukan value input nama ke dalam array

    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); //simpan ke local storage

    //kosongkan isi elemen daftar_tamu
    daftar_tamu.innerHTML= '';
    //panggil fungsi tampil
    tampil();
}

function tampil(){
    // console.log("tes")
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    data.forEach( (item) => {
        daftar_tamu.innerHTML += ` <li>
            ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
}