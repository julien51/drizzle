import accountsReducer from './accounts/accountsReducer'
import contractsReducer from './contracts/contractsReducer'
import drizzleStatusReducer from './drizzleStatus/drizzleStatusReducer'
import transactionsReducer from './transactions/transactionsReducer'
import transactionStackReducer from './transactions/transactionStackReducer'
import web3Reducer from './web3/web3Reducer'

export default {
  accounts: accountsReducer,
  contracts: contractsReducer,
  drizzleStatus: drizzleStatusReducer,
  transactions: transactionsReducer,
  transactionStack: transactionStackReducer,
  web3: web3Reducer
}
