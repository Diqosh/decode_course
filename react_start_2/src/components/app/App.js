import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }
    state = {
        click : true
    }

    onClick = () => {
        this.setState({click : !this.state.click})
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillUnmount() {
        console.log('Unmount')
    }


    render() {
        console.log('render')
        return (


            <div className="app">
                {this.state.click  ? <CharInfo/>  : null }
                <button onClick={this.onClick}>click me</button>
                {/*<AppHeader/>*/}
                {/*<main>*/}
                {/*    <RandomChar/>*/}
                {/*    <div className="char__content">*/}
                {/*        <CharList/>*/}
                {/*        <CharInfo/>*/}
                {/*    </div>*/}
                {/*    <img className="bg-decoration" src={decoration} alt="vision"/>*/}
                {/*</main>*/}
            </div>
        )
    }


}

export default App;