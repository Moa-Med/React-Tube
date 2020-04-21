import React ,{Component} from 'react';
import Item from './Item';

class Data extends Component {
    
    render(){
        return this.props.allData.map((data) => (
            <div>
                <Item key={data.id} data={data} getId={this.props.getId}/>
           </div>
        ));
    }
}
export default Data;