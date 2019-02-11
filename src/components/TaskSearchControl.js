import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSearchControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword     : ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name   = target.name;
        var value  = target.value;
         this.setState({
              [name] : value
         });
    }

    onSreach = () => {
        // this.props.onSreach(this.state.keyword);
        this.props.onSreachTable(this.state.keyword);
    }

    render() {
        var { keyword } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name="keyword"
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        value = {keyword}
                        onChange = {this.onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.onSreach} >
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSreachTable : (filter) => {
            dispatch(actions.sreachTask(filter))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl);
