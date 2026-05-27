import { app } from "./src/app.js";
import { connectDb } from "./src/config/db.js";
import { env } from "./src/config/env.js";

async function bootstrap() {
  await connectDb();

  app.listen(env.PORT, () => {
    console.log(`TravelAura API listening on http://127.0.0.1:${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start TravelAura API", error);
  process.exit(1);
});
