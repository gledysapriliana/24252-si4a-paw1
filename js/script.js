document.getElementsByTagName('body')[0].style.
backgroundColor = 'grey';

//variabel
let nama = "Ahmad";
let umur = 20;

document.getElementById('nama').innerHTML = "Nama Saya: " + nama;
document.getElementById('umur').innerHTML = `Umur: ${umur}`;

let mahasiswa = [
    "Upin", "Ipin", "Opet", "Ijat", "Mail"
];
mahasiswa.forEach((mhs) => { 
    document.getElementById('mahasiswa').innerHTML += `<li> ${mhs} </li>`;
} )

let nilai = [
    {nama: "Upin", nilai: 80},
    {nama: "Ipin", nilai: 70},
    {nama: "Opet", nilai: 90},
    {nama: "Ijat", nilai: 85},
    {nama: "Mail", nilai: 75}
];

nilai.forEach((data) => {
    document.getElementById('nilai').innerHTML += `<tr>
    <td>${data.nama}</td>
    <td>${data.nilai}</td></tr>`
});

fetch("https://dummyjson.com/quotes")
.then(res => res.json())
.then(data => {
    console.log(data.quotes);
    let quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = "";

    data.quotes.forEach( (q) => { 
    document.getElementById('quotes').innerHTML += `
    <div class = "col-lg-4 col-md-6 col-sm-12 mt-4">
        <div class = "card h-100 shadow-sm">
            <div class = "card-body">
                <p class = "card-text"> "${q.quote}" </p>
                <h6 class = "card-subtitle textmuted text-end"> -${q.author} </h6>
            </div>
        </div>
    </div>`;
    });
});