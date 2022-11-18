import {
  GetPairAddressJSONRequest,
  getPairAddressOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetPairAddressResolver  = async (
  req: Request<GetPairAddressJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getPairAddressOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getPairAddressOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};