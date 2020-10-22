export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => {
  return {
    type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    payload:{amountOfBYN,amountOfCurrency}
  }
};

export type ChangeAction = ReturnType<typeof ChangeActionAC>

export const ChangeActionAC = (isBuying: boolean) => {
  return {
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    payload:{isBuying}
  }
};

export type ChangeCurrentCurrencyType = ReturnType<typeof changeCurrentCurrencyAC>
  
export const changeCurrentCurrencyAC = (currentCurrency: string) => {
  return {
    type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload:{currentCurrency}
  }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
