// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import {IProxyRegistry} from "./external/opensea/IProxyRegistry.sol";
import {ERC721AURIStorageUpgradeable} from "./base/ERC721AURIStorageUpgradeable.sol";
import {ERC721AUpgradeable} from "./base/ERC721AUpgradeable.sol";
import {IERC721AUpgradeable} from "erc721a-upgradeable/contracts/interfaces/IERC721AUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

/**
 * @title NFT
 * NFT - A shared contract for issuing tokens to support achievers
 */
contract NFT is
    ERC721AURIStorageUpgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    /**
     * @notice Initialize the auction house and base contracts,
     * populate configuration values, and pause the contract.
     * @dev This function can only be called once.
     */
    function initialize() external initializer {
        __ERC721A_init("Sample NFT", "NFT");
        __ERC721AURIStorageUpgradeable_init();
        __ReentrancyGuard_init();
        __Ownable_init();
    }
}
