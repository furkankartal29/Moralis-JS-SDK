import {
  GetWalletTokenBalancesJSONRequest,
  getWalletTokenBalancesOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetWalletTokenBalancesResolver  = async (
  req: Request<GetWalletTokenBalancesJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getWalletTokenBalancesOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletTokenBalancesOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};