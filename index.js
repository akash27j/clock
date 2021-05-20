setInterval(() => {
    d = new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    
    hro = 30*ht + mt/2;
    mro = 6*mt;
    sro = 6*st;

    hr.style.transform = `rotate(${hro}deg)`;
    min.style.transform = `rotate(${mro}deg)`;
    sec.style.transform = `rotate(${sro}deg)`;
}, 1000);