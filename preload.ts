import * as publicIp from "public-ip";
import Rds20140815, * as $Rds20140815 from "@alicloud/rds20140815";
import * as $OpenApi from "@alicloud/openapi-client";

const _config = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  // rds实例ID
  DBInstanceId: process.env.DBInstanceId,
};

const createClient = (
  accessKeyId?: string,
  accessKeySecret?: string
): Rds20140815 => {
  let config = new $OpenApi.Config({
    accessKeyId: accessKeyId || _config.accessKeyId,
    accessKeySecret: accessKeySecret || _config.accessKeySecret,
  });
  config.endpoint = `rds.aliyuncs.com`;
  return new Rds20140815(config);
};

const getIpList = async () => {
  let client = createClient();
  let describeDBInstanceIPArrayListRequest =
    new $Rds20140815.DescribeDBInstanceIPArrayListRequest({
      DBInstanceId: "rm-bp1000u01x8z883tp",
    });
  const res = await client.describeDBInstanceIPArrayList(
    describeDBInstanceIPArrayListRequest
  );
  return res.body.items;
};

const addLocalIp2IpList = async (
  securityIps: string,
  DBInstanceIPArrayName = "fuzhou"
) => {
  let client = createClient();
  let modifySecurityIpsRequest = new $Rds20140815.ModifySecurityIpsRequest({
    DBInstanceId: _config.DBInstanceId,
    DBInstanceIPArrayName,
    securityIps,
  });
  // 复制代码运行请自行打印 API 的返回值
  await client.modifySecurityIps(modifySecurityIpsRequest);
};

// async function main() {
//   const ipList = await getIpList();
//   const fuzhou = ipList.DBInstanceIPArray.find(
//     (row) => row.DBInstanceIPArrayName === "fuzhou"
//   );
//   const fuzhouSecurityIPList = fuzhou.securityIPList;
//   const localIP = await publicIp.v4();
//   if (fuzhouSecurityIPList.split(",").includes(localIP)) {
//     return new Error(
//       `当前本地 ${localIP} 已经存在 fuzhou分组白名单中 \n ${fuzhouSecurityIPList}`
//     );
//   }
//   const addSecurityIps = fuzhouSecurityIPList + "," + localIP;
//   const res = await addLocalIp2IpList(addSecurityIps);
//   console.log(fuzhou, res);
// }
// try {
//   main().then((err) => {
//     console.log(err);
//   });
// } catch (err) {
//   console.log(err);
// }

const win: any = window;
win.getIpList = getIpList;
win.test = () => {
  console.log("test");
};
win.getPulbicIpV4 = async () => await publicIp.v4();
win.addLocalIp2IpList = addLocalIp2IpList;
