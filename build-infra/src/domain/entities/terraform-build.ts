import { IResource } from "../interfaces/resource.interface";
import { Provider } from "../value-objects/provider";

export class TerraformBuild<T> {
    provider: Provider<T>
    resources: IResource[]

    constructor(provider: Provider<T>, resources: IResource[]){
        this.provider = provider
        this.resources = resources
    }

    buildTerraformString(){
        let tmpFile: string = JSON.stringify(this.provider)
        this.resources.map((resource) => {
            tmpFile+= resource.buildResource()
        })
        return tmpFile
    }

}