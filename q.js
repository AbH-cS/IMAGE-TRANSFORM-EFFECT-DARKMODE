let icon = document.getElementById("icon");
let img1 = document.getElementById("img1");
icon.onclick = function () {
    document.body.classList.toggle("darkTheme");
    if (document.body.className == "darkTheme") {
        icon.src = "dark theme icon/sun.png"
        img1.classList.add("darkimg")
        img1.classList.remove("img")
    }
    else {
        icon.src = "dark theme icon/moon.png"
        img1.classList.remove("darkimg")
        img1.classList.add("img")
    }
}