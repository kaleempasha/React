// if you add anything to the tables object you Must also
// increment the dbVersion. If you don't then it won't
// upgrade the database and add your tables on the next load, throws expection.

export const uiDbSettings = {
  dbName: "uiData",
  dbVersion: 1,
  tables: {
    categories: {
      categories: { name: "categories", keyPath: "id" }
    },
    transModes: {
      tModes: { name: "tModes", keyPath: "id" }
    },
    staff: {
      staff: { name: "staff", keyPath: "id" }
    },
    customer: {
      customer: { name: "customer", keyPath: "id" }
    },
    sku: {
      sku: { name: "sku", keyPath: "id" }
    },
    payment: {
      payment: { name: "payment", keyPath: "id" }
    },
    deliver: {
      deliver: { name: "deliver", keyPath: "id" }
    },
    order: {
      order: { name: "order", keyPath: "id" }
    }
  }
}
