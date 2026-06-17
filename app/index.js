const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Secure DevSecOps Monorepo Running!'));
app.listen(3000, () => console.log('Server running on port 3000'));
console.log("Hello Devsecops")