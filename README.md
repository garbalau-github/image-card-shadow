# What is this?

If you do not have time for styling your image cards with padding and shadows,
you can use this NPM package, which is also kind of useful for "non-designer" developer
or developer without design layout attached to project

# Installation

`npm i image-card-shadow --save`

# How to use it?

```
import { imageCards } from 'image-card-shadow';

imageCards ({
    shadow_type: 'soft',
    padding: false
})
```

# Options

image-card-shadow supports 2 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)