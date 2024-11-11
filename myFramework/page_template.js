
class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return `
        <div>
            $header
            <div>
                $content
            </div>
            $footer
        </div>
        `
    }
}
