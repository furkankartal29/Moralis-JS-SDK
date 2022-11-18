import { Router } from 'express';
import { 
  solGetBalanceResolver,
  solGetNFTsResolver,
  solGetPortfolioResolver,
  solGetSPLResolver,
  solGetNFTMetadataResolver,
  solGetTokenPriceResolver,
} from './resolvers';
import Moralis from 'moralis'

export class SolApiRouter {
  constructor(private apiKey: string) {}

  public getRouter() {
    if (!Moralis.Core.isStarted){
      Moralis.start({ apiKey: this.apiKey })
    }

    const router = Router();

    router.post('/account/:network/:address/balance', solGetBalanceResolver)
    router.post('/account/:network/:address/nft', solGetNFTsResolver)
    router.post('/account/:network/:address/portfolio', solGetPortfolioResolver)
    router.post('/account/:network/:address/tokens', solGetSPLResolver)
    router.post('/nft/:network/:address/metadata', solGetNFTMetadataResolver)
    router.post('/token/:network/:address/price', solGetTokenPriceResolver)
  
    return router;
  }
}