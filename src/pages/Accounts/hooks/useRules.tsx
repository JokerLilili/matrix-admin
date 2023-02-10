// 查询账号列表
export async function getList() {
	return [
		{
			id: 1,
			platform: "AZURE_EA",
			account: "云平台_1",
			taxRate: 6,
			eaContractNum: "eaContractNum_1",
			secretKey: "secretKey_1",
			validDate: "2023-01-29",
			createTime: "2022-10-13",
			cloudImg: "/images/AZURE_EA.png",
		},
		{
			id: 2,
			platform: "AWS",
			account: "云平台_2",
			taxRate: 6,
			eaContractNum: "eaContractNum_2",
			secretKey: "secretKey_2",
			validDate: "2023-01-29",
			createTime: "2022-10-13",
			cloudImg: "/images/AWS.png",
		},
		{
			id: 3,
			platform: "ALI",
			account: "云平台_3",
			taxRate: 6,
			eaContractNum: "eaContractNum_3",
			secretKey: "secretKey_3",
			validDate: "2023-01-29",
			createTime: "2022-10-13",
			cloudImg: "/images/ALI.png",
		},
		{
			id: 4,
			platform: "AZURE_EA",
			account: "云平台_4",
			taxRate: 6,
			eaContractNum: "eaContractNum_4",
			secretKey: "secretKey_4",
			validDate: "2023-01-29",
			createTime: "2022-10-13",
			cloudImg: "/images/AZURE_EA.png",
		},
		{
			id: 5,
			platform: "ALI",
			account: "云平台_5",
			taxRate: 6,
			eaContractNum: "eaContractNum_5",
			secretKey: "secretKey_5",
			validDate: "2023-01-29",
			createTime: "2022-10-13",
			cloudImg: "/images/ALI.png",
		},
	];
}

// 新增账号
export async function addList(data: any) {
	return true;
}

// 修改账号
export async function editList(data: any) {
	return true;
}

// 删除账号
export async function delList(id: number) {
	return true;
}
