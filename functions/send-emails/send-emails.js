const axios = require('axios')
const sgMail = require('@sendgrid/mail')

exports.handler = async function(event, context, callback) {
    let emails = ["hello@discovercurious.com", "branding@discovercurious.com", "marketing@discovercurious.com", "product@discovercurious.com"];
    const { message, senderEmail, senderName, subject, messageType } = JSON.parse(event.body);
    const slackMsg = {
        text: `New contact form submission: ${senderName} (${senderEmail}). \n re: ${subject} \n to: ${emails[messageType]}`
    };
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const data = {
        "to": emails[messageType],
        "from": {
            "email": process.env.SENDGRID_FROM_EMAIL,
            "name": "Curious MPLS"
        },
        "subject": subject,
        "content": [{
            "type": "text/html",
            "value": message
        }]
    };

    axios.post(process.env.SLACK_WEBHOOK, JSON.stringify(slackMsg)).then((response) => {
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