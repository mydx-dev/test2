import { migrate } from "../tables/Migration";
import { protect } from "../tables/Protection";
import { seed } from "../tables/Seed";

declare global {
    var migrate: () => void;
    var seed: () => void;
    var protect: () => void;
}

globalThis.migrate = migrate;
globalThis.seed = seed;
globalThis.protect = protect;
