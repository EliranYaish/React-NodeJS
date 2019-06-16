import * as React from 'react';
import styled from 'styled-components';

const Select = styled.select`
   color: green;
`;

const Option = styled.option`
   color: green;
`;

class DropDown extends React.Component {

  componentDidMount() {
    this.props.loadData();
  }

  renderLoading() {
    return (<Option>Loading...</Option>);
  }

  renderOptions() {
    if (!(!!this.props.data && this.props.data.length > 0)) {
      return null;
    }

    return this.props.data.map(item => {
      return <Option key={item.id} value={item.id}>{item.name}</Option>
    });
  }

  render(){
    return (
      <Select
       onChange={(e) => this.props.onSelect(e.target.value)}
      >
        <Option>--Choose Team--</Option>
        {!this.props.isFetching ? this.renderOptions() : this.renderLoading()}
      </Select>

    )

  }
}

export default DropDown;