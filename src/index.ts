import * as express from 'express';
import {heroes} from './heroes';
import * as cors from 'cors';

const app = express();

app.use(cors({
    origin: '*'
}));

app.get('/api/heroes', (req, res) => res.send(heroes));

app.listen(3000, () => console.log('Example app listening on port 3000!'));