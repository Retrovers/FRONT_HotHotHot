class Controller {

    animate() {
        return loader.show('content-embeded')
    }

    render (data) {
        loader.showContent().then(() => document.getElementById('content-embeded').innerHTML = data )
    }

}