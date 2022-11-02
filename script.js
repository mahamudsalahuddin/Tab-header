function openCity(cityname, elmnt, color){
    let tabcontent = document.querySelectorAll(".tabcontent");
    let arr = Array.from(tabcontent)
    arr.map((item)=>{
        item.style.display = "none";
    });
    let tablinks = document.querySelectorAll(".tablinks");
    let arr2 = Array.from(tablinks);
    arr2.map((item)=>{
        item.style.display = "";
    });
    document.getElementById(cityname).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();