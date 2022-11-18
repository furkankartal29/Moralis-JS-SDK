import { Router } from 'express';
import { 
  evmEndpointWeightsResolver,
  evmGetBlockResolver,
  evmGetContractEventsResolver,
  evmGetContractLogsResolver,
  evmGetContractNFTsResolver,
  evmGetDateToBlockResolver,
  evmGetNativeBalanceResolver,
  evmGetNFTContractMetadataResolver,
  evmGetNFTContractTransfersResolver,
  evmGetNFTLowestPriceResolver,
  evmGetNFTMetadataResolver,
  evmGetNFTOwnersResolver,
  evmGetNFTTokenIdOwnersResolver,
  evmGetNFTTradesResolver,
  evmGetNFTTransfersByBlockResolver,
  evmGetNFTTransfersFromToBlockResolver,
  evmGetNFTTransfersResolver,
  evmGetPairAddressResolver,
  evmGetPairReservesResolver,
  evmGetTokenAllowanceResolver,
  evmGetTokenMetadataBySymbolResolver,
  evmGetTokenMetadataResolver,
  evmGetTokenPriceResolver,
  evmGetTokenTransfersResolver,
  evmGetTransactionResolver,
  evmGetWalletNFTCollectionsResolver,
  evmGetWalletNFTsResolver,
  evmGetWalletNFTTransfersResolver,
  evmGetWalletTokenBalancesResolver,
  evmGetWalletTokenTransfersResolver,
  evmGetWalletTransactionsResolver,
  evmResolveAddressResolver,
  evmResolveDomainResolver,
  evmReSyncMetadataResolver,
  evmRunContractFunctionResolver,
  evmSearchNFTsResolver,
  evmSyncNFTContractResolver,
  evmUploadFolderResolver,
  evmWeb3ApiVersionResolver,
} from './resolvers';
import Moralis from 'moralis'

export class EvmApiRouter {
  constructor(private apiKey: string) {}

  public getRouter() {
    if (!Moralis.Core.isStarted){
      Moralis.start({ apiKey: this.apiKey })
    }

    const router = Router();

    router.post('/info/endpointWeights', evmEndpointWeightsResolver)
    router.post('/block/:blockNumberOrHash', evmGetBlockResolver)
    router.post('/:address/events', evmGetContractEventsResolver)
    router.post('/:address/logs', evmGetContractLogsResolver)
    router.post('/nft/:address', evmGetContractNFTsResolver)
    router.post('/dateToBlock', evmGetDateToBlockResolver)
    router.post('/:address/balance', evmGetNativeBalanceResolver)
    router.post('/nft/:address/metadata', evmGetNFTContractMetadataResolver)
    router.post('/nft/:address/transfers', evmGetNFTContractTransfersResolver)
    router.post('/nft/:address/lowestprice', evmGetNFTLowestPriceResolver)
    router.post('/nft/:address/:tokenId', evmGetNFTMetadataResolver)
    router.post('/nft/:address/owners', evmGetNFTOwnersResolver)
    router.post('/nft/:address/:tokenId/owners', evmGetNFTTokenIdOwnersResolver)
    router.post('/nft/:address/trades', evmGetNFTTradesResolver)
    router.post('/block/:blockNumberOrHash/nft/transfers', evmGetNFTTransfersByBlockResolver)
    router.post('/nft/transfers', evmGetNFTTransfersFromToBlockResolver)
    router.post('/nft/:address/:token_id/transfers', evmGetNFTTransfersResolver)
    router.post('/:token0Address/:token1Address/pairAddress', evmGetPairAddressResolver)
    router.post('/:pairAddress/reserves', evmGetPairReservesResolver)
    router.post('/erc20/:address/allowance', evmGetTokenAllowanceResolver)
    router.post('/erc20/metadata/symbols', evmGetTokenMetadataBySymbolResolver)
    router.post('/erc20/metadata', evmGetTokenMetadataResolver)
    router.post('/erc20/:address/price', evmGetTokenPriceResolver)
    router.post('/erc20/:address/transfers', evmGetTokenTransfersResolver)
    router.post('/transaction/:transactionHash', evmGetTransactionResolver)
    router.post('/:address/nft/collections', evmGetWalletNFTCollectionsResolver)
    router.post('/:address/nft', evmGetWalletNFTsResolver)
    router.post('/:address/nft/transfers', evmGetWalletNFTTransfersResolver)
    router.post('/:address/erc20', evmGetWalletTokenBalancesResolver)
    router.post('/:address/erc20/transfers', evmGetWalletTokenTransfersResolver)
    router.post('/:address', evmGetWalletTransactionsResolver)
    router.post('/resolve/:address/reverse', evmResolveAddressResolver)
    router.post('/resolve/:domain', evmResolveDomainResolver)
    router.post('/nft/:address/:tokenId/metadata/resync', evmReSyncMetadataResolver)
    router.post('/:address/function', evmRunContractFunctionResolver)
    router.post('/nft/search', evmSearchNFTsResolver)
    router.post('/nft/:address/sync', evmSyncNFTContractResolver)
    router.post('/ipfs/uploadFolder', evmUploadFolderResolver)
    router.post('/web3/version', evmWeb3ApiVersionResolver)
  
    return router;
  }
}