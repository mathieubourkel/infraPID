export class UpdateDeploymentDTO {
    
    constructor(
        public id: string,
        public date?: Date,
        public templateId?: string,
        public accountId?: string,
        public status?: number,
    ) {}
}