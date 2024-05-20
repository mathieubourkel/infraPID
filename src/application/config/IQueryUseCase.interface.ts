export interface IQueryUseCase<Input, Output> {
    execute(input?: Input): Promise<Output | null>;
}