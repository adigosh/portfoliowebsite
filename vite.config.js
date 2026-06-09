import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const page = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: page("./index.html"),
        work: page("./work.html"),
        about: page("./about.html"),
        aerialSeeding: page("./process/aerial-seeding.html"),
        anodicBonding: page("./process/anodic-bonding.html"),
        environmentalChamber: page("./process/environmental-chamber.html"),
        farawave: page("./process/farawave.html"),
        hydrogel: page("./process/hydrogel.html"),
        patientApp: page("./process/patient-app.html"),
        pdms: page("./process/pdms.html"),
        torqueRca: page("./process/torque-rca.html")
      }
    }
  }
});
