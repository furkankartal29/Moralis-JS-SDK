/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/challenge/request/evm": {
    post: operations["requestChallengeEvm"];
  };
  "/challenge/verify/evm": {
    post: operations["verifyChallengeEvm"];
  };
  "/challenge/request/solana": {
    post: operations["requestChallengeSolana"];
  };
  "/challenge/verify/solana": {
    post: operations["verifyChallengeSolana"];
  };
}

export interface components {
  schemas: {
    EvmChallengeRequestDto: {
      /**
       * Format: hostname
       * @description RFC 4501 dns authority that is requesting the signing.
       * @example defi.finance
       */
      domain: string;
      /**
       * @description EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.
       * @example 1
       * @enum {string}
       */
      chainId:
        | "1"
        | "5"
        | "25"
        | "56"
        | "97"
        | "137"
        | "250"
        | "338"
        | "1337"
        | "43113"
        | "43114"
        | "80001"
        | "11155111";
      /**
       * @description Ethereum address performing the signing conformant to capitalization encoded checksum specified in EIP-55 where applicable.
       * @example 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
       */
      address: string;
      /**
       * @description Human-readable ASCII assertion that the user will sign, and it must not contain `
       * `.
       * @example Please confirm
       */
      statement?: string;
      /**
       * Format: uri
       * @description RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).
       * @example https://defi.finance/
       */
      uri: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      expirationTime?: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      notBefore?: string;
      /**
       * @description List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `
       * - `.
       * @example [
       *   "https://docs.moralis.io/"
       * ]
       */
      resources?: string[];
      /**
       * @description Time in seconds before the challenge is expired
       * @default 15
       * @example 15
       */
      timeout: number;
    };
    EvmChallengeResponseDto: {
      /**
       * @description 17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.
       * @example fRyt67D3eRss3RrXa
       */
      id: string;
      /**
       * @description Message that needs to be signed by the end user
       * @example defi.finance wants you to sign in with your Ethereum account:
       * 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
       *
       * Please confirm
       *
       * URI: https://defi.finance/
       * Version: 1
       * Chain ID: 1
       * Nonce: DbU1DCTmdzR4lg3wi
       * Issued At: 2022-06-12T12:15:31.290Z
       * Expiration Time: 2020-01-01T00:00:00.000Z
       * Not Before: 2020-01-01T00:00:00.000Z
       * Resources:
       * - https://docs.moralis.io/
       */
      message: string;
      /**
       * @description Unique identifier with a length of 66 characters
       * @example 0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1
       */
      profileId: string;
    };
    EvmCompleteChallengeRequestDto: {
      message: string;
      /** @example 0x1234567890abcdef0123456789abcdef1234567890abcdef */
      signature: string;
    };
    EvmCompleteChallengeResponseDto: {
      /**
       * @description 17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.
       * @example fRyt67D3eRss3RrX
       */
      id: string;
      /**
       * Format: hostname
       * @description RFC 4501 dns authority that is requesting the signing.
       * @example defi.finance
       */
      domain: string;
      /**
       * @description EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.
       * @example 1
       * @enum {string}
       */
      chainId:
        | "1"
        | "5"
        | "25"
        | "56"
        | "97"
        | "137"
        | "250"
        | "338"
        | "1337"
        | "43113"
        | "43114"
        | "80001"
        | "11155111";
      /**
       * @description Ethereum address performing the signing conformant to capitalization encoded checksum specified in EIP-55 where applicable.
       * @example 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
       */
      address: string;
      /**
       * @description Human-readable ASCII assertion that the user will sign, and it must not contain `
       * `.
       * @example Please confirm
       */
      statement?: string;
      /**
       * Format: uri
       * @description RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).
       * @example https://defi.finance/
       */
      uri: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      expirationTime?: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      notBefore?: string;
      /**
       * @description List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `
       * - `.
       * @example [
       *   "https://docs.moralis.io/"
       * ]
       */
      resources?: string[];
      /**
       * @description EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.
       * @example 1.0
       */
      version: string;
      /** @example 0x1234567890abcdef0123456789abcdef1234567890abcdef */
      nonce: string;
      /**
       * @description Unique identifier with a length of 66 characters
       * @example 0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1
       */
      profileId: string;
    };
    SolanaChallengeRequestDto: {
      /**
       * Format: hostname
       * @description RFC 4501 dns authority that is requesting the signing.
       * @example defi.finance
       */
      domain: string;
      /**
       * @description The network where Contract Accounts must be resolved.
       * @example mainnet
       * @enum {string}
       */
      network: "mainnet" | "testnet" | "devnet";
      /**
       * @description Solana public key with a length of 32 - 44 characters that is used to perform the signing
       * @example 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
       */
      address: string;
      /**
       * @description Human-readable ASCII assertion that the user will sign, and it must not contain `
       * `.
       * @example Please confirm
       */
      statement?: string;
      /**
       * Format: uri
       * @description RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).
       * @example https://defi.finance/
       */
      uri: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      expirationTime?: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      notBefore?: string;
      /**
       * @description List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `
       * - `.
       * @example [
       *   "https://docs.moralis.io/"
       * ]
       */
      resources?: string[];
      /**
       * @description Time in seconds before the challenge is expired
       * @default 15
       * @example 15
       */
      timeout: number;
    };
    SolanaChallengeResponseDto: {
      /**
       * @description 17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.
       * @example fRyt67D3eRss3RrX
       */
      id: string;
      /**
       * @description Message that needs to be signed by the end user
       * @example defi.finance wants you to sign in with your Solana account:
       * 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
       *
       * I am a third party API
       *
       * URI: http://defi.finance
       * Version: 1
       * Network: mainnet
       * Nonce: PYxxb9msdjVXsMQ9x
       * Issued At: 2022-08-25T11:02:34.097Z
       * Expiration Time: 2022-08-25T11:12:38.243Z
       * Resources:
       * - https://docs.moralis.io/
       */
      message: string;
      /**
       * @description Unique identifier with a length of 66 characters
       * @example 0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1
       */
      profileId: string;
    };
    SolanaCompleteChallengeRequestDto: {
      /**
       * @description Message that needs to be signed by the end user
       * @example defi.finance wants you to sign in with your Solana account:
       * 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
       *
       * I am a third party API
       *
       * URI: http://defi.finance
       * Version: 1
       * Network: mainnet
       * Nonce: PYxxb9msdjVXsMQ9x
       * Issued At: 2022-08-25T11:02:34.097Z
       * Expiration Time: 2022-08-25T11:12:38.243Z
       * Resources:
       * - https://docs.moralis.io/
       */
      message: string;
      /**
       * @description Base58 signature that needs to be used to verify end user
       * @example 2pH9DqD5rve2qV4yBDshcAjWd2y8TqMx8BPb7f3KoNnuLEhE5JwjruYi4jaFaD4HN6wriLz2Vdr32kRBAJmHcyny
       */
      signature: string;
    };
    SolanaCompleteChallengeResponseDto: {
      /**
       * @description 17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.
       * @example fRyt67D3eRss3RrX
       */
      id: string;
      /**
       * Format: hostname
       * @description RFC 4501 dns authority that is requesting the signing.
       * @example defi.finance
       */
      domain: string;
      /**
       * @description The network where Contract Accounts must be resolved.
       * @example mainnet
       * @enum {string}
       */
      network: "mainnet" | "testnet" | "devnet";
      /**
       * @description Solana public key with a length of 32 - 44 characters that is used to perform the signing
       * @example 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
       */
      address: string;
      /**
       * @description Human-readable ASCII assertion that the user will sign, and it must not contain `
       * `.
       * @example Please confirm
       */
      statement?: string;
      /**
       * Format: uri
       * @description RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).
       * @example https://defi.finance/
       */
      uri: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      expirationTime?: string;
      /**
       * Format: date-time
       * @description ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.
       * @example 2020-01-01T00:00:00.000Z
       */
      notBefore?: string;
      /**
       * @description List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `
       * - `.
       * @example [
       *   "https://docs.moralis.io/"
       * ]
       */
      resources?: string[];
      /**
       * @description EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.
       * @example 1.0
       */
      version: string;
      /** @example 0x1234567890abcdef0123456789abcdef1234567890abcdef */
      nonce: string;
      /**
       * @description Unique identifier with a length of 66 characters
       * @example 0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1
       */
      profileId: string;
    };
  };
}

export interface operations {
  requestChallengeEvm: {
    parameters: {};
    responses: {
      /** The back channel challenge containing the id to store on the api and the message to be signed by the user */
      201: {
        content: {
          "application/json": components["schemas"]["EvmChallengeResponseDto"];
        };
      };
    };
    /** Request EVM challenge message. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["EvmChallengeRequestDto"];
      };
    };
  };
  verifyChallengeEvm: {
    parameters: {};
    responses: {
      /** The token to be used to call the third party API from the client */
      201: {
        content: {
          "application/json": components["schemas"]["EvmCompleteChallengeResponseDto"];
        };
      };
    };
    /** Verify EVM challenge message. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["EvmCompleteChallengeRequestDto"];
      };
    };
  };
  requestChallengeSolana: {
    parameters: {};
    responses: {
      /** The back channel challenge containing the id to store on the api and the message to be signed by the user */
      201: {
        content: {
          "application/json": components["schemas"]["SolanaChallengeResponseDto"];
        };
      };
    };
    /** Request Solana challenge message. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["SolanaChallengeRequestDto"];
      };
    };
  };
  verifyChallengeSolana: {
    parameters: {};
    responses: {
      /** The token to be used to call the third party API from the client */
      201: {
        content: {
          "application/json": components["schemas"]["SolanaCompleteChallengeResponseDto"];
        };
      };
    };
    /** Verify Solana challenge message. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["SolanaCompleteChallengeRequestDto"];
      };
    };
  };
}

export interface external {}
