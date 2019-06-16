import * as React from 'react';
import styled from 'styled-components';

const MatchView = styled.div`
   margin-top: 50px;
   padding-left: 200px;
   color: green;
`;

const Table = styled.table`
  border: 1px solid black;
  width: 550px;
  border-collapse: separate;
`;

const Tr = styled.tr`
    color: black;
    background-color: white;
    height: 25px;
    line-height: 25px;
   
   &.title {
     color: white;
     background-color: green;
     height: 30px;
     line-height: 30px;
   }
`;

const Td = styled.td`
   text-align: center;
   border: 1px solid black
   &.title {
   }
`;

class Matches extends React.Component {

  renderLoading() {
    return (<div>Loading...</div>);
  }

  renderTable() {
    return (
      <Table>
        <tbody>
        <Tr className="title">
          <Td className="title">Stage</Td>
          <Td className="title">Home Team</Td>
          <Td className="title">Score</Td>
          <Td className="title">Away Team</Td>
        </Tr>
        {this.props.data.map((match,idx) => {
          return (
            <Tr key={idx}>
              <Td>{match.stage}</Td>
              <Td>{match.homeTeam}</Td>
              <Td>{match.homeTeamScore} - {match.awayTeamScore}</Td>
              <Td>{match.awayTeam}</Td>
            </Tr>
          )
        })}
        </tbody>
      </Table>
    );
  }

  render(){
    return (
      <MatchView>
        {!!this.props.isFetching ? this.renderLoading() : null}
        {!!this.props.error ? this.props.error.message : null}
        {!!this.props.data && this.props.data.length>0  ? this.renderTable() : null}

      </MatchView>
    )

  }
}

export default Matches;