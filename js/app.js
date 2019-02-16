function myFunction() {

    document.getElementById("poplinre_img").onclick = function () {
        var clicks_counter = document.getElementById("poplinre_counter").innerText;
        document.getElementById('poplinre_counter').textContent = parseInt(clicks_counter) + 1;
    };

}