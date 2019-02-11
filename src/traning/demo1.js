import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';
const store = createStore(myReducer);
console.log('Default :', store.getState());
//thực hiện công việc thay đổi status
store.dispatch(status());
console.log('TOGGLE_STATUS :', store.getState());
//Thuc hiện công việc sắp xếp tên z-a
store.dispatch(sort({
        by     : 'name',
        value  : -1
}));
console.log('SORT : ', store.getState());