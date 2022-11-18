import {
  GetPortfolioJSONRequest ,
  getPortfolioOperation ,
  GetPortfolioJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetPortfolioResolver  = async (
  req: Request<GetPortfolioJSONRequest >,
  res: Response<GetPortfolioJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getPortfolioOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};