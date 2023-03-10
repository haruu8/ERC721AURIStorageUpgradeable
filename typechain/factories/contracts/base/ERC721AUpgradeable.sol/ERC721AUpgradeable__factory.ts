/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721AUpgradeable,
  ERC721AUpgradeableInterface,
} from "../../../../contracts/base/ERC721AUpgradeable.sol/ERC721AUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061150b806100206000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb4651461026f578063b88d4fde1461028f578063c87b56dd146102a2578063e985e9c5146102c257600080fd5b80636352211e1461021a57806370a082311461023a57806395d89b411461025a57600080fd5b8063095ea7b3116100bb578063095ea7b31461017e57806318160ddd1461019357806323b872dd146101f457806342842e0e1461020757600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd3660046112d0565b610337565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c61041c565b60405161010e91906113e2565b34801561014557600080fd5b50610159610154366004611308565b6104d0565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b61019161018c3660046112a7565b610559565b005b34801561019f57600080fd5b507f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c41547f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4054035b60405190815260200161010e565b61019161020236600461113f565b610569565b61019161021536600461113f565b6108f4565b34801561022657600080fd5b50610159610235366004611308565b610914565b34801561024657600080fd5b506101e66102553660046110f3565b61091f565b34801561026657600080fd5b5061012c6109c0565b34801561027b57600080fd5b5061019161028a36600461126d565b6109f1565b61019161029d36600461117a565b610aa7565b3480156102ae57600080fd5b5061012c6102bd366004611308565b610b17565b3480156102ce57600080fd5b506101026102dd36600461110d565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832093909416825291909152205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614806103ca57507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b8061041657507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60607f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40600201805461044d90611421565b80601f016020809104026020016040519081016040528092919081815260200182805461047990611421565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b5050505050905090565b60006104db82610bc2565b610511576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c46602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b61056582826001610c41565b5050565b600061057482610d9b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105db576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c466020526040902080543380821473ffffffffffffffffffffffffffffffffffffffff8816909114176106b65773ffffffffffffffffffffffffffffffffffffffff861660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832033845290915290205460ff166106b6576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610703576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561070e57600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c45602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c02000000000000000000000000000000000000000000000000000000001760008581527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260409020557c02000000000000000000000000000000000000000000000000000000008316610891576001840160008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c44602052604090205461088f577f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4054811461088f5760008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c44602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61090f83838360405180602001604052806000815250610aa7565b505050565b600061041682610d9b565b600073ffffffffffffffffffffffffffffffffffffffff821661096e576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c45602052604090205467ffffffffffffffff1690565b60607f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40600301805461044d90611421565b3360008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610ab2848484610569565b73ffffffffffffffffffffffffffffffffffffffff83163b15610b1157610adb84848484610ede565b610b11576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6060610b2282610bc2565b610b58576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b6f60408051602081019091526000815290565b9050805160001415610b905760405180602001604052806000815250610bbb565b80610b9a84611063565b604051602001610bab92919061136a565b6040516020818303038152906040525b9392505050565b60007f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40548210801561041657505060009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b6000610c4c83610914565b90508115610cfa573373ffffffffffffffffffffffffffffffffffffffff821614610cfa5773ffffffffffffffffffffffffffffffffffffffff811660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832033845290915290205460ff16610cfa576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c46602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff88811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b60008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260409020547c01000000000000000000000000000000000000000000000000000000008116610eac5780610ea7577f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40548210610e4c576040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c44602052604090205480610ea757610e4c565b919050565b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290610f39903390899088908890600401611399565b602060405180830381600087803b158015610f5357600080fd5b505af1925050508015610fa1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610f9e918101906112ec565b60015b611015573d808015610fcf576040519150601f19603f3d011682016040523d82523d6000602084013e610fd4565b606091505b50805161100d576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a90048061109a5761109f565b61107d565b508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ea757600080fd5b600060208284031215611104578081fd5b610bbb826110cf565b6000806040838503121561111f578081fd5b611128836110cf565b9150611136602084016110cf565b90509250929050565b600080600060608486031215611153578081fd5b61115c846110cf565b925061116a602085016110cf565b9150604084013590509250925092565b6000806000806080858703121561118f578081fd5b611198856110cf565b93506111a6602086016110cf565b925060408501359150606085013567ffffffffffffffff808211156111c9578283fd5b818701915087601f8301126111dc578283fd5b8135818111156111ee576111ee611475565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561123457611234611475565b816040528281528a602084870101111561124c578586fd5b82602086016020830137918201602001949094529598949750929550505050565b6000806040838503121561127f578182fd5b611288836110cf565b91506020830135801515811461129c578182fd5b809150509250929050565b600080604083850312156112b9578182fd5b6112c2836110cf565b946020939093013593505050565b6000602082840312156112e1578081fd5b8135610bbb816114a4565b6000602082840312156112fd578081fd5b8151610bbb816114a4565b600060208284031215611319578081fd5b5035919050565b600081518084526113388160208601602086016113f5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000835161137c8184602088016113f5565b8351908301906113908183602088016113f5565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526113d86080830184611320565b9695505050505050565b602081526000610bbb6020830184611320565b60005b838110156114105781810151838201526020016113f8565b83811115610b115750506000910152565b600181811c9082168061143557607f821691505b6020821081141561146f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146114d257600080fd5b5056fea26469706673582212200e181065127b1b2fdbf50cad3f8f0ced6af9f2e693963aa79627b058a55b222764736f6c63430008040033";

type ERC721AUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AUpgradeable__factory extends ContractFactory {
  constructor(...args: ERC721AUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721AUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721AUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721AUpgradeable {
    return super.attach(address) as ERC721AUpgradeable;
  }
  override connect(signer: Signer): ERC721AUpgradeable__factory {
    return super.connect(signer) as ERC721AUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AUpgradeableInterface {
    return new utils.Interface(_abi) as ERC721AUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721AUpgradeable;
  }
}
