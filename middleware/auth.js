export default function ({ store, error, redirect }) {
  if (store.state.user) {
    return redirect('/admin/home')
  }
  else {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    return redirect('/admin')
  }
}
