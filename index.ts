import express from 'express';
import fs from 'fs';
import { User } from './src/types/User';
import { postRoutes } from './src/routes/postRoutes';
import { getRoutes } from './src/routes/getRoutes';
import { RouteContent } from './src/types/Route';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const USERS: User[] = JSON.parse(fs.readFileSync('./src/data/user.json').toString('utf-8'));
const LINE: User[] = JSON.parse(fs.readFileSync('./src/data/line.json').toString('utf-8'));

app.get('/showUsers', (req, res) => {
    res.send(JSON.stringify(USERS));
});

app.get('/docs', (req, res) => {
    const docs: Record<string, RouteContent> = {};
    for (const route in postRoutes) {
        docs[route] = { ...postRoutes[route] };
    }
    for (const route in getRoutes) {
        docs[route] = { ...getRoutes[route] };
    }
    res.send(JSON.stringify({ endpoints: docs }));
});

app.route('/:endpoint')
    .post((req, res) => {
        let endpoint: string = req.params.endpoint;

        if (postRoutes[endpoint]) {
            res.send(postRoutes[endpoint].handler.call(null, req.body, { USERS, LINE }));
        } else {
            res.send('Rota não encontrada.');
        }
    })
    .get((req, res) => {
        let endpoint: string = req.params.endpoint;

        if (getRoutes[endpoint]) {
            res.send(getRoutes[endpoint].handler.call(null, req.body, { USERS, LINE }));
        } else {
            res.send('Rota não encontrada.');
        }
    });

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Success on port ${PORT}`);
});
