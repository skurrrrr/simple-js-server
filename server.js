const { readFileSync, writeFileSync } = require('fs'); // import these from nodejs

const express = require('express');
const app = express();  // create express app


app.get('/', (req, res ) => {
    const count = readFileSync('./count.txt', 'utf-8');
    console.log('count ', count)

    const newCount = parseInt(count) + 1

    writeFileSync('./count', newCount);

    res.send(`
    
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <h1>Welcome to my website!</h1>
            <p>This site has been viewed ${newCount} times!</p>
        </body>
    </html>
    
    `);

})

app.listen(5000, () => console.log('http://localhost:5000/'));
