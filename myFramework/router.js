
function startPage() {
    route('/home', new Page({header: new Header(), footer: new Footer(), content: new Home()}))
    route('/product', new Page({header: new Header(), footer: new Footer(), content: new Product({name: 'xe hoi do choi'})}))
    renderComponent(document.getElementById('root'), routes['/home'])
}