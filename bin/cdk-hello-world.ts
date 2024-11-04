#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RepositoryStack } from '../lib/repository-stack'
import { InfraStructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();

const repoStack = new RepositoryStack(app, "repoStack", {
  // env: { account, region },
})
new InfraStructureStack(app, 'InfraStructureStack', repoStack.repository, {
});