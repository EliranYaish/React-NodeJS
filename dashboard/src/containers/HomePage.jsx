import {connect} from "react-redux";
import HomePage from "../components/HomePage";
import {loadTeamsRequest} from "../state/actions/teams";
import {loadResultsRequest} from "../state/actions/results";

const mapStateToProps = (state, ownProps) => {
  return {
    teamsIsFetching: state.teamsReducer.isFetching,
    TeamsError: state.teamsReducer.error,
    teams: state.teamsReducer.data,
    results: state.resultsReducer.data,
    resultsIsFetching: state.resultsReducer.isFetching,
    resultsError: state.resultsReducer.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTeams: () => dispatch(loadTeamsRequest()),
    loadResults: (id) => dispatch(loadResultsRequest(id))

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)