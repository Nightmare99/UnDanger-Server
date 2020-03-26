import express from 'express';
import body_parser from 'body-parser'
import multer from 'multer';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, req.headers.username + '-' + file.fieldname + '.wav');
    }
  });
var upload = multer({ dest: 'uploads/', storage: storage });

var app = express();
app.use(express.json());
app.use(body_parser.urlencoded({extended: false}))

app.get('/test', (req, res) => {
    res.write("Server status: running :)");
    res.end();
});

app.post('/data', (req, res) => {
    console.log(req.body);
    var response = {  
        first_name: 'test',  
        last_name: 'data'  
    };  
    res.format({  
        'application/json': function(){  
          res.send(JSON.stringify(response));  
        }
    });  //res.send(JSON.stringify(response));
});

app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log('File upload triggered.');
    const file = req.file;
    console.log(req.headers.username);
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
        console.log('File upload success.');
        res.send(JSON.stringify({message: "Success"}));
});

app.listen(8080);