// This file is auto-generated, don't edit it
import R_kvstore20150101, * as $R_kvstore20150101 from "@alicloud/r-kvstore20150101";
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import OpenApi, * as $OpenApi from "@alicloud/openapi-client";
import Util, * as $Util from "@alicloud/tea-util";
import { BASE_CONFIG, RDS_CONFIG } from "../config";

const createRedisClient = function (
  accessKeyId?: string,
  accessKeySecret?: string
): R_kvstore20150101 {
  let config = new $OpenApi.Config({
    accessKeyId: accessKeyId || BASE_CONFIG.ACCESS_KEY_ID,
    accessKeySecret: accessKeySecret || BASE_CONFIG.ACCESS_KEY_SECRET,
  });
  config.endpoint = `r-kvstore.aliyuncs.com`;
  return new R_kvstore20150101(config);
};

export async function getRedisWhiteList() {
  let client = createRedisClient();
  let describeSecurityIpsRequest =
    new $R_kvstore20150101.DescribeSecurityIpsRequest({
      instanceId: RDS_CONFIG.RedisInstanceId,
    });
  let runtime = new $Util.RuntimeOptions({});
  try {
    // 复制代码运行请自行打印 API 的返回值
    return await client.describeSecurityIpsWithOptions(
      describeSecurityIpsRequest,
      runtime
    );
  } catch (error) {
    // 如有需要，请打印 error
    Util.assertAsString(error.message);
  }
}
