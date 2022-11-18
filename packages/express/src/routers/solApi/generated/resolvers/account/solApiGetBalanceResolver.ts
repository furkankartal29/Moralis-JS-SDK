import {
  GetBalanceJSONRequest ,
  getBalanceOperation ,
  GetBalanceJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetBalanceResolver  = async (
  req: Request<GetBalanceJSONRequest >,
  res: Response<GetBalanceJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getBalanceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};