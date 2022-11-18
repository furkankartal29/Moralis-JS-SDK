import { Operation } from '@moralisweb3/common-core';

export type UnknownOperation = Operation<unknown, unknown, unknown, unknown>;
export type OperationAction = Pick<UnknownOperation, 'name' | 'groupName' | 'method' | 'id' | 'urlPathPattern'>;

export type Module = 'evmApi' | 'solApi' | 'auth';
