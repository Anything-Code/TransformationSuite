export default function ({ store, error, redirect }) {
  if (!store.state.authUser) {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    return redirect('/admin')
  }
}
