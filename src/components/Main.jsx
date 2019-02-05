import React, {Component} from 'react'

class Main extends Component{
    getText(txt){
        return `this ${txt} added`;
    }
    render(){
        return(
            <div className='red'>
                <h1>Hello World!</h1>
                <br/>
                <i> {this.getText("TarikKorkmaz")}</i>
            </div>
        )
    }
}

export default Main