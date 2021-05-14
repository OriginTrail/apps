import {
    OverrideBundleDefinition,
    OverrideBundleType,
    DefinitionRpc,
    DefinitionRpcSub,
} from "@polkadot/types/types";

// Moonbeam specific rpc methods
export const rpcDefinitions: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = {
    txpool: {
        content: {
            aliasSection: "txpool",
            description:
                "The detailed information regarding Ethereum transactions that are currently in the " +
                "Substrate transaction pool.",
            params: [],
            type: "TxPoolResultContent",
        },
        inspect: {
            aliasSection: "txpool",
            description:
                "Summarized information of the Ethereum transactions that are currently in the Substrate" +
                " transaction pool.",
            params: [],
            type: "TxPoolResultInspect",
        },
        status: {
            aliasSection: "txpool",
            description:
                "The number of Ethereum transaction that are currently in the Substrate transaction pool.",
            params: [],
            type: "TxPoolResultStatus",
        },
    },
};




const starfleetDefinitions = {
    rpc: rpcDefinitions,
    types: [
        {
            minmax: [0, undefined],
            types: {
              "AccountId": "EthereumAccountId",
              "AccountInfo": "AccountInfoWithDualRefCount",
              "ExtrinsicSignature": "EthereumSignature"
            }
        },
    ],
} as OverrideBundleDefinition;


export default starfleetDefinitions;

export const typesBundle = {
    spec: {
        "starfleet-testnet": starfleetDefinitions,
    },
} as OverrideBundleType;
