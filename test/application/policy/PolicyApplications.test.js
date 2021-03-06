const container = require("../../../src/container");
const GetPolicyByUserName = container.resolve("GetPolicyByUserName");

describe("Applications: Test Policy Classes", () => {
	test("Test Get Policy By User Name", async done => {
		const result = await GetPolicyByUserName.get("Manning");
		expect(result).toEqual([
			{
				id: "64cceef9-3a01-49ae-a23b-3761b604800b",
				amountInsured: 1825.89,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-06-01T03:33:32Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "56b415d6-53ee-4481-994f-4bffa47b5239",
				amountInsured: 2301.98,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-12-01T05:53:13Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "5a72ae47-d077-4f74-9166-56a6577e31b9",
				amountInsured: 751.67,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-08-05T04:05:01Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "3a774f4e-0e70-488f-ac9f-ee211c8d5ece",
				amountInsured: 1930.01,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-10-01T09:19:32Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "0eba1179-6155-41b5-bdd8-f80e1ac94cab",
				amountInsured: 1629.72,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-05-03T01:53:34Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "35a0d2f7-37cd-4c21-8dac-fe91b29bd22b",
				amountInsured: 3878.41,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-02-20T04:13:21Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "8a53d72e-c802-42ae-849b-11c6cf550a0d",
				amountInsured: 364.82,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-06-24T12:50:38Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "788307fa-d261-4a9f-8d30-65fc3375617e",
				amountInsured: 1984.56,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-09-12T04:28:09Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "7127398d-55b7-4e80-a336-40530078656b",
				amountInsured: 1736.14,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-08-06T09:30:12Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "fd1e7944-56e2-42c9-896f-d9b4e4f4392c",
				amountInsured: 2769.91,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-11-06T12:04:06Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "f64e92fc-634f-48d2-87e7-bc6a8e3e4978",
				amountInsured: 3177.46,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-05-20T06:21:10Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "85515a6a-686f-45ad-b173-3d44a28856e5",
				amountInsured: 788.92,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-06-05T03:15:35Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "bd640161-19de-4b27-ba61-4974fe027b08",
				amountInsured: 1897.13,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-09-14T02:32:33Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "26e1ea4c-1e0c-4f84-94cb-5ce309399d37",
				amountInsured: 3421.38,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-05-19T04:42:42Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "be4bf877-5a72-4ae2-b8f5-3c79e21fc829",
				amountInsured: 3235.96,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-09-22T03:08:08Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "19d4fa60-6361-424c-bb15-e81d439b3244",
				amountInsured: 3313.59,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-01-12T04:35:00Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "f2ba5655-7335-4316-96ec-0ce56dda8cb2",
				amountInsured: 1375.68,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-12-01T06:09:12Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "d46f642a-cef5-4dd7-9924-d1867b268a97",
				amountInsured: 1790.76,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-09-13T04:51:38Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "ed67ef06-fe03-4f65-8243-443fb4fccda7",
				amountInsured: 3319.97,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-26T12:50:33Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "569d6f59-fec7-48f4-8851-976304cc6b0a",
				amountInsured: 2282.59,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-01-24T06:54:39Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "e3a67b32-57ea-4874-afb7-2a11cb3cf975",
				amountInsured: 3220.16,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-03-07T12:37:54Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "86cf1a7a-f6e9-4049-a096-e93bc7c1b84f",
				amountInsured: 1852.23,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-05-14T10:00:25Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "6661fe7b-213e-4547-8698-2d8fac88c42c",
				amountInsured: 3280.97,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-02-08T10:58:55Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "6305aa29-c423-4abf-82e0-0fdfb958b9c6",
				amountInsured: 2172.69,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-21T03:39:50Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "e8ed8ab0-b3a7-4883-b351-e4ffda286dec",
				amountInsured: 982.12,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-04-15T12:15:35Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "52b0b0c4-9fb4-411a-b553-0ee6d7a4201c",
				amountInsured: 2246.33,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-03-09T08:41:47Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "6fbe8786-0bd4-42a9-9a27-d17e616cf76a",
				amountInsured: 3262.68,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-05-06T08:42:50Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "249957c7-530d-4aa3-babf-a8a8d01c5f5d",
				amountInsured: 900.82,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-02-10T09:12:19Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "12028880-46e4-4dfa-ae10-68ae2786c281",
				amountInsured: 1480.88,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-02-10T11:55:34Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "f49771fe-c330-4847-b8ea-6b55a511447e",
				amountInsured: 2622.07,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-12-27T05:44:36Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "590643d9-719d-4f69-8902-425cd8714e69",
				amountInsured: 2204.88,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-06-30T04:13:56Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "e6e247bd-a632-45ea-8b26-4554548f3fa4",
				amountInsured: 3335.89,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-08-07T06:28:33Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "84d2812f-49be-4a71-8ea8-f24759528a6f",
				amountInsured: 212.84,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-10-21T01:38:01Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "cba07eb3-8264-4391-9dcb-f00495039ff8",
				amountInsured: 1608.55,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-11-12T10:50:26Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "739b369b-9f0d-453d-b71e-5699d09b9627",
				amountInsured: 1250.43,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-06-19T05:11:09Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "400cb6ac-f5a3-4620-8845-459ed5eedca9",
				amountInsured: 2394.88,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-06-06T09:27:20Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "bb79bc43-feb2-41dd-b958-c681379423c6",
				amountInsured: 1925.23,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-08-21T07:51:21Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "06f2e6cd-9b7e-45f5-8c83-b9c04cc15302",
				amountInsured: 1557.44,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-02-08T04:36:57Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "bdea9821-960a-4aee-a1d3-ab20472a67c9",
				amountInsured: 2240.09,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-09T06:34:28Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "3b416a52-fc0a-4919-b799-735026af7274",
				amountInsured: 274.37,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-09-23T02:58:03Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "fc6b9b8a-a58d-47d7-9a53-690d71195c01",
				amountInsured: 945.05,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-09-01T01:44:40Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "02ab1bc2-6e42-40b4-b7db-f3d3864beb5a",
				amountInsured: 1167.91,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-25T11:31:47Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "cd1c00a4-f1d1-4429-af8b-10dcf818f616",
				amountInsured: 2690.18,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-05-20T05:45:32Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "704d7042-4808-4d2e-ba15-46ded11bee5f",
				amountInsured: 1033.35,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-02-03T11:11:52Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "0e1cc872-0ca8-4bc0-ad4a-431b4df88289",
				amountInsured: 2952.32,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-14T10:51:33Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "a95cc511-6ce2-42a9-9bfc-0e9dff677878",
				amountInsured: 862.57,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-02T02:59:43Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "cf3f9f20-0b88-4daa-9e79-54d8026c8cdd",
				amountInsured: 2764.76,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-03-06T07:04:53Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "780a0f14-203f-4ce7-a416-11cffed8612a",
				amountInsured: 2932.16,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-11-05T08:23:41Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "9ceae17e-25e8-45c7-813b-568af4d0c080",
				amountInsured: 681.48,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-04-28T10:35:25Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "4962c4b9-01cc-4cd3-a6c7-0e7b40b55b00",
				amountInsured: 3363.29,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-07-29T08:18:33Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "cfb902f5-b8ce-4eae-a759-f2d97ba89d7b",
				amountInsured: 3703.12,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-02-21T06:28:45Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "abab6322-8133-43c5-a95e-410cee7a77e7",
				amountInsured: 2124.32,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-17T12:31:56Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "93384a0a-7252-4ace-8831-e6fe3772dd92",
				amountInsured: 867.01,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-12-18T07:24:48Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "d99e6f24-be1a-4b9d-9c0e-22218017a6e0",
				amountInsured: 2806.9,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-08-22T12:27:04Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "fc61f7b0-3919-4cf9-b6d4-7237b3aae205",
				amountInsured: 1584.36,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-08-01T10:38:09Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "9188b181-b083-4402-b5a1-1db40f2db8a8",
				amountInsured: 269.24,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-11-14T09:55:06Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "750feb5e-021f-4ef9-8b35-f50984120097",
				amountInsured: 1848.74,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-12-04T11:34:30Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "21cb5d2a-539f-49fd-a192-31723c3b968e",
				amountInsured: 3178.65,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-10-29T08:32:47Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "6a9ab957-3cfb-4ea4-9260-7657b7b4476c",
				amountInsured: 2243,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-19T11:04:05Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "c6527323-0240-42e6-9f8f-805f4a211c91",
				amountInsured: 1880.66,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-12-25T04:25:29Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "552737e8-57aa-44e4-8592-d42630ea977c",
				amountInsured: 3858.13,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-05-06T06:18:31Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "97ea2646-88be-487c-b8be-17c69eefb77a",
				amountInsured: 1418.12,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-03-12T10:51:10Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "8f81db8d-626d-47dd-9599-84df422608d5",
				amountInsured: 1065.49,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-04-06T05:03:32Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "aeee4a0d-2d14-4c22-aae9-b4f1be58acdb",
				amountInsured: 2011.28,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-07-10T05:57:51Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "300d9989-50ca-4589-8521-6932e7e45677",
				amountInsured: 2481.73,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-09-12T07:52:01Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "db6641a7-b24a-48f6-ab0b-a7beac3235ae",
				amountInsured: 658.77,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-06-29T10:17:41Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "eb52b5f5-2c5a-4684-8043-3ab222f7e893",
				amountInsured: 259.76,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-11-14T05:24:50Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "df3f2950-9886-410a-8508-01bb5e125eb7",
				amountInsured: 647.05,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-08-10T01:11:02Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "70a5765c-26f4-4820-afeb-7ea124d14b74",
				amountInsured: 393.61,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-03-28T11:37:44Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "aad066cc-30ba-4bde-80be-a7e423631291",
				amountInsured: 3669.14,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-01-30T05:16:28Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "580b1383-d1d0-4f99-9d17-97abc4ae1106",
				amountInsured: 2727.38,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-03-25T08:05:41Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "c2a0125a-8652-418c-91b6-fd6d91a686ab",
				amountInsured: 2031.89,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-08-24T01:09:19Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "b6bf2d5b-0666-4f58-982d-c56e91201f26",
				amountInsured: 2773.76,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-02-14T04:47:55Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "ab4e2069-67ff-46ff-a84f-3cb2b15db9ae",
				amountInsured: 3476.07,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-01-14T12:02:21Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "8c571eba-cba3-4905-a664-ff7f8dea664c",
				amountInsured: 3600.24,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-04-21T02:46:45Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "0603ae76-d434-43bb-bdec-637bed0c9078",
				amountInsured: 1389.84,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-10-27T04:46:25Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "5851f1f8-aa2d-40ad-acc5-07d262bae66f",
				amountInsured: 1939.66,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-04-27T02:17:40Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "2c0cec3a-78ef-45e2-bb42-5c3d80dc5f83",
				amountInsured: 2290.22,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-20T07:54:43Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "5d6190ed-3c74-4673-ba70-f57d8fbd4b8d",
				amountInsured: 1895.28,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-01-19T11:09:39Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "0d4bc5cf-4677-4876-bad3-c7064ebaf3b2",
				amountInsured: 2568.74,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-07-30T10:50:35Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "1ffcfab7-60fc-4954-82ee-b3c365f2a054",
				amountInsured: 3457.34,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-11-10T07:40:59Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "77447968-1686-4c16-883d-9282bae19b20",
				amountInsured: 3218.62,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-03-08T08:18:34Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "c8616e33-ab21-4914-a828-832dff818c0b",
				amountInsured: 2571.43,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-11-05T11:02:46Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "65e5205b-3bdd-4da0-a169-60bcc1a6227d",
				amountInsured: 2084.57,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-29T05:46:35Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "42ab2da6-a60a-4284-ac1b-163984a9db32",
				amountInsured: 662.46,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-28T06:07:33Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "9a4aa259-6693-48ff-b751-83ed5ed20516",
				amountInsured: 758.31,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-03-31T02:36:33Z",
				installmentPayment: false,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "8b089843-48e0-4c9d-a275-07e925184ab5",
				amountInsured: 1257.59,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-03-19T01:10:46Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "dde33fe3-b04c-4d4b-994f-c823e4908be5",
				amountInsured: 904.86,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2015-11-19T05:37:56Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "f5461f58-32d4-4834-b896-63b69e14c97c",
				amountInsured: 3190.76,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-01-10T05:30:17Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "b2f57230-96d6-403f-be65-139d016cd318",
				amountInsured: 2578.35,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2016-07-06T10:14:09Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			},
			{
				id: "facd2c78-65f0-4a49-8a66-560109d263bc",
				amountInsured: 795.83,
				email: "inesblankenship@quotezart.com",
				inceptionDate: "2014-10-18T07:12:05Z",
				installmentPayment: true,
				clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
			}
		]);
		done();
	});
});
