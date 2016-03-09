export interface Repository<T> {
    getAll(): Array<T>;
    getById(id: number): T;
}
