export default class TodoEntity {
    public static Hydrate(data: Record<string, never>): TodoEntity {
        try {
            return new TodoEntity(data.title ?? '', Date.now());
        } catch (e) {
            return new TodoEntity('', Date.now());
        }
    }

    constructor(public readonly title: string, public readonly id: number) {}
}