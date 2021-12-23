import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }


addBox(newBox) {
    this.setState({
        boxes: [...this.state.boxes, newBox]
    })

}
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            removeBox={() => this.remove(box.id)}
            />
        ))

        return (
            <div>
                <h1>Box Color Maker</h1>
                <NewBoxForm createBox={this.addBox} />
                {boxes}
               
                
            </div>
        )
    }
}
export default BoxList;