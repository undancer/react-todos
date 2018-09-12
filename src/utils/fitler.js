import {stringInclues} from "./common";

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

const applyFilter = (list, filter) => {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);
        case FILTER_ACTIVE:
            return list.filter(item => item.completed === false);
        default:
            return list;
    }
};

const search = (list, query) => {
    let q = query.trim().toLowerCase();
    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}


const getOptions = () => {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
};

export {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED, applyFilter, search, getOptions};
