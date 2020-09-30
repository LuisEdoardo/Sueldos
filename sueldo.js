var sueldo = 100;
console.log(`El sueldo es de = ${sueldo}`)

 while (sueldo < 1500){
    if (sueldo <= 0) {
        console.log('No es un sueldo valido')
    }  else if (sueldo >= 0 && sueldo <= 1000) {
        sueldo += (sueldo * .15);
        console.log(`Nuevo sueldo = ${sueldo}`);
    } else if (sueldo >= 1001 && sueldo <= 1200) {
        sueldo += (sueldo * .12);
        console.log(`Nuevo sueldo = ${sueldo}`);
    } else if (sueldo >= 1201 && sueldo <= 1400) {
        sueldo += (sueldo * .10);
        console.log(`Nuevo sueldo = ${sueldo}`);
    } else if (sueldo >= 1401 && sueldo <= 1500) {
        sueldo += (sueldo * .08);
        console.log(`Nuevo sueldo = ${sueldo}`);
    } else if (sueldo > 1500) {
        sueldo += (sueldo * .05);
        console.log(`Nuevo sueldo = ${sueldo}`);
    }
 }