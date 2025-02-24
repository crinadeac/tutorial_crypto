// ora 1:12
//creare http server utilizand modulul http
//includem modulul http
const http = require('http');
//cream obiectul server care are o functie callback care ia 2 parametri
//obiectul request - ce anume cere clientul de la noi si obiectul response (ex cautare pe google si raspuns)
const server = http.createServer((req,res)=>{
    //res.write('Hello world from nodejs');
    //res.end();
    if(req.url === '/'){
        res.write('Hello world from nodejs');
        //urmatoarea linie trimite raspunsul inapoi catre client:
        res.end();
    }else{
        res.write('using some other domain');
        res.end();
    }

});
//indicam portul 3000 de pe care ascultam raspunsul
server.listen('3000');
//deschidem Chrome si tastam localhost:3000 si putem vedea mesajul Hello world from nodejs
//adica raspunsul serverului pe portul indicat
// Ctrl+C pt a opri serverul
//acum daca scriem in Chrome http://localhost:3000/banana, vedem raspunsul..using other domain

