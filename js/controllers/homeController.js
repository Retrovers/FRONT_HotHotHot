class HomeController extends Controller {

    async load() {
        this.animate().then(() => {
            fetch('/views/home.html')
            .then(res => res.text())
            .then(res => this.render(res));
        })
    }

}