
function agregaImagen() {
    var URL = document.getElementById('imagenes').value;
    var pie = document.getElementById('pieFoto').value;
    var galeria = document.getElementById('galeriaImagenes');

    if (URL && pie) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');

        img.src = URL;
        img.width = 300;
        img.height = 250;

        p.textContent = pie;

        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);

        // Limpiar los campos
        document.getElementById('imagenes').value = "";
        document.getElementById('pieFoto').value = "";

    } else {
        alert("Por favor, introduce la URL de la imagen y el pie de foto.");
    }
}
