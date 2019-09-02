import React from 'react'
import './Cursor.css'

class Cursor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasClicked: false
        }
    }

    componentDidMount() {
        window.addEventListener('click',
        this.handleClick)
      }

    handleClick = (event) => {

        if () {
        this.setState({ hasClicked: true })
        } else {
        this.setState({ hasClicked: false })
        }
    }

    render() {
        return (
            <div className={this.state.hasClicked ? 'Cursor HeaderScrolled' : 'Cursor'}>
            </div>
        )
    }
}

export default Cursor 