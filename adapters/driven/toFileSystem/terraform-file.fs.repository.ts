import {existsSync, mkdirSync, writeFileSync} from 'fs';
import { BuildInfraRepository } from '../../../bounded-contexts/build-infra/domain/repositories/build-infra.repository';

export class FileSystemArchitectureRepository implements BuildInfraRepository {
    
    async saveTerraformFile(data: string) {
        const folderName = "./adapters/driven/toFileSystem/artifacts/1/"
        try {
            if (!existsSync(folderName)) {
              mkdirSync(folderName);
            }
          } catch (err) {
            console.error(err);
          } finally {
            writeFileSync(`${folderName}main.tf`, data)
          }
        
    }
}