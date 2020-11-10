window.onload = function () {
    var searchbutton = document.getElementById("btn");
    searchbutton.addEventListener('click', function (i) {
        i.preventDefault();
        var search = document.getElementById("superheroes").value;
        var url = "superheroes.php?searchquery=" + search;
        var httprequest = new XMLHttpRequest();
        httprequest.onreadystatechange = function () {
            if (httprequest.readyState == XMLHttpRequest.DONE) {
                if (httprequest.status == 200) {
                    var superhero = httprequest.responseText;
                    var result = document.getElementById("result");
                    result.innerHTML = superhero;
                } else {
                    alert("Error");
                }
            }
        }
        httprequest.open("GET", url, true);
        httprequest.send();
    });
}