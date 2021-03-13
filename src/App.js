import React, { Component } from 'react';
import InputBox from './components/modules/inputBox';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  state = {  }
  render() { 
    return ( 
        <InputBox />
     );
  }
}
 
export default App;
