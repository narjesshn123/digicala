import { createServer, Model, Response } from "miragejs"
// import Schema from "miragejs/orm/schema"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      product: Model,          
      // category: Model
      log: Model
    },

    seeds(server) {
      server.create("log", { id: 1, username: "narjes", password: 12345})
      server.create("user", { id: 1, price:10, tittle:"user1", name: "کالای دیجیتال", pic: "https://dkstatics-public.digikala.com/digikala-categories/41d9c93f460475bd5253a70faa0b689605b083bf_1656160881.png" },)
      server.create("user", { id: 2, price:10, tittle:"user2", name: "خودرو2", pic: "https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png" },)
      server.create("user", { id: 3, price:10, tittle:"user3", name: "مد و پوشاک3", pic: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png" },)
      server.create("user", { id: 4, price:10, tittle:"user4", name: "کالاهای سوپرمارکت", pic: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png" },)
      server.create("user", { id: 5, price:10, tittle:"user5", name: "اسباب بازی و کودک و نوجوان", pic: "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png" },)
      server.create("user", { id: 6, price:10, tittle:"user6", name: "محصولات بومی  و محلی ", pic: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png" },)
      server.create("user", { id: 7, price:10, tittle:"user7", name: "زیبایی و سلامت", pic: "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png" },)
      server.create("user", { id: 8, price:10, tittle:"user8", name: "HOME AND KITCHEN", pic: "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png" },)
      server.create("user", { id: 9, price:10, tittle:"user9", name: "BOOK", pic: "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png" },)
      server.create("user", { id: 10, price:10,tittle:"user10", name: "SPORT", pic: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png" },)
      server.create("product", { id: 1, price:50,tittle:"product1", name: "T-SHIRT", pic: "https://dkstatics-public.digikala.com/digikala-products/109bb09d6f0ad2d377d2f606121d95ca83663896_1656767181.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 2, price:50,tittle:"product2", name: "T-SHIRT", pic: "https://dkstatics-public.digikala.com/digikala-products/07b3443f72e523ab8cac913fbb90828c79605917_1660029789.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 3, price:50,tittle:"product3", name: "pillow", pic: "https://dkstatics-public.digikala.com/digikala-products/89ffe023c601e3f9c2e05ae05824bd4c76ac7afa_1640423010.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 4, price:50,tittle:"product4", name: "headphone", pic: "https://dkstatics-public.digikala.com/digikala-products/114855242.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 5, price:50,tittle:"product5", name: "book", pic: "https://dkstatics-public.digikala.com/digikala-products/7a8592ab6663710c84495f6dd8e527d18e04532c_1658549478.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 6, price:50,tittle:"product6", name: "Shiralat", pic: "https://dkstatics-public.digikala.com/digikala-products/7c04663e776f45f655a1107af51de58058833d5c_1663689075.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 7, price:50,tittle:"product7", name: "shoes", pic: "https://dkstatics-public.digikala.com/digikala-products/9b94975c29befab75e16c58fe19dd6b170b527eb_1662834373.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 8, price:50,tittle:"product8", name: "T-SHIRT", pic: "https://dkstatics-public.digikala.com/digikala-products/527bdb84c6e07bb57833e2a7cb0d7d632faa0950_1662380061.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 9, price:50,tittle:"product9", name: "Pot", pic: "https://dkstatics-public.digikala.com/digikala-products/084b5d5177f305e38e7b1d9167c78ff13f17e398_1635673523.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 10, price:50,tittle:"product10", name: "TV", pic: "https://dkstatics-public.digikala.com/digikala-products/e5066ac9a84883ab8936a724902d9ebe922f3613_1659439048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)
      server.create("product", { id: 11, price:50,tittle:"product11", name: "honer", pic: "https://dkstatics-public.digikala.com/digikala-products/97647566e79f7a5104c34bfc4c9fc6724c8bec5a_1659440534.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" },)

  
    
      
    },
    // seeds(server) {
    //     server.create("category", {id:1, tittle:"clothes", pic:""})
    // },

    routes() {
      this.namespace = "api"
      this.post("/auth/register", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        let log = schema.logs.create({
          username: data.username,
          password: data.password,
        });
        return log;
      });
     
      this.post("/auth/login", (schema, request) => {
        const user_data = JSON.parse(request.requestBody);
        let log = schema.logs.findBy({
          username: user_data.username,
          password: user_data.password,
        });
        if (log) {
          return {
            accessToken: 1,
            refreshToken: 2,
          };
        } else {
          return new Response(
            400,
            { some: "header" },
            { none_filed_error: ["user credential is failed"] }
          );
        }
      });
      this.post("/auth/refresh", (schema, request) => {
        const data = JSON.parse(request.requestBody)
        if(data.refreshToken ===2){
          return{
            accessToken: 1
          }
        }
        else{
          return new Response(
          401, 
          {some: "header"},
          {name_filed_error: ["user credential is failed"]}
          )
        }
      })

    

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
      this.get("/products", (schema)=>{
        return schema.products.all()
      })
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