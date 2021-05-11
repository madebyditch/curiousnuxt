const axios = require('axios')
const sgMail = require('@sendgrid/mail')

exports.handler = async function(event, context, callback) {
    const { message, senderEmail, senderName } = JSON.parse(event.body);
    const slackMsg = JSON.stringify({
        text: `New Contact form submission from ${senderName}. \n Check your email!`,
    });
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
    axios.post(process.env.SLACK_WEBHOOK, slackMsg).then((response) => {
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
    }).catch((error) => {});

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