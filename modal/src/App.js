import React, {Component} from 'react';
import Dialog from './components/Dialog.js'




class App extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div className="App">

                <button onClick={(e) => this.setState({isOpen: true })}>Ouvrir le modal</button>

                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo iaculis aliquam. Suspendisse auctor lectus vitae ex euismod fermentum. Aenean diam orci, aliquam ut quam et, viverra blandit erat. Maecenas nec justo sit amet urna viverra tincidunt eu et nisl. Nullam lobortis nec dui at feugiat. In imperdiet felis non libero lobortis, eget faucibus dui mollis. Nunc laoreet malesuada dignissim. Nunc finibus quam at faucibus dignissim. Praesent facilisis risus id magna pretium, at sagittis lorem mattis. Vivamus quis convallis lacus, ac dapibus metus. Quisque et molestie purus. Integer lectus est, aliquet a mattis in, faucibus vel nulla. Aliquam volutpat rutrum ex. Duis vitae magna purus. Fusce sed elit commodo, tempor urna non, porttitor lectus. Phasellus sit amet posuere magna.
                </Dialog>

            </div>
        );
    }
}


export default App;
