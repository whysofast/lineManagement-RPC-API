import { Route } from '../types/Route';
import { createUser } from '../endpoints/createUser/index';
import { addToLine } from '../endpoints/addToLine/index';
import { findPosition } from '../endpoints/findPosition/index';
import { filterLine } from '../endpoints/filterLine/index';

export const postRoutes: Route = {
    createUser: createUser,
    addToLine: addToLine,
    findPosition: findPosition,
    filterLine: filterLine,
};
