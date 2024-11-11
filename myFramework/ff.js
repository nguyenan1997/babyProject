
/**
 * Base component
 */
class Component {
    /**
     * 
     * @param {{[k in string]: Component | string}} props 
     */
    constructor(props) {
        /**
         * @type {HTMLElement}
         */
        this.element = null
        /**
         * @type {{[k in string]: Component | string}}
         */
        this.props = props || {}
    }
    internalRender(/** @type {HTMLElement} */ parent) {
        this.beforeRender()
        const [tag, innerHTML] = this.renderString()
        this.element = document.createElement(tag)
        this.element.innerHTML = innerHTML
        parent.appendChild(this.element)
        this.afterRender()
    }
    renderString() {
        const element = this.render().trim()
        if (typeof element !== 'string') throw new Error('render() must return a string')
        const tagRegex = /\<([a-zA-Z]+)\b/
        const matchTag = tagRegex.exec(element)
        const tag = matchTag[1]
        if (!tag) {
            throw new Error('Invalid html')
        }
        // const rg = /^\<[a-zA-Z]+\s*\>(.*)\<\/[a-zA-Z]+\s*\>$/
        let innerHtml = element.substring(element.indexOf('>') + 1, element.lastIndexOf('</'))
        for (const [key, comp] of Object.entries(this.props)) {
            if (comp instanceof Component) {
                const [ctag, cinnerHtml] = comp.renderString()
                innerHtml = innerHtml.replaceAll('$' + key, `<${ctag}>${cinnerHtml}</${ctag}>`)
            }
        }
        return [tag, innerHtml]
    }
    /**
     * @returns {string}
     */
    render() {

    }
    beforeRender() {

    }
    afterRender() {

    }
}

/**
 * @type {HTMLElement}
 */
let rootElement
/**
 * @type {{[k in string]: Component}}
 */
let routes = {}

/**
 * 
 * @param {HTMLElement} root 
 * @param {Component} component 
 */
function renderComponent(root, component) {
    rootElement = root
    component.internalRender(root)
}

function router() {
    const path = window.location.pathname;
    // Find the view for the current path or show a "not found" message
    const view = routes[path] || new Error404()
    rootElement.innerHTML = ''
    view.internalRender(rootElement)
}

function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    router();
}

/**
 * 
 * @param {'string'} path 
 * @param {Component} view 
 */
function route(path, view) {
    routes[path] = view
}

class Error404 extends Component {
    render() {
        return `<div class="dfs">
            <span>Hello</span>
            <a href="/product.html">click here</a>
        </div>`
    }
}

window.onpopstate = router