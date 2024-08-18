import { IConfig, NodeEnvTypes } from '../types/interface';
import applicationProductionConfig from './production';

const applicationSandboxConfig: IConfig = {
  ...applicationProductionConfig,
  nodeEnv: NodeEnvTypes.sandbox,
};

export default applicationSandboxConfig;
