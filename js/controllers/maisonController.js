class MaisonController extends Controller {

    async load () {
        this.animate().then(() => {
            fetch('/views/maison.html')
            .then(res => res.text())
            .then(res => this.render(res));
        })  
    }

}