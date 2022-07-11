import { v4 } from "public-ip";
import { test } from "./utils/common.util";
import { addLocalIp2IpList, getIpList } from "./utils/rds.util";
const win: any = window;
win.getIpList = getIpList;
win.test = test
win.getPulbicIpV4 = async () => await v4();
win.addLocalIp2IpList = addLocalIp2IpList;
