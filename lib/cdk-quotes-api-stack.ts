import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import * as apigetway from 'aws-cdk-lib/aws-apigateway';

export class CdkQuotesApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const getQuotes = new Function(this, 'getQuotesLambda', {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      handler: 'getQuotes.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas'))
    });
    
    // create api gateway api
    const api = new RestApi(this, 'quotes-api', {
      description: ' quotes Api',
    });
   
    // define the path call api
    const mainPath = api.root.addResource("quotes");
    mainPath.addMethod("GET", new LambdaIntegration(getQuotes)); 
    
    // Enable CORS on the resource
    mainPath.addCorsPreflight({
      allowOrigins: ['*'],
      allowMethods: ['GET'],
    });
  }
}
