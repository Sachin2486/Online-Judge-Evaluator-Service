import express, {Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/sampleWorker';

const app: Express = express();

app.use('/api', apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');

    sampleQueueProducer('SampleJob',{
        name:'Sachin',
        company: 'ABC<XYZ',
        Position: "SDE 1",
        location: "Bangalore"
    });
});