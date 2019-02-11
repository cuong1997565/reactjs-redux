import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editItem    from './editItem';
import filterTable from './filterTable';
import sreach      from './sreach';
import sort        from './sort';
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editItem,
    filterTable,
    sreach,
    sort
});

export default myReducer;