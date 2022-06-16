/* eslint-disable indent */
import * as functions from 'firebase-functions';

import Mailchimp from 'mailchimp-api-v3';

export const helloWorld = functions.https.onRequest((request, response) => {
  // eslint-disable-next-line object-curly-spacing
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY as string);

export const addSubscriber = functions.https.onRequest((request, response) => {
  mailchimp
    .post('/lists/id/members', {
      merge_fields: {
        FNAME: request.body.fname,
        LNAME: request.body.lname,
      },
      email_address: request.body.email,
      status: 'subscribed',
      tags: ['kaima_marketing_app'],
    })
    .then((results) => {
      response.json(results);
    })
    .catch((err) => {
      response.json(err);
    });
});
