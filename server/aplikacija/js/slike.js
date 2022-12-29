window.addEventListener("load", async () => {
    let slikaUpload = document.getElementById("slika-upload");
    let povratnaInfo = document.getElementById("povratna-info");
    let btnUpload = document.getElementById("btnUpload");

    slikaUpload.addEventListener("change", function () {
        if (slikaUpload.files.length > 0) {
            const velicinaFile = slikaUpload.files.item(0).size;
            const velicinaKB = velicinaFile / 1024;
            if (velicinaKB >= 500) {
                btnUpload.disabled = true;
                povratnaInfo.innerHTML = "File je prevelik. Mora biti do 500KB";
            } else {
                btnUpload.disabled = false;
                povratnaInfo.innerHTML = "Uspjesan upload slike!";
            }
        }
    });
})