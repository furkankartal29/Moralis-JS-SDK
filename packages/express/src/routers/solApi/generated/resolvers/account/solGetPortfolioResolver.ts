import {
  GetPortfolioJSONRequest,
  getPortfolioOperation,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solGetPortfolioResolver  = async (
  req: Request<GetPortfolioJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getPortfolioOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getPortfolioOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};