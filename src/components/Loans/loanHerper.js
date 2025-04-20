import { returnLoanRequest } from "../../axios/Loans"

export const returnLoad = async (loanId) => {
    try {
      const response = await returnLoanRequest(loanId)
      if(response){
        return true
      }
      return false
    } catch (error) {
     console.debug(error)
     return false
    }
}
