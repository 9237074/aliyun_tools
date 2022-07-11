import { BASE_CONFIG, MQ_CONFIG, RDS_CONFIG } from '../config'

export async function test() {
  console.log("env1", process.env.ACCESS_KEY_ID);
  console.log({ BASE_CONFIG, MQ_CONFIG, RDS_CONFIG });
  console.log("test", Date().toString());
}
