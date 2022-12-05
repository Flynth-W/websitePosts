export { Model , Connect } from "https://raw.githubusercontent.com/Flynth-W/lib_api/master/mods.ts"
export type { property ,response } from "https://raw.githubusercontent.com/Flynth-W/lib_api/master/mods.ts"

import file from "./env.json" assert { type: "json" }
export const environmet = file

export  { create, verify , getNumericDate, } from "https://deno.land/x/djwt@v2.4/mod.ts";
export type {  Payload, Header} from "https://deno.land/x/djwt@v2.4/mod.ts";

