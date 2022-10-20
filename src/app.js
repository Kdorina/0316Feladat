var calcBtn = document.querySelector('#calc');
var eredmeny = document.querySelector("#eredmeny");
calcBtn === null || calcBtn === void 0 ? void 0 : calcBtn.addEventListener('click', function () {
    var aOldal = document.querySelector('#aOldal');
    var bOldal = document.querySelector('#bOldal');
    var cOldal = document.querySelector('#cOldal');
    var dOldal = document.querySelector('#dOldal');
    var anum = Number(aOldal.value);
    var bnum = Number(bOldal.value);
    var cnum = Number(cOldal.value);
    var dnum = Number(dOldal.value);
    var area = szamitTerulet(anum, bnum, cnum, dnum);
    eredmeny.textContent = "Terület: " + String(area);
    aOldal.value = "";
    bOldal.value = "";
    cOldal.value = "";
    dOldal.value = "";
    alert(area);
});
function szamitTerulet(aOldal, bOldal, cOldal, dOldal) {
    return (aOldal + cOldal) / (4 * (aOldal - cOldal))
        * Math.sqrt((aOldal + bOldal - cOldal + dOldal)
            * (aOldal - bOldal - cOldal + dOldal)
            * (aOldal + bOldal - cOldal - dOldal)
            * (-aOldal + bOldal + cOldal + dOldal));
}
