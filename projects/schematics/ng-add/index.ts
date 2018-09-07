import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getProjectFromWorkspace, getWorkspace, Workspace } from '../util/config';
import { addPackageToPackageJson } from '../util/package';
import { Schema } from './schema';

const pkg = require('../../package.json');

export default function (options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : updatePackageJson(),
    options && !options.skipPackageJson ? installNodeDeps() : noop(),
    addTheme(options),
  ]);
}

function updatePackageJson(): (host: Tree) => Tree {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', '@ngx-kit/core', pkg.peerDependencies['@ngx-kit/core']);
    addPackageToPackageJson(host, 'dependencies', '@ngx-kit/sula', pkg.version);
    return host;
  };
}

function installNodeDeps(): (host: Tree, context: SchematicContext) => void {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export function addTheme(options: Schema): (host: Tree) => Tree {
  return function (host: Tree): Tree {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    if (project && project.architect) {
      addStyleToTarget(project.architect.build, host, workspace, 'node_modules/@ngx-kit/sula/themes/main.css');
    }
    return host;
  };
}

function addStyleToTarget(target: any, host: Tree, workspace: Workspace, asset: string, exclude: string = ''): void {
  const styleEntry = asset;
  if (!target.options) {
    target.options = {styles: [styleEntry]};
  } else if (!target.options.styles) {
    target.options.styles = [styleEntry];
  } else {
    const existingStyles = target.options.styles.map((s: any) => typeof s === 'string' ? s : s.input);
    const hasGivenTheme = existingStyles.find((s: any) => s.includes(asset));
    if (exclude) {
      const removeIndex = target.options.styles.indexOf(exclude);
      if (removeIndex >= 0) {
        target.options.styles.splice(removeIndex, 1);
      }
    }
    if (!hasGivenTheme) {
      target.options.styles.splice(0, 0, styleEntry);
    }
  }
  host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
