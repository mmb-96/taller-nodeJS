const express = require("express");
const moment = require("moment");
const voca = require("voca");
const app = express();

app.get('/', function(req, res) {
    res.send("Hola, bienvenido al Heding to Codefest")
});

app.get('/saludo', function(req, res) {
    let nombre = req.query.nombre;

    if (nombre) {
        res.send(`Hola ${nombre} bienvenido al Heding to Codefest`);
    } else {
        res.send(`Hola ${nombre} bienvenido al Heding to Codefest`);
    }
    res.send("Hola, bienvenido al Heding to Codefest")
});

app.get('/numdias', function(req, res) {
    if(req.query.fecha && req.query.fecha.length <= 10) {
        const regExFecha = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;

        if(req.query.fecha.match(regExFecha)) {
            const fechaIntroducida = moment(req.query.fecha);
            const fechaActual = moment();
            const dias = fechaIntroducida.diff(fechaActual, 'days');
            if(dias < 0) {
                res.send(`Han transcurrido ${-dias} días desde la fecha introducida`);
            }
            else {
                res.send(`Faltan ${dias} días para la fecha introducida`);
            }
        }
        else {
            res.send('Debes introducir la fecha con el formato yyyy-mm-dd');
        }
        

    }
    else{
        res.send('Debes introducir la fecha con el formato yyyy-mm-dd');
    }

});


app.get('/reverse-word', function(req, res) {
    let nombre = req.query.nombre;

    if ( req.query.nombre.length > 0 ) {
        res.send("El palabra introducido " + nombre + " al reves es " + voca.reverse(nombre));
    } else {
        res.send("El palabra introducido no es valida o esta vacia");
    }
       
});

app.get('/is-lower-case', function(req, res) {
    let nombre = req.query.nombre;

    if (voca.isLowerCase(nombre) && req.query.nombre.length > 0) {
        res.send("La cadena esta en minuscula");
    } else {
        res.send("La cadena no esta en minuscula o no existe palabra");
    }

});

app.listen(3000, function() {
    console.log("taller nodeJS")
})