import {ToastAndroid} from 'react-native';
import {
  GET_PORTFOLIO_STOCKS,
  REMOVE_PORTFOLIO_STOCK,
  SET_PORTFOLIO_STOCK,
  SORT_PORTFOLIO_STOCKS,
} from '../constants';

const initialState = [
  {
    symbol: 'ONGC',
    name: 'OIL & NATURAL GAS CORPORATION LIMITED',
    icon: 'https://pluspng.com/img-png/ongc-png--1102.jpg',
    price: 24,
    change: '212 (15%)',
    changeInPercent: 15,
    fundamentals: {
      market_cap: '93 CR',
      PE_Ratio: '55',
      PB_Ratio: '2.3',
      Industry_PE: '21.3',
      Debt_to_eq: '0.33',
      ROE: '9%',
      EPS: '9.3',
      Div_yield: '1.99%',
      Book_value: '39.3',
      Face_value: '10',
    },
  },
];

export const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO_STOCK:
      ToastAndroid.show('Stock Added Successfully', ToastAndroid.SHORT);
      return [...state, action.stock];
    case REMOVE_PORTFOLIO_STOCK:
      state = state.filter(s => s.symbol !== action.stock.symbol);
      ToastAndroid.show('Stock remove Successfully', ToastAndroid.SHORT);
      return state;
    case SORT_PORTFOLIO_STOCKS:
      if (action.type == 'AtoZ') {
        // state = state.filter(s => s.symbol !== action.stock.symbol);
        state = state.slice().sort((a, b) => a.symbol.localeCompare(b.symbol));
        co;
        return state;
      }
    default:
      return state;
  }
};
