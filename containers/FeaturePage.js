import React, { Component } from 'react';

import { fetchUsers } from '../redux/actions/users/users';

import { connect } from 'react-redux'

class FeaturePage extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderDatatable = (users) => {
        return (
            <div className="table-responsive ">
                <table className="table m-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(res => {
                            return (
                                <tr key={res.id}>
                                    <th scope="row">{res.id}</th>
                                    <td>{res.email}</td>
                                    <td>{res.active === true ? 'active' : 'inactive'}</td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>

            </div>
        )
    }


    render() {

        const { user, isLoading } = this.props;

        if (!user) return null;
        if (isLoading) return <h5>Loading...</h5>

        return (
            <div>
                <h4 className="font-weight-bold text-uppercase">Features</h4>                
                <p className="font-weight-bold">User List</p>
                <div className="border col-md-8 m-auto">
                    {this.renderDatatable(user.users)}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.users.data, isLoading: state.users.loading }
}

export default connect(mapStateToProps, { fetchUsers })(FeaturePage);