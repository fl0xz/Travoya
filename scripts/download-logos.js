const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  {
    url: 'https://www.ryanair.com/ie/en/utility/image/ryanair-logo.png',
    filename: 'ryanair.png'
  },
  {
    url: 'https://www.easyjet.com/ejcms/cache/medialibrary/Images/Logos/easyjet_logo_2018.png',
    filename: 'easyjet.png'
  }
];

const downloadLogo = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(__dirname, '../public/images/airlines', filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename);
      reject(err);
    });
  });
};

const downloadAllLogos = async () => {
  try {
    for (const logo of logos) {
      await downloadLogo(logo.url, logo.filename);
    }
    console.log('All logos downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
};

downloadAllLogos(); 