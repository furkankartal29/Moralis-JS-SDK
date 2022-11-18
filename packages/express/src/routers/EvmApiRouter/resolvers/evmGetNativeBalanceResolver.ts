import {
  GetNativeBalanceJSONRequest,
  getNativeBalanceOperation,
  GetNativeBalanceJSONResponse,
} from '@moralisweb3/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNativeBalanceResolver = async (
  req: Request<GetNativeBalanceJSONRequest>,
  res: Response<GetNativeBalanceJSONResponse>,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNativeBalanceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};
