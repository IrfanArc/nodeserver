const express = require('express');
const crypto = require('crypto');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3002;
const FILE_PATH = path.join("/", 'serverdata', 'randomData.txt');

// Middleware to ensure /serverdata directory exists
app.use(async (req, res, next) => {
  await fs.ensureDir(path.join('/', 'serverdata'));
  next();
});

app.get('/generate-file', async (req, res) => {
  try {
    // Generate 1 KB of random data
    const randomData = crypto.randomBytes(1024);
    const base64String = Buffer.from(randomData).toString('base64');

    // Write the data to a file
    await fs.writeFile(FILE_PATH, base64String);

    // Generate a checksum (SHA-256 hash)
    const fileBuffer = await fs.readFile(FILE_PATH);
    const checksum = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    // Send the checksum as a header
    res.setHeader('X-Checksum', checksum);

    // Send the file to the client
    res.download(FILE_PATH, 'randomData.txt', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error sending file');
      } else {
        console.log('File sent successfully');
      }
    });
  } catch (err) {
    console.error('Error generating file:', err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

