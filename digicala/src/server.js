import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      category: Model
    },

    seeds(server) {
      server.create("user", { id: 1, price:10, tittle:"user1", name: "1کالای دیجیتال", pic: "https://dkstatics-public.digikala.com/digikala-categories/41d9c93f460475bd5253a70faa0b689605b083bf_1656160881.png" },)
      server.create("user", { id: 2, price:10, tittle:"user2", name: "خودرو2", pic: "https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png" },)
      server.create("user", { id: 3, price:10, tittle:"user3", name: "مدو پوشاک3", pic: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png" },)
      server.create("user", { id: 4, price:10, tittle:"user4", name: "کالاهای سوپرمارکت4", pic: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png" },)
      server.create("user", { id: 5, price:10, tittle:"user5", name: "اسباب بازی و کودک و نوجوان5", pic: "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png" },)
      server.create("user", { id: 6, price:10, tittle:"user6", name: "محصولات بومی  و محلی 6", pic: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png" },)
      server.create("user", { id: 7, price:10, tittle:"user7", name: "زیبایی و سلامت7", pic: "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png" },)
      server.create("user", { id: 8, price:10, tittle:"user8", name: "خانه و آشپزخانه8", pic: "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png" },)
      server.create("user", { id: 9, price:10, tittle:"user9", name: "کتاب9", pic: "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png" },)
      server.create("user", { id: 10, price:10,tittle:"user10", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 11, price:10,tittle:"user11", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 12, price:10,tittle:"user12", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 13, price:10,tittle:"user13", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 14, price:10,tittle:"user14", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 15, price:10,tittle:"user15", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 16, price:10,tittle:"user16", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 17, price:10,tittle:"user17", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("user", { id: 18, price:10, tittle:"user18", name: "ورزش10", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      
    },
    // seeds(server) {
    //     server.create("category", {id:1, tittle:"clothes", pic:""})
    // },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })
      // this.get("/categorys", (schema)=>{
      //   return schema.categorys.all()
      // })

      this.get("/users/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.users.find(id)
      })
    //   this.get("/users/id", (schema, request) => {
    //     let id = request.params.id
      
    //     return schema.users.find(id)
    //   })
    },
  })

  return server
}
// import { createServer, Model } from "miragejs"

// export function makeServer({ environment = "test" } = {}) {
//   let server = createServer({
//     environment,

//     models: {
//       user: Model,
//     },

//     seeds(server) {
//       server.create("user", { name: "Bob" })
//       server.create("user", { name: "Alice" })
//     },

//     routes() {
//       this.namespace = "api"

//       this.get("/users", (schema) => {
//         return schema.users.all()
//       })
//     },
//   })

//   return server
// }