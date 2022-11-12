var Fs=require('fs');
var http=require('http');
var nahid_server=http.createServer(function (req,res) {

    if(req.url=="/"){
        let mydata= Fs.readFileSync('Home.html','utf8');
        res.end(mydata);
    }
    else if(req.url=="/Profile"){
        let mydata= Fs.readFileSync('Profile.html','utf8');
        res.end(mydata);

    }
    else if(req.url=="/Download"){

        let mydata= Fs.readFileSync('Download.html','utf8');
        res.end(mydata);
    }

    else if(req.url=="/Resources"){
        let mydata= Fs.readFileSync('Resources.html','utf8');
        res.end(mydata);
    }

});
nahid_server.listen(12448);
console.log( "MY Server Run Successfully");
