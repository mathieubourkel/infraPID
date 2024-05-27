import * as fs from 'fs';
import { BuildInfraRepository } from '../../../bounded-contexts/build-infra/domain/repositories/build-infra.repository';

export class FileSystemArchitectureRepository implements BuildInfraRepository {
    
    async saveTerraformFile(data: string) {
        const folderName = "./adapters/driven/toFileSystem/artifacts/1/"
        try {
            if (!fs.existsSync(folderName)) {
              fs.mkdirSync(folderName);
            }
          } catch (err) {
            console.error(err);
          } finally {
            fs.writeFileSync(`${folderName}main.tf`, data)
          }
        
    }
}