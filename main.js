express=require('express');
fs=require('fs');
app=express();
bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

module=require('./module');




app.get("/",function(req,resp){

resp.sendFile("calculator.html",{root:__dirname});
console.log("form is shown");
});

app.post("/calculate",function(req,resp){

switch(req.body.operate){

case 'add':
   result= module.addition(req.body.num1,req.body.num2);
   resp.send("Addition="+result);
   break;
   
   case 'sub':
   result= module.subtract(req.body.num1,req.body.num2);
   resp.send("subtract="+result);
   break;
   case 'mul':
        result=module.multiply(req.body.num1,req.body.num2);
        resp.send("Multiplication ="+result);
        break;
 case 'div':
        if(req.body.num2==0)resp.send("Invalid parameter");
        else
        {
            result=module.division(req.body.num1,req.body.num2);
            resp.send("Division ="+result);
           
        }  break;
    
   
        default:
            resp.send("Bad request");
            break;
    

}

});





app.listen(1200,function(){

    console.log("server is running at port 1200");
});