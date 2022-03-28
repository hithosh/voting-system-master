import React from 'react'
type myState={
    count:number
  }
 type myProps={
     name:string
 }

const withCounter = (WrappedComponent :any, incrementNumber:any) => {
	class WithCounter extends React.Component<myProps,myState> {
		constructor(props:any) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
    render() {
			return (
				<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props.name}
				/>
			)
		}
	}
	return WithCounter
}

export default withCounter;