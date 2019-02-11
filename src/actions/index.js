import * as types from './../constants/ActionTypes'

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
           type : types.SAVE_TASK,
           task //task: task
    }
}

export const toggleForm = () => {
       return {
           type : types.TOGGLE_FORM
       }
}

export const closeForm = () => {
       return {
            type : types.CLOSE_FORM
       }
}

export const openForm = () => {
      return {
         type : types.OPEN_FORM
      }
}

export const updateStatusTask = (id) => {
    return {
        type : types.UPDATE_STATUS_TASK,
        id
    }
}

export const editItemTask = (task) => {
    return {
        type : types.EDIT_ITEM_TASK,
        task
    }
}

export const filterTableTask = (filter) => {
  return {
         type : types.FILTER_TABLE,
         filter
  }
}

export const sreachTask = (sreach) => {
      return {
         type : types.SREACH,
         sreach
      }
}

export const sortTask = (sort) => {
    return {
         type : types.SORT,
         sort
    }
}

export const deleteTask = (id) => {
    return {
      type : types.DELETE_TASK,
      id
    }
}