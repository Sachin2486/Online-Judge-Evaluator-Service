import { IJob } from "../types/bullMqJobDefinition";
import { Job } from 'bullmq';
import { SubmissionPayload } from "../types/submissionPayload";

export default class SubmissionJob implements IJob{
    name: string
    payload: Record<string,SubmissionPayload>;
    constructor(payload: Record<string,SubmissionPayload>){
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?: Job) => {
        console.log("handler of the job called");
        console.log(this.payload);
        if(job){
            const key = Object.keys(this.payload)[0];
            console.log(this.payload[key].language);
            if(this.payload[key].language === 'CPP'){
                console.log("RUN the Cpp code in the compiler");
            }

        }
    }

    failed = (job?:Job) : void => {
        console.log("job execution got failed");
        if(job){
            console.log(job.id);
        }
    };
}