export interface ICommandUseCase<Input> {
    execute(input: Input): Promise<void>;
}