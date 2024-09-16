import { GetAllTransactions } from 'api'
import React from 'react'
import { useEffect } from 'react'

const Transactions = () => {

    useEffect(() => {
        GetAllTransactions()
    }, [])
    

  return (
    <div>Transactions</div>
  )
}

export default Transactions