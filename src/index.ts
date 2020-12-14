import app from "./server";

const port = process.env.PORT || 8080;

// Listen on the appropriate port
app.listen(port, () => {
  app._router.stack
    .filter((r) => r.route)
    .forEach((r) => {
      console.info(
        `Mapped Route [${r.route.stack[0].method.toUpperCase()}] ${
          r.route.path
        }`
      );
    });

  console.log(`\nServer running on port ${port}`);
});
