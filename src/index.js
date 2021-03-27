const { mobizon } = require('mobizon-node');

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: process.env.API_KEY,
  format: 'json',
});

const recipient = process.env.RECIPIENT;

(async() => {
  const sendSms = await mobizon.sendSms({
    recipient,
    from: '',
    text: process.env.MESSAGE,
  });

  if (sendSms.code !== 0) {
    return console.log('Oops, houve um erro ao enviar SMS, tente novamente.');
  }

  console.log(`SMS enviado com sucesso para: ${recipient}`);
})();