import {
  GetTokenAllowanceJSONRequest,
  getTokenAllowanceOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetTokenAllowanceResolver  = async (
  req: Request<GetTokenAllowanceJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenAllowanceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenAllowanceOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};