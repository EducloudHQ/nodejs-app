import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from "aws-cdk-lib/aws-ecr"
import { PREFIX } from './infrastructure-stack';

export class RepositoryStack extends cdk.Stack {
    repository: ecr.Repository;
  
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      const repository = new ecr.Repository(this, "Repository", { repositoryName: `${PREFIX}-repository`, 
        removalPolicy: cdk.RemovalPolicy.DESTROY, });
      this.repository = repository;
    }
  }