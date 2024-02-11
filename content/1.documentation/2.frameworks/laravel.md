---
title: "Laravel"
description: "Nuxtopia is one unique Nuxt 3 space where developers can find all the tools they need to build their next project."
---

::TheHeader
---
label: "Framework"
title: Laravel Framework
description: Learn how to use Laravel with Nuxt.js.
---
::

::Container
Setting up Laravel

#description
Are you a Nuxt.js enthusiast looking for a haven where your development dreams come true? Look no further than Nuxtopia – your ultimate destination for all things Nuxt.js! Whether you're a seasoned pro or just starting your journey with this powerful framework, Nuxtopia is here to support and inspire you every step of the way.
::
```shell [Terminal] {4-6,7} meta-info=val
  export default () => {
    console.log('Code block')
  }
```
::Container
Creating API with laravel as backend

#description
Are you a Nuxt.js enthusiast looking for a haven where your development dreams come true? Look no further than Nuxtopia – your ultimate destination for all things Nuxt.js! Whether you're a seasoned pro or just starting your journey with this powerful framework, Nuxtopia is here to support and inspire you every step of the way.
::
```php [api.php] {4-6,7} meta-info=val
  app.post('/api', (req, res) => {
    res.send('Hello World')
  })
```