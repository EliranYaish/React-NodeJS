import * as React from 'react';
import styled from 'styled-components';
import DropDown from "./DropDown";
import Matches from "./Matches";

const FrameView = styled.div`
   height: 100vh;
   width: 100vw; 
   padding: 25px;
   box-sizing: border-box;
   color: green; 
`;

class HomePage extends React.Component {

  renderError() {
    return this.props.teamsError.message;
  }

  renderPage() {
    return (
      <FrameView>
        <DropDown
          data={this.props.teams}
          loadData={this.props.loadTeams}
          isFetching={this.props.teamsIsFetching}
          onSelect={this.props.loadResults}
        />
        <Matches
          data={this.props.results}
          error={this.props.resultsError}
          isFetching={this.props.resultsIsFetching}
        />
      </FrameView>
    )
  }

  render(){
    return !this.props.teamsError ? this.renderPage() : this.renderError();
  }

}

export default HomePage;