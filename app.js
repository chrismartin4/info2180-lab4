window.onload = function() {
    var searchbutton = document.getElementById("btn");
    var url = "superheroes.php";
    searchbutton.addEventListener('click', function(i) {
        i.preventDefault();
        var httprequest = new XMLHttpRequest();
        httprequest.onreadystatechange = function() {
            if (httprequest.readyState == XMLHttpRequest.DONE) {
                if (httprequest.status == 200) {
                    var superhero = httprequest.responseText;
                    alert(superhero);
                } else {
                    alert("Error");
                }
            }
        }
        httprequest.open("GET", url, true);
        httprequest.send();
    });
}