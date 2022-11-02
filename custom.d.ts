import { decl } from "postcss";
import { NitroAppPlugin, NitroApp } from "nitropack";

declare module "*.svg" {
  const content: string;
  export default content;
}
