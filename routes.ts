import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

import { baseTemplate } from './templates/base.js';

// Function to create endpoints recursively
export async function createEndpoints(app: express.Application, routesDir: string, basePath = ''): Promise<void> {

  const files = fs.readdirSync(routesDir);
  let templateFile: string | undefined;

  // Find the first .js file in the directory
  for (const file of files) {
    if (path.extname(file) === '.js') {
      templateFile = file;
      break;
    }
  }

  if (templateFile) {
    // e.g. './routes/' + 'page.js'
    const templatePath = path.join(routesDir, templateFile);

    // NOTE: import needs a relative path prefixed with './', or an absolute path
    // path.resolve makes it absolute
    // TODO: error handling
    const templateModule = await import(path.resolve(templatePath));

    // TODO: error handling
    const templateFunction = templateModule.pageContent;

    app.get(basePath, (req: express.Request, res: express.Response) => {
      const content = templateFunction(req);
      const html = baseTemplate({ content, req });
      res.send(html);
    });
  }

  // Recursively create endpoints for subdirectories
  files.forEach((file) => {
    const filePath = path.join(routesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // no await - fire and forget recursion
      // ensure path uses forward slashes for route basepath
      // NOTE: this is for windows compatibility, but it's not tested
      // I'm not sure we really need this
      const nextBase = `${basePath}/${file}`.replace(/\\/g, '/');
      createEndpoints(app, filePath, nextBase);
    }
  });
}
