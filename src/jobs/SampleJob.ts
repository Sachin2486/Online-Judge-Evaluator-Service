import { IJob } from "../types/bullMqJobDefinition";
import { Job } from 'bullmq';

export default class SampleJob implements IJob{
    name: string
    payload: Record<string,unknown>;
    constructor(payload: Record<string,unknown>){
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?: Job) => {
        console.log("handler of the job called");
        console.log(this.payload);
        if(job){
            console.log(job.name, job.id, job.data);
        }
    }

    failed = (job?:Job) : void => {
        console.log("job execution got failed");
        if(job){
            console.log(job.id);
        }
    };
}