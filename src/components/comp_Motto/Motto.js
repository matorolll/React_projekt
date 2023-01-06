import React, { Component} from 'react'
import mottocar from "./carmotto.png"

import './Motto.css';


export default class MottoComp extends Component {
  render() {
    return (

    <div class="thumbnail text-center text-white">
        <img src={mottocar} alt="img" class=" d-block w-100"/>
        <div class="caption"><h1>Jestesmy tu dla was</h1></div>
    </div>

    
    )
  }
}
