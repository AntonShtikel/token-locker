import { IConfig, NodeEnvTypes } from '../types/interface';
import applicationProductionConfig from './production';

const applicationStagingConfig: IConfig = {
  ...applicationProductionConfig,
  nodeEnv: NodeEnvTypes.staging,
};

export default applicationStagingConfig;
