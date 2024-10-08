import { CHAIN_IDS } from "constants/networkConfig";
import { AddressType } from "constants/types";

export type ContractInfo = {
  Proxy: string;
  Implementation: string;
  Block: number;
};

export type Contracts = {
  Token: ContractInfo;
  AuctionHouse: ContractInfo;
  Governor: ContractInfo;
  Treasury: ContractInfo;
  Metadata: ContractInfo;
};

export const contracts: Contracts = {
  Token: {
    Proxy: "0x880Fb3Cf5c6Cc2d7DFC13a993E839a9411200C17",
    Implementation: "0xe77e4fa003b2cc07ad10a9d1db216cae5ed14d3f",
    Block: 9893263
  },
  AuctionHouse: {
    Proxy: "0x494eaa55ecf6310658b8fc004b0888dcb698097f",
    Implementation: "0xf958872ceb73bA7d0acA0c7a9905119BCb371dEC",
    Block: 9893263
  },
  Governor: {
    Proxy: "0x3dd4e53a232b7b715c9ae455f4e732465ed71b4c",
    Implementation: "0x9Af9f31BAE469c13528B458E007A7EA965BD14bB",
    Block: 9893263
  },
  Treasury: {
    Proxy: "0x72ad986ebac0246d2b3c565ab2a1ce3a14ce6f88",
    Implementation: "0xaf75199b91AEDBe2B99476899782C5Bb507393E0",
    Block: 9893263
  },
  Metadata: {
    Proxy: "0xdc9799d424ebfdcf5310f3bad3ddcce3931d4b58",
    Implementation: "0xB4Ca85D61f7fcCe0d176Fdb743860daBF3FC03f9",
    Block: 1991576
  }
};

export type L2ChainType = CHAIN_IDS.BASE | CHAIN_IDS.BASE_SEPOLIA;

export const PUBLIC_MANAGER_ADDRESS = {
  [CHAIN_IDS.ETHEREUM]: "0xd310a3041dfcf14def5ccbc508668974b5da7174" as AddressType,
  [CHAIN_IDS.BASE]: "0x3ac0e64fe2931f8e082c6bb29283540de9b5371c" as AddressType
};

export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000" as AddressType;
