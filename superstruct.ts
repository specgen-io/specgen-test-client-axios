export * from 'superstruct'

import * as t from 'superstruct';

export const DateTime = t.coerce<Date, unknown, string>(t.date(), t.string(), (value: string): Date => new Date(value))

export const decode = <T>(struct: t.Struct<T, unknown>, value: unknown): T => {
    return t.create(value, struct)
};

export const encode = <T>(struct: t.Struct<T, unknown>, value: T): unknown => {
    return JSON.parse(JSON.stringify(value))
};

export const StrInteger = t.coerce<number, unknown, string>(t.integer(), t.string(), (value: string): number => parseInt(value))
export const StrFloat = t.coerce<number, unknown, string>(t.number(), t.string(), (value: string): number => parseFloat(value))