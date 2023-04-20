import React,{ Component } from 'react';

class ErrorBoundary extends Component {
    state = {  hasError:false }
    props;
    constructor(props: any){
        super(props);
        this.props = props;
    }
    static getDerivedStateFromError(error: any){
        return {hasError:true}
    }
    componentDidCatch(error: Error, info: any){
        console.log(error);
        console.log(info);
    }
    render() {
        if(this.state.hasError){
            return this.props.fallback;
        }


        return this.props.children;
    }
}
export default ErrorBoundary