/*const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const username = [];
const Password = [];

const { Pool } = require('pg'); 
const pool = 
new Pool({ user: 'your_username', 
user: "postgres",
host: "localhost",
database: "postgres",
password: "l1234",
port: 5433,
});

 
// Now you can use the pool to execute queries 
pool.query('SELECT * FROM students', (err, result) => 
{ if (err) { console.error('Error executing query:', err); } 
else { console.log('Query result:', result.rows); } });

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "admin.html"));
})

app.post('/login', (req, res) => {
    var User = req.body.username;
    var Userpassword = req.body.password;
 
    if (User && Userpassword) {
     pool.query("SELECT * FROM students WHERE student_id = $1 AND student_password = $2", [User, Userpassword], (error, results) => {
         if (error) {
           console.error('Error executing query:', error);
           res.status(500).send('Internal Server Error');
           return;
         }
         // users = [{username:User , password: Userpassword}];
         console.log('Number of records found:', results.rows.length);
 
         if (results.rows.length > 0) {
             username.push(User);
             Password.push(Userpassword);
 
              console.log(username);
              console.log(Password);
 
             res.sendFile(path.join(intialPath, "drpaje.html"));
             } else {
                 res.sendFile(path.join(intialPath, "admin.html"));
                  }
       });
     }
    });

    app.post('/Register', (req, res) => {
        var IDNumber = req.body.idunmber;
        var Username = req.body.username;
        var Email = req.body.Email;
        var Phone = req.body.Phone;
        var password = req.body.password;

        username.push(Username);
        Password.push(password);
    
        pool.query("INSERT INTO students (student_id,student_name ,student_email,student_phone, student_password) VALUES ($1,$2,$3,$4,$5)",
         [IDNumber,Username,Email,Phone,password]);
            res.sendFile(path.join(intialPath, "drpaje.html"));
         
         
        });


        app.post('/book', (req, res) => {
            var dateBook = req.body.dateBook;
            var hourOption = req.body.hourOption;
            console.log(dateBook);
            console.log(hourOption);
    
            
            pool.query("INSERT INTO booking (bookdate , bookhour) VALUES ($1,$2)",
             [dateBook,hourOption]);

                res.sendFile(path.join(intialPath,"admin.html"));
                
             
             
            });



app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')


});
*/