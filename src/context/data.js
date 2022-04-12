import React, { createContext, useState, useEffect } from 'react'
import firebase from '../config/firebaseConfig';
export const DataContext = createContext({})

function DataProvider({ children }) {
  const db = firebase.firestore()

  const [data, setData] = useState({})

  useEffect(() => {
    db.collection("coletas").onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setData(list)
    })
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
