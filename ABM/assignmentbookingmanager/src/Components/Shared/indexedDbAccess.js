import { openDB } from "idb"
import { uiDbSettings } from "../../configLocalDb"

export async function getDbInstance() {
  return await openDB(uiDbSettings.dbName, uiDbSettings.dbVersion, {
    upgrade(db, oldVersion, newVersion, transaction) {
      Object.entries(uiDbSettings.tables).forEach((entry, index) => {
        console.log(`processing table creation for:${entry[0]}`)
        Object.entries(entry[1]).forEach((names, nameIndex) => {
          const tableName = names[0]
          const tableOptions = names[1]

          if (!db.objectStoreNames.contains(tableName)) {
            const store = db.createObjectStore(tableName, {
              keyPath: tableOptions.keyPath
            })

            if (tableOptions["indexes"]) {
              tableOptions.indexes.forEach((indexName, indexPosition) => {
                store.createIndex(indexName, indexName)
              })
            }// Index creations
          } // not contains store
        })
      })
    } //upgrade
  }) //open db
}
