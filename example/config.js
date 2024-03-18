var environment =  process.env.NODE_ENV || 'development';

var config = {
  development: {
    mailer: {
      from: 'TestApplication@localhost',
      host: 'smtp.gmail.com', // hostname
      secureConnection: true, // use SSL
      port: 465, // port for secure SMTP
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    },
    mailerUpdate: {
      from: 'UpdatedTestApplication@localhost',
      host: 'smtp.gmail.com', // hostname
      secureConnection: true, // use SSL
      port: 465, // port for secure SMTP
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    }
  },
  test: {
    mailer: {
      from: 'TestApplication@localhost',
      name: 'localhost',
      host: 'localhost', // hostname
      secure: true, // use SSL
      tls: {rejectUnauthorized: false},
      port: 8465, // test port for secure SMTP
      auth: {
        user: 'TestApplication',
        pass: 'TestApplication'
      }
    },
    mailerUpdate: {
      from: 'UpdatedTestApplication@localhost',
      name: 'localhost',
      host: 'localhost',
      secure: true,
      tls: {rejectUnauthorized: false},
      port: 8465,
      auth: {
        user: 'TestApplication',
        pass: 'TestApplication'
      }
    }
  }
};

exports = module.exports = config[environment];