describe('EscuelaJS API Testing', () => {

  it('TC01 - Get All Categories', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
      })
  })

  it('TC02 - Get Category by ID', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
      })
  })

  it('TC03 - Get All Products', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
      })
  })

  it('TC04 - Get Product by Existing ID', () => {
  cy.request('GET', 'https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      expect(response.status).to.eq(200)

      const productId = response.body[0].id

      cy.request('GET', `https://api.escuelajs.co/api/v1/products/${productId}`)
        .then((productResponse) => {
          expect(productResponse.status).to.eq(200)
          expect(productResponse.body.id).to.eq(productId)
        })
    })
})

  it('TC05 - Get All Users', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
      })
  })

  it('TC06 - Get User by ID', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/users/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
      })
  })

it('TC07 - Create Category', () => {
  cy.request('POST', 'https://api.escuelajs.co/api/v1/categories', {
    name: `QA Category ${Date.now()}`,
    image: 'https://placehold.co/600x400'
  }).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.name).to.contain('QA Category')
  })
})

 it('TC08 - Create User', () => {
  const email = `hakim${Date.now()}@mail.com`

  cy.request('POST', 'https://api.escuelajs.co/api/v1/users', {
    name: 'Hakim',
    email: email,
    password: '123456',
    avatar: 'https://i.pravatar.cc/300'
  }).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.email).to.eq(email)
  })
})

it('TC09 - Create Product', () => {

  const productTitle = `QA Product ${Date.now()}`

  cy.request('POST', 'https://api.escuelajs.co/api/v1/products', {
    title: productTitle,
    price: 100,
    description: 'Automation Testing Product',
    categoryId: 1,
    images: ['https://placehold.co/600x400']
  }).then((response) => {

    expect(response.status).to.eq(201)
    expect(response.body.title).to.eq(productTitle)

  })
})

  it('TC10 - Update Category', () => {
    cy.request('PUT', 'https://api.escuelajs.co/api/v1/categories/1', {
      name: 'Updated Category'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Updated Category')
    })
  })

  it('TC11 - Update User', () => {

  const email = `update${Date.now()}@mail.com`

  cy.request('POST', 'https://api.escuelajs.co/api/v1/users', {
    name: 'Temp User',
    email: email,
    password: '123456',
    avatar: 'https://i.pravatar.cc/300'
  }).then((createRes) => {

    const userId = createRes.body.id

    cy.request('PUT', `https://api.escuelajs.co/api/v1/users/${userId}`, {
      name: 'Updated User'
    }).then((updateRes) => {

      expect(updateRes.status).to.eq(200)
      expect(updateRes.body.name).to.eq('Updated User')

    })
  })
})

 it('TC12 - Delete Category', () => {

  cy.request('POST', 'https://api.escuelajs.co/api/v1/categories', {
    name: `Delete Category ${Date.now()}`,
    image: 'https://placehold.co/600x400'
  }).then((createRes) => {

    const categoryId = createRes.body.id

    cy.request({
      method: 'DELETE',
      url: `https://api.escuelajs.co/api/v1/categories/${categoryId}`,
      failOnStatusCode: false
    }).then((deleteRes) => {

      expect([200, 204]).to.include(deleteRes.status)

    })
  })
})

})