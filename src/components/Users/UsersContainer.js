import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { selectPage, requestUsers, subscribeUser, unsubscribeUser, setSeriesPage } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import { getCountPages, getCurrentPage, getTotalPages, getIsLoad, getIsSubscribeProgress, getUsersList, getSeries } from '../../redux/selectors/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.countPages, this.props.currentPage);
    }

    onSelectPage = (pageNumber, pageSeries) => {
        this.props.requestUsers(this.props.countPages, pageNumber);
        this.props.setSeriesPage(pageSeries);
    }

    render() {
        return <> 
            {this.props.isLoad ? <Preloader /> 
            : <Users {...this.props} onSelectPage={this.onSelectPage} />}
        </>
    }
}

let mapStateToProps = state => {
    return {
        users: getUsersList(state),
        countPages: getCountPages(state),
        currentPage: getCurrentPage(state),
        totalPages: getTotalPages(state),
        isLoad: getIsLoad(state),
        isSubscribeProgress: getIsSubscribeProgress(state),
        seriesPage: getSeries(state)
    }
}

export default connect(mapStateToProps, { selectPage, requestUsers, subscribeUser, unsubscribeUser, setSeriesPage})(UsersContainer);