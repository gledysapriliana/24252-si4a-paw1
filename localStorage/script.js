let data; //deklarasi variable data
let daftar_tamu = document.getElementById('daftar_tamu'); //ambil element daftar tamu

// panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value; // ambil value dari input
    console.log(nama);
    let keperluan = document.getElementById('kp').value;
    console.log(keperluan);
    let jk = document.getElementById('jk').value;
    console.log(jk);

    // cek apakah local storage nya kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; //buat array kosong
    } else {
        data = JSON.parse(localStorage.getItem('ls_bukutamu')); // ambil data dari local storage
    }

    data.push({nama_pengunjung: nama, perlu: keperluan, jk: jk}); 
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
    //cek apakah local storage kosong

    console.log(data.length); //tampilkan jumlah data di console

    document.getElementById('total_tamu').innerHTML = `<div class='text-center'> Total tamu <br> ${data.length} </div>`;

    let total_laki = 0;
    let total_perempuan = 0;
    let total_membaca = 0;
    let total_browsing = 0;
    let total_pinjambuku = 0;

    data.forEach((item) => {
        if(item.jk == 'Laki-laki'){
            total_laki++;
        }else if(item.jk ='Perempuan'){
            total_perempuan++;
        }

        if(item.kp == 'm'){
            total_membaca++;
        }else if(item.kp ='b'){
            total_browsing++;
        }else if(item.kp = 'p'){
            total_pinjambuku++;
        }


        daftar_tamu.innerHTML += 
        `<div class="col-lg-2 mt-3">
            <div class="card text-white text-center ${item.jk === 'Laki-laki' ? 'bg-success' : 'bg-warning'}">
                <div class="card-body">
                <h5> ${item.nama_pengunjung} </h5> 
                ${item.perlu} <br /> 
                ${item.jk} 
                </div>
            </div>
        </div>`
    })

    document.getElementById('tamu_laki').innerHTML = `<div class='text-center'> Total tamu laki-laki <br /> ${total_laki} </div>`;
    document.getElementById('tamu_perempuan').innerHTML = `<div class='text-center'> Total tamu perempuan  <br /> ${total_perempuan} </div>`;
    document.getElementById('membaca').innerHTML = `<div class='text-center'> Membaca <br /> ${total_membaca} </div>`;
    document.getElementById('browsing').innerHTML = `<div class='text-center'> Browsing <br /> ${total_browsing} </div>`;
    document.getElementById('pinjambuku').innerHTML = `<div class='text-center'> Pinjam Buku <br /> ${total_pinjambuku} </div>`;
}