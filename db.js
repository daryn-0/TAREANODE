const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bdnode'
});
connection.connect((err)=>{
    if(err){
        console.groupCollapsed("Error de conexion a MYSQL: ", err);
        retu
    }else{
        console.log("Conectado a bd MYSQL")
    }
});