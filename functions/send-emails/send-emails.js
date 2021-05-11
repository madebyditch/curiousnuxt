const sgMail = require('@sendgrid/mail')
const {
    SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL,
    SENDGRID_FROM_EMAIL,
} = process.env;

exports.handler = async function(event, context, callback) {
    const { message, senderEmail, senderName } = JSON.parse(event.body);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const data = {
        "to": process.env.SENDGRID_TO_EMAIL,
        "from": {
            "email": process.env.SENDGRID_FROM_EMAIL,
            "name": "Curious MPLS"
        },
        "reply_to": {
            "email": process.env.SENDGRID_FROM_EMAIL,
            "name": "Curious MPLS"
        },
        "subject": "New contact from Curious Website",
        "content": [{
            "type": "text/html",
            "value": message
        }]
    };

    try {
        await sgMail.send(data);
        return {
            statusCode: 200,
            body: 'Message sent',
        };
    } catch (err) {
        return {
            statusCode: err.code,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};