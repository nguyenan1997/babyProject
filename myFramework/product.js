
class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let name = this.props.name
        return `<div>product: ${name}</div>`
    }
}
