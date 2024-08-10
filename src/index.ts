import express, {Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import sampleQueueProducer from './producers/sampleQueueProducer';
import SampleWorker from './workers/sampleWorker';
import SubmissionWorker from './workers/submissionWorker';
import bodyParser from 'body-parser';
import { submission_queue } from './utils/constants';
import submissionQueueProducer from './producers/submissionQueueProducer';

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');
    SubmissionWorker(submission_queue);

    submissionQueueProducer({"1234":{
        language: "CPP",
    }});

    sampleQueueProducer('SampleJob',{
        name:'Harsh',
        company: 'ABC<XYZ',
        Position: "PM 2",
        location: "Bangalore"
    }, 1);

    sampleQueueProducer('SampleJob',{
        name:'Sachin',
        company: 'Google',
        Position: "SDE 1",
        location: "Pune"
    }, 2);
});