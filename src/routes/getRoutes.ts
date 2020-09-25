import { Route } from '../types/Route';
import { showLine } from '../endpoints/showLine/index';
import { popLine } from '../endpoints/popLine/index';

export const getRoutes: Route = {
    showLine: showLine,
    popLine: popLine,
};
