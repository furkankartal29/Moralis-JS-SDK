import { operations as evmOperations } from '@moralisweb3/common-evm-utils';

export class ExpressServerGenerator {
  public static urlPathPatternToExpressPath = (urlPattern: string) => {
    return urlPattern.replaceAll(/\{/g, ':').replaceAll(/\}/g, '');
  };

  public get actions() {
    // evmOperations[0].urlPathPattern
  }
}
