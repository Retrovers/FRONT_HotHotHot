const routes = [
    { path: '/', component: HomeController},
    { path : '/maison', component : MaisonController}
]

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    const path = parseLocation();
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    let controller = new component
    controller.load()
  };