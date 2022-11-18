import {
  UploadFolderJSONRequest,
  uploadFolderOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmUploadFolderResolver  = async (
  req: Request<UploadFolderJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(uploadFolderOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      uploadFolderOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};