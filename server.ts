import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import renderPipe from "./renderPipe";

const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, './build')));

app.use('*', (req, res) => {
    renderPipe(req, res)
});


app.listen(8080, () =>
    console.log('Express server is running on http://localhost:8080')
);


