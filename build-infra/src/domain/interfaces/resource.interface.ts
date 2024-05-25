export interface IResource {
    providerName: string
    name: string
    attributes: {}
    buildResource: () => string
}