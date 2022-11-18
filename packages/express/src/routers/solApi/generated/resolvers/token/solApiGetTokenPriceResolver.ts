import {
  GetTokenPriceJSONRequest ,
  getTokenPriceOperation ,
  GetTokenPriceJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetTokenPriceResolver  = async (
  req: Request<GetTokenPriceJSONRequest >,
  res: Response<GetTokenPriceJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenPriceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};