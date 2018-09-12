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
export default applyFilter;
