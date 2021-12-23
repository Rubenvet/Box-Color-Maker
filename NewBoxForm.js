import React, { Component } from 'react';
import Box from './Box';
import BoxList from './BoxList'

import { v4 as uuid } from 'uuid';


class NewBoxForm extends Component {
    constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()};
        this.props.createBox(newBox);
        this.setState({
            width: "", height: "", color: ""
        })

    }

    render() {
        return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="width">Width: </label>
                    <input type="text"
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="height">Height: </label>
                    <input type="text"
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text"
                    id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                    />
                    <button>Create new box</button>
                    <Box />
                    </div>
                </form>
                
        
        )
    }
}

export default NewBoxForm;































// class NewBoxForm extends Component {
//     constructor(props) {
//     super(props);
//     this.state = { color: "", width: "", height: ""};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(evt) {
//         evt.preventDefault();
//         this.props.addBox(this.state);
//         this.setState({ color: "", width: "", height: ""});
//     }

//     handleChange(evt) {
//         this.setState({
//             [evt.target.name]: evt.target.value
//         });
//     }


//     render() {
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="color">Color: </label>
//                     <input 
//                     id="color"
//                     name="color"
//                     value={this.state.color}
//                     onChange={this.handleChange}
//                     />

//                     <label htmlFor="width">Width: </label>
//                     <input 
//                     id="width"
//                     name="width"
//                     value={this.state.width}
//                     onChange={this.handleChange}
//                     />
//                     <label htmlFor="height">Height: </label>
//                     <input 
//                     id="height"
//                     name="height"
//                     value={this.state.height}
//                     onChange={this.handleChange}
//                     />
//                     <button>Create new box</button>
//                     <Box />
//                 </form>
                
//             </div>
//         )
//     }
// }

// export default NewBoxForm;