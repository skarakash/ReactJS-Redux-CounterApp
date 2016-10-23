import {INC, DEC} from '../constants/index';

export const decr = () => {
    return {
        type: DEC
    }
}

export const incr = () => {
    return {
        type: INC
    }
}