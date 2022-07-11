import Rds20140815, * as $Rds20140815 from "@alicloud/rds20140815";
import { Config } from "@alicloud/openapi-client";
import { BASE_CONFIG, MQ_CONFIG } from "../config";

const createRDSClient = (
  accessKeyId?: string,
  accessKeySecret?: string
): Rds20140815 => {
  let config = new Config({
    accessKeyId: accessKeyId || BASE_CONFIG.ACCESS_KEY_ID,
    accessKeySecret: accessKeySecret || BASE_CONFIG.ACCESS_KEY_SECRET,
  });
  config.endpoint = `rds.aliyuncs.com`;
  return new Rds20140815(config);
};

export const getIpList = async () => {
  let client = createRDSClient();
  let describeDBInstanceIPArrayListRequest =
    new $Rds20140815.DescribeDBInstanceIPArrayListRequest({
      DBInstanceId: "rm-bp1000u01x8z883tp",
    });
  const res = await client.describeDBInstanceIPArrayList(
    describeDBInstanceIPArrayListRequest
  );
  return res.body.items;
};

export const addLocalIp2IpList = async (
  securityIps: string,
  DBInstanceIPArrayName = "fuzhou"
) => {
  let client = createRDSClient();
  let modifySecurityIpsRequest = new $Rds20140815.ModifySecurityIpsRequest({
    DBInstanceId: MQ_CONFIG.DBInstanceId,
    DBInstanceIPArrayName,
    securityIps,
  });
  // 复制代码运行请自行打印 API 的返回值
  await client.modifySecurityIps(modifySecurityIpsRequest);
};
