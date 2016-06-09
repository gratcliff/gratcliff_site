var express = require('express');
var path = require ('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
var mailOptions = {};


var smtpConfig = {
   service: "Gmail",
   host: 'smtp.gmail.com',
   port: 465,
   auth: {
       user: "gaberatcliff@gmail.com",
       pass: "******"
   },
   tls:{
        secureProtocol: "TLSv1_method"
    }, 
    debug: true
};


// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport(smtpConfig);
app.post('/email', function(req, res){
	// setup e-mail data with unicode symbols 
		var mailOptions = {
		    from: req.body.name +  " <" + req.body.email +">", // sender address 
		    to: 'gaberatcliff@gmail.com', // list of receivers 
		    subject: 'Message From Website!', // Subject line 
		    text: req.body.content
		  
		};
		console.log(mailOptions);
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);
		});

	})
 



app.set('port', (process.env.PORT || 2000));
app.set('/', function (req, res){
	res.send("<h1> Hello World </h1>");
})
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});