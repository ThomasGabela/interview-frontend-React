import React from 'react';

/* THE FIX STARTS HERE */

// state data for 3 counters
const data = [
  { id: 1, value: 1 },
  { id: 2, value: 1 },
  { id: 3, value: 1 },
  { id: 4, value: 1 },
];

// Counter Component
// Start 4
class Counter extends React.Component{

  increment = (number) => this.props.increment(number);
  decrement = (number) => this.props.increment(number);
  render(){
    return(
    <div className="d-flex my-2">      
      <div className="ml-2">
      <button onClick = {() => this.increment(-1)} className="btn btn-danger mr-1" >-</button>
      <strong>  {this.props.value}  </strong>
      <button onClick = {() => this.decrement(1)} className="btn btn-success"     >+</button>
      </div>
    </div>
  )}
};

class GroupOfCounters extends React.Component{
  constructor(){
    super();
    this.state = {
      data : [...data]
    }
  }

  onIncrement(counter, increment){
    const value = counter.value + increment;
    this.setState({
      data: data.map(x => {
        x.value = counter.id === x.id? value : x.value;
        return x;
      })
    })
  }
  render(){
    return (
      <div>
        {data.map((counter) => (
          <Counter 
          key={counter.id} 
          id = {counter.id}
          value={counter.value} 
          increment={(e) => this.onIncrement(counter, e)}
          />
        ))}
        <Total 
        data={this.state.data}
        />
      </div>
    )}
}
const Total = ({data}) => {
  let sum = 0
  data.map( element => sum += element.value)
  return(
  <h3>
    Total: {sum}
  </h3>
  )
}
// End 4

/* Start 5
class Counter extends React.Component{

  onChange = (input) => this.props.change(input);
  render(){
    return(
    <div className="d-flex my-2">
      <strong>{this.props.id}</strong> 
      <div className="ml-2">
        <input type="text" 
        value= {this.props.value} 
        onChange = {e => this.onChange(parseInt(e.target.value) || 0)}/>
      </div>
    </div>
  )}
};

class GroupOfCounters extends React.Component{
  constructor(){
    super();
    this.state = {
      data : [...data]
    }
  }  

  onChange(counter, newValue){
    this.setState({
      data: data.map(x => {
        x.value = counter.id === x.id? newValue : x.value;
        return x;
      })
    })
  }
  render(){
    return (
      <div>
        {data.map((counter) => (
          <Counter 
          key={counter.id} 
          id = {counter.id}
          value={counter.value} 
          change = {(e) => this.onChange(counter, e)}
          />
        ))}
        <Total 
        data={this.state.data}
        />
      </div>
    )}
}
const Total = ({data}) => {
  let sum = 0
  data.map( element => sum += element.value)
  return(
  <h3>
    Total: {sum}
  </h3>
  )
}

*/
// End 5





/* THE FIX ENDS HERE */

const Exercise02 = () => 
{
  
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{' '}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{' '}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{' '}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{' '}
              <strong>onDecrement</strong> props from the (new){' '}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />
    </div>
  );
};

export default Exercise02;
