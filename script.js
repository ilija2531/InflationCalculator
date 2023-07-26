function kalkulatorInflacija(){

        let stapkaInflacija = document.querySelector('#stapka');
        let pari = document.querySelector('#pari');
        let godini = document.querySelector('#godini');
        
       
       //pretvoranje na promenlivite od string vo float

        stapkaInflacija = parseFloat(stapkaInflacija.value);
        pari = parseFloat(pari.value);
        godini = parseFloat(godini.value);

        //formula za presmetka na inflacija
        let vrednost = pari + (pari * (stapkaInflacija / 100)) ;
        
        for(let i = 1; i<godini; i++){

            vrednost += vrednost * (stapkaInflacija / 100);
        }

        vrednost = vrednost.toFixed(2);

        let tekst = document.createElement('div');
        tekst.className = 'tekst'
        tekst.innerText = `${pari} evra denes kje vredat ${vrednost} evra za ${godini} godini.`;

        document.querySelector('.container').appendChild(tekst);
        

}