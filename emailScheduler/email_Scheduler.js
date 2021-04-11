require("dotenv").config();
const nodemailer = require('nodemailer');
const emailApiCalls = require('../api_Calls/email_Api_Calls');
const cron = require('node-cron');
const timeStamp = require('time-stamp');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS
    }
});

let schedule_Email = async () => {

    cron.schedule(process.env.CRON_EXPRESSION, () => {
        let current_timestamp = timeStamp(process.env.TIMESTAMP_FORMAT); //202104110112
        console.log('Cron running every minute.', current_timestamp);
    
        emailApiCalls.fetchEmailByStatus('SCHEDULED').then(response => {
            for (let index = 0; index < response.length; index++) {
                if(current_timestamp == response[index].scheduled_Time){ // Compare time to send
                    const email = response[index];
                    let scheduledTime = response[index].scheduled_Time;

                    let mailOptions = {
                        from: email.sender,
                        to: email.receiver,    
                        subject: email.subject,
                        text: email.body
                    };
                
                    transporter.sendMail(mailOptions, (error, info) => {
                
                        if (error) {                            
                            const body = { status: 'FAILED' };
                            emailApiCalls.reschedule(email.id, body).then(response => { // update table status
                                console.log(`Email status : FAILED || Id: ${email.id} | To: ${email.receiver} | Time: ${scheduledTime}`);
                            }).catch(error => {
                                console.log("Email status : SCHEDULED", error);
                            });                
                            console.error('Failed to send', error);

                        } else {                            
                            const body = { status: 'SENT' };
                            emailApiCalls.reschedule(email.id, body).then(response => { // update table status
                                console.log(`Email status : SENT || Id: ${email.id} | To: ${email.receiver} | Time: ${scheduledTime}` );
                            }).catch(error => {
                                console.log("Email status : SCHEDULED", error);
                            });
                            console.log('Email sent: ', info.response);
                        }
                
                    });
                }
                
            }       

        }).catch(error => {
            console.log(error);
        });
    
    });
        
}


module.exports={
    schedule_Email
}