export default function auth({ next, store }) {
  if (!store.state.entities.auth.check) {
    return next({
      name: "login",
    });
  }

  return next();
}
