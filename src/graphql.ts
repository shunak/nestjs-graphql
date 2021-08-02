
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getTodos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;

    abstract todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export class Todo {
    title?: Nullable<string>;
    id?: Nullable<string>;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
