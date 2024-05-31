import type { Category } from "../../../../Types";
import * as csharp from ".";

export const c: Array<Category> = [
  {
    name: "C#",
    description: "",
    color: "bg-emerald-700",
    children: [csharp.aspnet.default, csharp.net.default],
  },
];
