
var nodemailer = require('nodemailer');

export async function POST(request) {
    const {name,email,number,subject,message} = await request.json();
    const myEmail = process.env.EMAIL;
    const myPass = process.env.PASS;
    try{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: myEmail,
                pass: myPass
            }
        });
    
        var mailOptions = {
            from: `"${name}"<${email}>`,
            to: myEmail,
            subject: subject,
            text: `${name}   ${email}   ${number}
            
            ${message}`,
        };
        try{
            const info = await transporter.sendMail(mailOptions,);
            if (info.response){
                return Response.json({mess:"Message sent Successfully!",info})
            }
        }catch(err){
            return Response.json({mess:"Message not sent Successfully!",err})
        }
    }catch(err){
        return Response.json({mess:"Message not sent Successfully!",err})
    }
}