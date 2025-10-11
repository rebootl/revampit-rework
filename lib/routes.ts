import fs from "node:fs";
import path from "node:path";
import express from "express";

// Function to create endpoints recursively
export async function createEndpoints(
  app: express.Application,
  routesDir: string,
  baseTemplatePath: string,
  basePath = "",
): Promise<void> {
  const baseTemplateModule = await import(path.resolve(baseTemplatePath));
  const baseTemplate = baseTemplateModule.adminBaseTemplate;

  const files = fs.readdirSync(routesDir);
  // let templateFile: string | undefined;

  // Find the first .js file in the directory
  for (const file of files) {
    const filePath = path.join(routesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      // e.g. './routes/' + 'get.ts'
      const templatePath = path.join(routesDir, file);

      // NOTE: import needs a relative path prefixed with './', or an absolute path
      // path.resolve makes it absolute
      // TODO: error handling
      const templateModule = await import(path.resolve(templatePath));

      if (file === "get.js" || file === "get.ts") {
        // TODO: error handling
        const templateFunction = templateModule.default;

        app.get(basePath, (req: express.Request, res: express.Response) => {
          const content = templateFunction(req, res);
          const html = baseTemplate({ req, content });
          res.send(html);
        });
      } else if (file === "post.js" || file === "post.ts") {
        const f = templateModule.default;
        app.post(basePath, f);
      }
    } // Recursively create endpoints for subdirectories
    else if (stat.isDirectory()) {
      // no await - fire and forget recursion
      // ensure path uses forward slashes for route basepath
      // NOTE: this is for windows compatibility, but it's not tested
      // I'm not sure we really need this
      const nextBase = `${basePath}/${file}`.replace(/\\/g, "/");
      createEndpoints(app, filePath, baseTemplatePath, nextBase);
    }
  }
}
