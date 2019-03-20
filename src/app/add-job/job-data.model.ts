export interface JobData {
    contract: String;
    project: String;
    job_Name: String;
    job_skills: String;
    country:  String;
    city: String;
    _id: String;
   // study_status: {type:String,  required:true},
   // education_degree:{type: String, required:true},
    public_Major: {type:String,required:true},
   // spicifc_Major: {type:String, required:true},
    work_hours: String;
    work_days: String;
    salary: String;
    gender: String;  
   // languages: {type:String,required:true},
   // job_Responsibility: {type:String,required:true},
    personal_Skills: String;
    required_Number:Number;
   // start_Date: {type: Date, required: true},
   // age_From : {type:Number,required:true},
   // age_To : {type:Number,required:true}
    }