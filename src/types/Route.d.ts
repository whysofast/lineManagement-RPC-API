import { User } from '../types/User';

export type Route = Record<string, RouteContent>;

type Handler = (args: any, ctx: Context) => any;

export interface Context {
    USERS: User[];
    LINE: User[];
}

export interface RouteContent {
    description: string;
    inputs: any;
    outputs: any;
    method: 'GET' | 'POST';
    handler: Handler;
}
