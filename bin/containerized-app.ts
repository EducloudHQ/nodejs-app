#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RepositoryStack } from '../lib/repository-stack'
import { ContainerizedAppStack } from '../lib/containerized-app-stack';

const app = new cdk.App();

const repoStack = new RepositoryStack(app, "repoStack", {
  // env: { account, region },
})
new ContainerizedAppStack(app, 'InfraStructureStack', repoStack.repository, {
});