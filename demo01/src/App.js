import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div>
        {/* jsx */}
        <ul className='list'>
          <li>{true ? 'timbertang.com' : '。。。。。 '}</li>
          <li>2. love react</li>
        </ul>
      </div>
      // var child  = react.create('li', null, 'timbertang')
      // var child2   = react.create('li', null, 'love react')
      // var root = react.createElement('ul', {className: 'list'}, clild, child2)
    )
  }
}

export default App

