import express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';


const app = express();
app.use(express.json());


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port... ${PORT}`);
});