import type { Request, Response } from "express";

import { baseTemplate } from "../../templates/base.js";
import template from "./template.ts";

export default (req: Request, res: Response) => {
  const content = template();

  const html = baseTemplate({ content, req });
  res.send(html);
};
