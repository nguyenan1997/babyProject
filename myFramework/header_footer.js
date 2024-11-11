class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return `<p>Hello Header!<a onclick="navigateTo('/home')">Go Home</a><a onclick="navigateTo('/product')">Product</a></p>`
    }
}
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return `<p>Hello Footer!</p>`
    }
}