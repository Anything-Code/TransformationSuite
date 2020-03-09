export default function ({ store, error, route, redirect }) {
  if (store.state.user) {
    if (route.path === '/admin') {
      return redirect('/admin/home')
    }
  }
  else {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    if (route.path !== '/admin') {
      return redirect('/admin')
    }
  }
}
