import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    // 에러가 발생한 상황에 해당 컴포넌트가 먼저 호출된다.
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다');
        console.log({
            error,
            info
        });
        this.setState({error: true});
    }

    render() {
        if(this.state.error) {
            return <h1>에러발생</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;