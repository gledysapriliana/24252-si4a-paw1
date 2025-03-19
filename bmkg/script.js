fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then(res => res.json() ) //untuk mengkonfrensi
.then(data => {
    console.log(data);
    console.log(data.Infogempa.gempa.Wilayah);
    console.log(data.Infogempa.gempa.Magnitude);
    console.log(data.Infogempa.gempa.Tanggal);
    console.log(data.Infogempa.gempa.Jam);
    console.log(data.Infogempa.gempa.Potensi); // hanya tampil pada consule
    document.getElementById("gempabumi").innerHTML = 
    `<div class="col-lg-8 mt-5">
        <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p>Magnitude: ${data.Infogempa.gempa.Magnitude}</p>
        <p>Tanggal: ${data.Infogempa.gempa.Tanggal}</p>
        <p>Jam: ${data.Infogempa.gempa.Jam}</p>
        <p>Potensi: ${data.Infogempa.gempa.Potensi}</p>
        <p>Kedalaman: ${data.Infogempa.gempa.Kedalaman}</p>
    </div>
    <div class="col-lg-4 mt-5">
        <img class="w-75" src= "https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}"/>
    </div>`;
})

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach( (list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML += 
        `<div class="col-lg-4 mt-5">
        <div class="border border-black border-3 rounded-3 p-2" >
            <p>Wilayah: ${list.Wilayah}</p>
            <p>Waktu: ${list.Tanggal} ${list.jam}</p>
            <p>Magnitude: ${list.Magnitude}</p>
            <p>Kedalaman: ${list.Kedalaman}</p>
            <p>Potensi: ${list.Potensi}</p>       
        </div>
        </div>
        `;
    })
})