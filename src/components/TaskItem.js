import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        // this.props.onUpdate(this.props.task.id);
        this.props.onOpenForm();
        this.props.onEditItemForm(this.props.task);
    }

    render() {
        var {task, index} = this.props;
        return (
             <tr>
                <td> {index + 1} </td>
                <td className="text-center"> {task.name} </td>
                <td className="text-center">
                    <span onClick = {this.onUpdateStatus} className={task.status === true ? 'label label-danger' : 'label label-success'} >
                        { task.status === true ? 'Kích hoạt' : 'Không kích hoạt' }
                    </span>
                </td>
                <td className="text-center">
                     <button className="btn btn-warning">
                        <span className="fa fa-pencil mr-5" onClick={this.onUpdate}>Sửa</span>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger">
                        <span className="fa fa-trash mr-5" onClick={this.onDelete}>Xóa</span>
                    </button>

             </td>
             </tr>
        );
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onUpdateStatus : (id) => {
               dispatch(actions.updateStatusTask(id));
        },
        onDeleteTask : (id) => {
               dispatch(actions.deleteTask(id));
        },
        onCloseForm : () => {
              dispatch(actions.closeForm());
        },
        onOpenForm : () => {
              dispatch(actions.openForm());
        },
        onEditItemForm : (task) => {
              dispatch(actions.editItemTask(task));
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);