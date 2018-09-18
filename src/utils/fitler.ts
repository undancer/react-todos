import {stringInclues} from "./common";

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

const applyFilter = (list: any, filter: any) => {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter((item: any) => item.completed === true);
        case FILTER_ACTIVE:
            return list.filter((item: any) => item.completed === false);
        default:
            return list;
    }
};

const search = (list: any, query: any) => {
    let q = query.trim().toLowerCase();
    return list.filter((text: string) => stringInclues(new String(text).toUpperCase(), q));
};


const getOptions = () => {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
};

export {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED, applyFilter, search, getOptions};
