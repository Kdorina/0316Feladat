/*
* File: app.ts
* Author: Kovács Dorina
* Copyright: 2022, Kovács Dorina
* Group: Szoft II/N
* Date: 2022-10-20
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/ 

const calcBtn = document.querySelector('#calc');
const eredmeny = document.querySelector("#eredmeny") as HTMLInputElement;

calcBtn?.addEventListener('click', () => {
const aOldal = document.querySelector('#aOldal') as HTMLInputElement;
const bOldal = document.querySelector('#bOldal') as HTMLInputElement;
const cOldal = document.querySelector('#cOldal') as HTMLInputElement;
const dOldal = document.querySelector('#dOldal') as HTMLInputElement;

    let anum = Number(aOldal.value);
    let bnum = Number(bOldal.value);
    let cnum = Number(cOldal.value);
    let dnum = Number(dOldal.value);

    let area = szamitTerulet(anum,bnum,cnum,dnum);
    eredmeny.textContent = "Terület: " + String(area);
    aOldal.value="";
    bOldal.value="";
    cOldal.value="";
    dOldal.value="";
   // alert(area);
});

function szamitTerulet
    (
    aOldal:number, 
    bOldal:number, 
    cOldal:number, 
    dOldal:number
    ):number
    {
        return (aOldal+cOldal)/(4*(aOldal-cOldal))
        *Math.sqrt((aOldal+bOldal-cOldal+dOldal)
        *(aOldal-bOldal-cOldal+dOldal)
        *(aOldal+bOldal-cOldal-dOldal)
        *(-aOldal+bOldal+cOldal+dOldal));

        
    }