import { Ref } from "vue";

export type Maybe<T> = T | null | undefined;
export type MaybeRef<T> = T | Ref<T>;

export function monadRun<T, R>(val: Maybe<T>, func: (v: T) => R): Maybe<R> {
    if (val === null || val === undefined) {
        return undefined;
    }

    return func(val);
}
