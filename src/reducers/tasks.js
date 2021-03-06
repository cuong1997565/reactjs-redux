import * as types from './../constants/ActionTypes'

var s4 = () =>{
         return Math.floor((1* Math.random() ) * 0x10000).toString(16).substring(1);
    }

var ramdomID = () =>{
           return s4() + s4() + '-' + s4();
}

    //find id
var findIndex = (tasks ,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}


var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
              id     : action.task.id,
              name   : action.task.name,
              status : action.task.status === true ? true : false
            };
            if(!task.id){
              task.id = ramdomID();
              state.push(task);
            } else{
                index        = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
           return [...state];
        case types.UPDATE_STATUS_TASK:
                 id = action.id;
                 index = findIndex(state , id);
                // state[index].status = !state[index].status;
                // Clone task mới = task cũ && status = !status;
                // Xóa task cũ => push task mới
                // cach 1
                // var cloneTask = {...state[index]};
                // cloneTask.status = !cloneTask.status;
                // //cách 1
                // // state.splice(index, 1);
                // // state.push(cloneTask);
                // // cách 2
                // state[index] = cloneTask;
                //cach 3
                state[index] = {
                     ...state[index],
                     status : !state[index].status
                };
                localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.DELETE_TASK:
             id = action.id;
             index = findIndex(state , id);
            state.splice(index , 1);
            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state];
        default: return state;
    }
};

export default myReducer;
